(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("react"), require("react-leaflet"));
	else
		root["ReactLeaflet"] = factory(root["React"], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GoogleLayer = undefined;

	var _Google = __webpack_require__(1);

	var _Google2 = _interopRequireDefault(_Google);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GoogleLayer = _Google2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactLeaflet = __webpack_require__(3);

	var _leaflet = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoogleLayer = function (_BaseTileLayer) {
	  _inherits(GoogleLayer, _BaseTileLayer);

	  function GoogleLayer() {
	    _classCallCheck(this, GoogleLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GoogleLayer).apply(this, arguments));
	  }

	  _createClass(GoogleLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(GoogleLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer']);

	      this.leafletElement = L.Google(props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return GoogleLayer;
	}(_reactLeaflet.BaseTileLayer);

	exports.default = GoogleLayer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/*
	 * Google layer using Google Maps API
	 */

	/* global google: true */

	L.Google = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minZoom: 0,
			maxZoom: 18,
			tileSize: 256,
			subdomains: 'abc',
			errorTileUrl: '',
			attribution: '',
			opacity: 1,
			continuousWorld: false,
			noWrap: false,
			mapOptions: {
				backgroundColor: '#dddddd'
			}
		},

		// Possible types: SATELLITE, ROADMAP, HYBRID, TERRAIN
		initialize: function initialize(type, options) {
			L.Util.setOptions(this, options);

			this._ready = google.maps.Map !== undefined;
			if (!this._ready) L.Google.asyncWait.push(this);

			this._type = type || 'SATELLITE';
		},

		onAdd: function onAdd(map, insertAtTheBottom) {
			this._map = map;
			this._insertAtTheBottom = insertAtTheBottom;

			// create a container div for tiles
			this._initContainer();
			this._initMapObject();

			// set up events
			map.on('viewreset', this._reset, this);

			this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
			map.on('move', this._update, this);

			map.on('zoomanim', this._handleZoomAnim, this);

			//20px instead of 1em to avoid a slight overlap with google's attribution
			map._controlCorners.bottomright.style.marginBottom = '20px';

			this._reset();
			this._update();
		},

		onRemove: function onRemove(map) {
			map._container.removeChild(this._container);

			map.off('viewreset', this._reset, this);

			map.off('move', this._update, this);

			map.off('zoomanim', this._handleZoomAnim, this);

			map._controlCorners.bottomright.style.marginBottom = '0em';
		},

		getAttribution: function getAttribution() {
			return this.options.attribution;
		},

		setOpacity: function setOpacity(opacity) {
			this.options.opacity = opacity;
			if (opacity < 1) {
				L.DomUtil.setOpacity(this._container, opacity);
			}
		},

		setElementSize: function setElementSize(e, size) {
			e.style.width = size.x + 'px';
			e.style.height = size.y + 'px';
		},

		_initContainer: function _initContainer() {
			var tilePane = this._map._container,
			    first = tilePane.firstChild;

			if (!this._container) {
				this._container = L.DomUtil.create('div', 'leaflet-google-layer leaflet-top leaflet-left');
				this._container.id = '_GMapContainer_' + L.Util.stamp(this);
				this._container.style.zIndex = 'auto';
			}

			tilePane.insertBefore(this._container, first);

			this.setOpacity(this.options.opacity);
			this.setElementSize(this._container, this._map.getSize());
		},

		_initMapObject: function _initMapObject() {
			if (!this._ready) return;
			this._google_center = new google.maps.LatLng(0, 0);
			var map = new google.maps.Map(this._container, {
				center: this._google_center,
				zoom: 0,
				tilt: 0,
				mapTypeId: google.maps.MapTypeId[this._type],
				disableDefaultUI: true,
				keyboardShortcuts: false,
				draggable: false,
				disableDoubleClickZoom: true,
				scrollwheel: false,
				streetViewControl: false,
				styles: this.options.mapOptions.styles,
				backgroundColor: this.options.mapOptions.backgroundColor
			});

			var _this = this;
			this._reposition = google.maps.event.addListenerOnce(map, 'center_changed', function () {
				_this.onReposition();
			});
			this._google = map;

			google.maps.event.addListenerOnce(map, 'idle', function () {
				_this._checkZoomLevels();
			});
			google.maps.event.addListenerOnce(map, 'tilesloaded', function () {
				_this.fire('load');
			});
			//Reporting that map-object was initialized.
			this.fire('MapObjectInitialized', { mapObject: map });
		},

		_checkZoomLevels: function _checkZoomLevels() {
			//setting the zoom level on the Google map may result in a different zoom level than the one requested
			//(it won't go beyond the level for which they have data).
			// verify and make sure the zoom levels on both Leaflet and Google maps are consistent
			if (this._map.getZoom() !== undefined && this._google.getZoom() !== this._map.getZoom()) {
				//zoom levels are out of sync. Set the leaflet zoom level to match the google one
				this._map.setZoom(this._google.getZoom());
			}
		},

		_reset: function _reset() {
			this._initContainer();
		},

		_update: function _update() {
			if (!this._google) return;
			this._resize();

			var center = this._map.getCenter();
			var _center = new google.maps.LatLng(center.lat, center.lng);

			this._google.setCenter(_center);
			if (this._map.getZoom() !== undefined) this._google.setZoom(Math.round(this._map.getZoom()));

			this._checkZoomLevels();
		},

		_resize: function _resize() {
			var size = this._map.getSize();
			if (this._container.style.width === size.x && this._container.style.height === size.y) return;
			this.setElementSize(this._container, size);
			this.onReposition();
		},

		_handleZoomAnim: function _handleZoomAnim(e) {
			var center = e.center;
			var _center = new google.maps.LatLng(center.lat, center.lng);

			this._google.setCenter(_center);
			this._google.setZoom(Math.round(e.zoom));
		},

		onReposition: function onReposition() {
			if (!this._google) return;
			google.maps.event.trigger(this._google, 'resize');
		}
	});

	L.Google.asyncWait = [];
	L.Google.asyncInitialize = function () {
		var i;
		for (i = 0; i < L.Google.asyncWait.length; i++) {
			var o = L.Google.asyncWait[i];
			o._ready = true;
			if (o._container) {
				o._initMapObject();
				o._update();
			}
		}
		L.Google.asyncWait = [];
	};

/***/ }
/******/ ])
});
;