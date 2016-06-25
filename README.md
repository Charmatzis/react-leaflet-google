# react-leaflet-google
GoogleMaps layer as React component for Leaflet build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet).
Also it uses [google-maps](https://www.npmjs.com/package/google-maps) a wrapper for asynchronously used Google Maps API in browser.


# Getting started

```
import { Map, TileLayer, LayersControl } from 'react-leaflet'
import {GoogleLayer} from '../src'
const { BaseLayer } = LayersControl;


....

 <BaseLayer checked name='Google Maps Roads'>
   <GoogleLayer  type='ROADMAP'/>
</BaseLayer>
<BaseLayer  name='Google Maps Hydrid'>
   <GoogleLayer type='HYBRID' />
</BaseLayer>


```

For more details on how to use this plugin check the example.