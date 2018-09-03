import React from "react";
import PropTypes from "prop-types";
import * as L from "leaflet";
import { GridLayer, withLeaflet } from "react-leaflet";
import "./leaflet.google";

class GoogleLayer extends GridLayer {
  static propTypes = {
    googlekey: PropTypes.string.isRequired,
    maptype: PropTypes.string,
    asclientid: PropTypes.bool,
    channel: PropTypes.string,
  };
  
  static contextTypes = GridLayer.contextTypes;
  static childContextTypes = GridLayer.childContextTypes;
  
  createLeafletElement(props) {
    this.leafletElement = new L.gridLayer.googleMutant(props);
    return this.leafletElement;
  }
  
  updateLeafletElement(prevProps, nextProps) {
    const { opacity, zIndex } = nextProps;
    if ( opacity !== prevProps.opacity ) {
      this.leafletElement.setOpacity(opacity);
    }
    if ( zIndex !== prevProps.zIndex ) {
      this.leafletElement.setZIndex(zIndex);
    }
  }
}

export default withLeaflet(GoogleLayer);
