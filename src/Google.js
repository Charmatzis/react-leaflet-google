import React, {PropTypes}  from 'react';
import {BaseTileLayer} from 'react-leaflet';
import {Google} from './leaflet.google';




export default class GoogleLayer extends BaseTileLayer {
  static propTypes = {
    type: PropTypes.string
  };



  componentWillMount() {
    super.componentWillMount();
      const {map: _map, layerContainer: _lc, type, ...props} = this.props;
      this.leafletElement = new L.Google(type, props); 
  }
 
componentDidUpdate(prevProps) {
  this.setStyleIfChanged(prevProps, this.props);
}
}