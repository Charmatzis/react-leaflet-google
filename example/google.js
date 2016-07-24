import React from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet'
import {GoogleLayer} from '../src'
const { BaseLayer } = LayersControl;
const key = 'Your Key goes here';

export default class GoogleExample extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
        <LayersControl position='topright'>
          <BaseLayer  name='OpenStreetMap.Mapnik'>
            <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
          </BaseLayer>
          <BaseLayer checked name='Google Maps Roads'>
            <GoogleLayer googlekey={key}  type='ROADMAP'/>
          </BaseLayer>
          <BaseLayer  name='Google Maps Hydrid'>
            <GoogleLayer googlekey={key}  type='HYBRID' />
          </BaseLayer>
        </LayersControl>
      </Map>
    )
  }
}
