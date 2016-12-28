import React, {PropTypes}  from 'react';
import {BaseTileLayer} from 'react-leaflet';
import {Google} from './leaflet.google';


export default class GoogleLayer extends BaseTileLayer {
  static propTypes = {
    type: PropTypes.string,
    googlekey: PropTypes.string.isRequired,
    asclientid: PropTypes.bool
  };



  componentWillMount() {
    super.componentWillMount();
    const {map: _map, layerContainer: _lc, googlekey, type, asclientid, ...props} = this.props;
    this.leafletElement = new L.Google(googlekey, type, asclientid, props);
  }


}