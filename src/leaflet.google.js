// Based on https://github.com/shramov/leaflet-plugins
// GridLayer like https://avinmathew.com/leaflet-and-google-maps/ , but using MutationObserver instead of jQuery
import GoogleMapsLoader from "google-maps";
import * as L from "leaflet";

GoogleMapsLoader.VERSION = "3.32";

let google;

// class GridLayer.GoogleMutant
// extends GridLayer
L.GridLayer.GoogleMutant = L.GridLayer.extend({
  includes: L.Evented,
  
  options: {
    minZoom: 0,
    maxZoom: 18,
    tileSize: 256,
    subdomains: "abc",
    errorTileUrl: "",
    attribution: "", // The mutant container will add its own attribution anyways.
    opacity: 1,
    continuousWorld: false,
    noWrap: false,
    // 🍂option type: String = 'roadmap'
    // Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
    type: "HYBRID",
    maxNativeZoom: 18,
  },
  
  initialize(options) {
    L.GridLayer.prototype.initialize.call(this, options);
    let self = this;
    
    if ( options.asclientid ) {
      GoogleMapsLoader.CLIENT = options.googlekey;
    } else {
      GoogleMapsLoader.KEY = options.googlekey;
    }
    
    GoogleMapsLoader.LIBRARIES = options.libraries || [];
    
    if ( options.channel ) {
      GoogleMapsLoader.CHANNEL = options.channel;
    }
    
    self._type = options.maptype || "SATELLITE";
    
    GoogleMapsLoader.load(function(_google) {
      google = _google;
      self._ready = true;
      // self._initMapObject();
      // self.
      self._initMutant();
      self._update();
      
      if ( options.onAfterLoad ) {
        options.onAfterLoad(google);
      }
      
      // this._ready = google.maps.Map !== undefined;
      // if (!this._ready) L.Google.asyncWait.push(this);
    });
    
    // Couple data structures indexed by tile key
    this._tileCallbacks = {}; // Callbacks for promises for tiles that are expected
    this._freshTiles = {}; // Tiles from the mutant which haven't been requested yet
    
    this._imagesPerTile = self._type === "HYBRID" ? 2 : 1;
    this.createTile =
      self._type === "HYBRID" ? this._createMultiTile : this._createSingleTile;
  },
  
  onAdd(map) {
    L.GridLayer.prototype.onAdd.call(this, map);
    this._initMutantContainer();
    
    // Will be called after callback passed in initialize function
    GoogleMapsLoader.load(
      function(google) {
        this._map = map;
        
        this._initMutant();
        
        map.on("viewreset", this._reset, this);
        map.on("move", this._update, this);
        map.on("zoomend", this._handleZoomAnim, this);
        map.on("resize", this._resize, this);
        
        // 20px instead of 1em to avoid a slight overlap with google's attribution
        map._controlCorners.bottomright.style.marginBottom = "20px";
        
        this._reset();
        this._update();
      }.bind(this)
    );
  },
  
  onRemove(map) {
    L.GridLayer.prototype.onRemove.call(this, map);
    map._container.removeChild(this._mutantContainer);
    this._mutantContainer = undefined;
    
    map.off("viewreset", this._reset, this);
    map.off("move", this._update, this);
    map.off("zoomend", this._handleZoomAnim, this);
    map.off("resize", this._resize, this);
    
    if ( map._controlCorners )
      map._controlCorners.bottomright.style.marginBottom = "0em";
  },
  
  getAttribution() {
    return this.options.attribution;
  },
  
  setOpacity(opacity) {
    this.options.opacity = opacity;
    if ( opacity < 1 ) {
      L.DomUtil.setOpacity(this._mutantContainer, opacity);
    }
  },
  
  setElementSize(e, size) {
    e.style.width = size.x + "px";
    e.style.height = size.y + "px";
  },
  
  _initMutantContainer() {
    if ( !this._mutantContainer ) {
      this._mutantContainer = L.DomUtil.create(
        "div",
        "leaflet-google-mutant leaflet-top leaflet-left"
      );
      this._mutantContainer.id =
        "_MutantContainer_" + L.Util.stamp(this._mutantContainer);
      // 			this._mutantContainer.style.zIndex = 'auto';
      this._mutantContainer.style.pointerEvents = "none";
      
      this._map.getContainer().appendChild(this._mutantContainer);
    }
    
    this.setOpacity(this.options.opacity);
    this.setElementSize(this._mutantContainer, this._map.getSize());
    
    this._attachObserver(this._mutantContainer);
  },
  
  _initMutant() {
    if ( !this._ready || !this._mutantContainer ) return;
    this._mutantCenter = new google.maps.LatLng(0, 0);
    
    let map = new google.maps.Map(this._mutantContainer, {
      center: this._mutantCenter,
      zoom: 0,
      tilt: 0,
      mapTypeId: google.maps.MapTypeId[ this._type ],
      disableDefaultUI: true,
      keyboardShortcuts: false,
      draggable: false,
      disableDoubleClickZoom: true,
      scrollwheel: false,
      streetViewControl: false,
      styles: this.options.styles || {},
      backgroundColor: "transparent",
    });
    
    this._mutant = map;
    
    // 🍂event spawned
    // Fired when the mutant has been created.
    this.fire("spawned", {
      mapObject: map,
    });
  },
  
  _attachObserver: function _attachObserver(node) {
    // 		console.log('Gonna observe', node);
    
    let observer = new MutationObserver(this._onMutations.bind(this));
    
    // pass in the target node, as well as the observer options
    observer.observe(node, {
      childList: true,
      subtree: true,
    });
  },
  
  _onMutations: function _onMutations(mutations) {
    for ( let i = 0; i < mutations.length; ++i ) {
      let mutation = mutations[ i ];
      for ( let j = 0; j < mutation.addedNodes.length; ++j ) {
        let node = mutation.addedNodes[ j ];
        
        if ( node instanceof HTMLImageElement ) {
          this._onMutatedImage(node);
        } else if ( node instanceof HTMLElement ) {
          Array.prototype.forEach.call(
            node.querySelectorAll("img"),
            this._onMutatedImage.bind(this)
          );
        }
      }
    }
  },
  
  // Only images which 'src' attrib match this will be considered for moving around.
  // Looks like some kind of string-based protobuf, maybe??
  // Only the roads (and terrain, and vector-based stuff) match this pattern
  _roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+)!/,
  
  // On the other hand, raster imagery matches this other pattern
  _satRegexp: /x=(\d+)&y=(\d+)&z=(\d+)/,
  
  // On small viewports, when zooming in/out, a static image is requested
  // This will not be moved around, just removed from the DOM.
  _staticRegExp: /StaticMapService\.GetMapImage/,
  
  _onMutatedImage: function _onMutatedImage(imgNode) {
    // 		if (imgNode.src) {
    // 			console.log('caught mutated image: ', imgNode.src);
    // 		}
    
    let coords;
    let match = imgNode.src.match(this._roadRegexp);
    let sublayer;
    let parent;
    
    if ( match ) {
      coords = {
        z: match[ 1 ],
        x: match[ 2 ],
        y: match[ 3 ],
      };
      if ( this._imagesPerTile > 1 ) {
        imgNode.style.zIndex = 1;
      }
      sublayer = 1;
    } else {
      match = imgNode.src.match(this._satRegexp);
      if ( match ) {
        coords = {
          x: match[ 1 ],
          y: match[ 2 ],
          z: match[ 3 ],
        };
      }
      // 			imgNode.style.zIndex = 0;
      sublayer = 0;
    }
    
    if ( coords ) {
      let key = this._tileCoordsToKey(coords);
      imgNode.style.position = "absolute";
      if ( this._imagesPerTile > 1 ) {
        key += "/" + sublayer;
      }
      if ( key in this._tileCallbacks && this._tileCallbacks[ key ] ) {
        // console.log('Fullfilling callback ', key);
        this._tileCallbacks[ key ].pop()(imgNode);
        if ( !this._tileCallbacks[ key ].length ) {
          delete this._tileCallbacks[ key ];
        }
      } else {
        // console.log('Caching for later', key);
        parent = imgNode.parentNode;
        if ( parent ) {
          parent.removeChild(imgNode);
          parent.removeChild = L.Util.falseFn;
          // 					imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
        }
        if ( key in this._freshTiles ) {
          this._freshTiles[ key ].push(imgNode);
        } else {
          this._freshTiles[ key ] = [ imgNode ];
        }
      }
    } else if ( imgNode.src.match(this._staticRegExp) ) {
      parent = imgNode.parentNode;
      if ( parent ) {
        // Remove the image, but don't store it anywhere.
        // Image needs to be replaced instead of removed, as the container
        // seems to be reused.
        imgNode.parentNode.replaceChild(L.DomUtil.create("img"), imgNode);
      }
    }
  },
  
  // This will be used as this.createTile for 'roadmap', 'sat', 'terrain'
  _createSingleTile: function createTile(coords, done) {
    let key = this._tileCoordsToKey(coords);
    // console.log('Need:', key);
    
    if ( key in this._freshTiles ) {
      let tile = this._freshTiles[ key ].pop();
      if ( !this._freshTiles[ key ].length ) {
        delete this._freshTiles[ key ];
      }
      L.Util.requestAnimFrame(done);
      // 			console.log('Got ', key, ' from _freshTiles');
      return tile;
    }
    let tileContainer = L.DomUtil.create("div");
    this._tileCallbacks[ key ] = this._tileCallbacks[ key ] || [];
    this._tileCallbacks[ key ].push(
      (function(c /* , k*/) {
        return function(imgNode) {
          let parent = imgNode.parentNode;
          if ( parent ) {
            parent.removeChild(imgNode);
            parent.removeChild = L.Util.falseFn;
            // 						imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
          }
          c.appendChild(imgNode);
          done();
          // 					console.log('Sent ', k, ' to _tileCallbacks');
        };
      })(tileContainer /* , key*/)
    );
    
    return tileContainer;
  },
  
  // This will be used as this.createTile for 'hybrid'
  _createMultiTile: function createTile(coords, done) {
    let key = this._tileCoordsToKey(coords);
    
    let tileContainer = L.DomUtil.create("div");
    tileContainer.dataset.pending = this._imagesPerTile;
    
    for ( let i = 0; i < this._imagesPerTile; i++ ) {
      let key2 = key + "/" + i;
      if ( key2 in this._freshTiles ) {
        tileContainer.appendChild(this._freshTiles[ key2 ].pop());
        if ( !this._freshTiles[ key2 ].length ) {
          delete this._freshTiles[ key2 ];
        }
        tileContainer.dataset.pending--;
        // 				console.log('Got ', key2, ' from _freshTiles');
      } else {
        this._tileCallbacks[ key2 ] = this._tileCallbacks[ key2 ] || [];
        this._tileCallbacks[ key2 ].push(
          (function(c /* , k2*/) {
            return function(imgNode) {
              let parent = imgNode.parentNode;
              if ( parent ) {
                parent.removeChild(imgNode);
                parent.removeChild = L.Util.falseFn;
                // 							imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
              }
              c.appendChild(imgNode);
              c.dataset.pending--;
              if ( !parseInt(c.dataset.pending) ) {
                done();
              }
              // 						console.log('Sent ', k2, ' to _tileCallbacks, still ', c.dataset.pending, ' images to go');
            };
          })(tileContainer /* , key2*/)
        );
      }
    }
    
    if ( !parseInt(tileContainer.dataset.pending) ) {
      L.Util.requestAnimFrame(done);
    }
    return tileContainer;
  },
  
  _checkZoomLevels() {
    // setting the zoom level on the Google map may result in a different zoom level than the one requested
    // (it won't go beyond the level for which they have data).
    // verify and make sure the zoom levels on both Leaflet and Google maps are consistent
    if (
      this._map.getZoom() !== undefined &&
      this._mutant.getZoom() !== this._map.getZoom()
    ) {
      // zoom levels are out of sync. Set the leaflet zoom level to match the google one
      this._map.setZoom(this._mutant.getZoom());
    }
  },
  
  _reset() {
    this._initContainer();
  },
  
  _update() {
    L.GridLayer.prototype._update.call(this);
    if ( !this._mutant ) return;
    
    let center = this._map.getCenter();
    let _center = new google.maps.LatLng(center.lat, center.lng);
    
    this._mutant.setCenter(_center);
    let zoom = this._map.getZoom();
    if ( zoom !== undefined ) {
      this._mutant.setZoom(Math.round(this._map.getZoom()));
    }
  },
  
  _resize() {
    let size = this._map.getSize();
    if (
      this._mutantContainer.style.width === size.x &&
      this._mutantContainer.style.height === size.y
    )
      return;
    this.setElementSize(this._mutantContainer, size);
    if ( !this._mutant ) return;
    google.maps.event.trigger(this._mutant, "resize");
  },
  
  _handleZoomAnim() {
    let center = this._map.getCenter();
    let _center = new google.maps.LatLng(center.lat, center.lng);
    
    this._mutant.setCenter(_center);
    this._mutant.setZoom(Math.round(this._map.getZoom()));
  },
  
  // Agressively prune _freshtiles when a tile with the same key is removed,
  // this prevents a problem where Leaflet keeps a loaded tile longer than
  // GMaps, so that GMaps makes two requests but Leaflet only consumes one,
  // polluting _freshTiles with stale data.
  _removeTile(key) {
    if ( this._imagesPerTile > 1 ) {
      for ( let i = 0; i < this._imagesPerTile; i++ ) {
        let key2 = key + "/" + i;
        if ( key2 in this._freshTiles ) {
          delete this._freshTiles[ key2 ];
        }
        // 				console.log('Pruned spurious hybrid _freshTiles');
      }
    } else if ( key in this._freshTiles ) {
      delete this._freshTiles[ key ];
      // 				console.log('Pruned spurious _freshTiles', key);
    }
    
    return L.GridLayer.prototype._removeTile.call(this, key);
  },
});

// 🍂factory gridLayer.googleMutant(options)
// Returns a new `GridLayer.GoogleMutant` given its options
L.gridLayer.googleMutant = function(options) {
  return new L.GridLayer.GoogleMutant(options);
};
