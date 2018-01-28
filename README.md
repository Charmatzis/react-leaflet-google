# react-leaflet-google [![npm version](https://img.shields.io/badge/npm-5.4.0-blue.svg)](https://www.npmjs.com/package/react-leaflet-google)
GoogleMaps layer as React component for Leaflet build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet). 

The google maps layer is using the plugin from [Leaflet.GridLayer.GoogleMutant](https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant) 

Also it uses [google-maps](https://www.npmjs.com/package/google-maps), a wrapper for asynchronously download Google Maps API in the browser.

![Example](images/example.gif)

# supported versions
- "react-leaflet": "^1.7.0"
- "leaflet": "^1.0.3"
- "react": "^15.5.0 || ^16.2.0"


# Getting started

```
import { Map, TileLayer, LayersControl } from 'react-leaflet'
import {GoogleLayer} from '../src'
const { BaseLayer } = LayersControl;
const key = 'Your Key goes here';
const terrain = 'TERRAIN';
const road = 'ROADMAP';


....

  <BaseLayer checked name='Google Maps Roads'>
     <GoogleLayer googlekey={key}  maptype={road}/>
  </BaseLayer>
  <BaseLayer  name='Google Maps Terrain'>
     <GoogleLayer googlekey={key}  maptype={terrain} />
  </BaseLayer>


```

For more details on how to use this plugin check the example.
