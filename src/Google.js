import React from 'react';
import PropTypes from 'prop-types';
import {GridLayer} from 'react-leaflet';
import {Google} from './leaflet.google';


export default class GoogleLayer extends GridLayer {
  static propTypes = {
    googlekey: PropTypes.string.isRequired,
    maptype: PropTypes.string,
    asclientid: PropTypes.bool,
    channel: PropTypes.string
  };


  static contextTypes = GridLayer.contextTypes;
  static childContextTypes = GridLayer.childContextTypes;




  componentWillMount() {
    super.componentWillMount();
    const {map: _map, googlekey, maptype, asclientid, channel, ...props} = this.props;
    this.leafletElement = new L.gridLayer.googleMutant(this.props);
  }

   componentDidUpdate (prevProps) {
    const { opacity, zIndex } = this.props
    if (opacity !== prevProps.opacity) {
      this.leafletElement.setOpacity(opacity)
    }
    if (zIndex !== prevProps.zIndex) {
      this.leafletElement.setZIndex(zIndex)
    }
  }


}
