'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('./leaflet.google');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleLayer = function (_GridLayer) {
  _inherits(GoogleLayer, _GridLayer);

  function GoogleLayer() {
    _classCallCheck(this, GoogleLayer);

    return _possibleConstructorReturn(this, (GoogleLayer.__proto__ || Object.getPrototypeOf(GoogleLayer)).apply(this, arguments));
  }

  _createClass(GoogleLayer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _get(GoogleLayer.prototype.__proto__ || Object.getPrototypeOf(GoogleLayer.prototype), 'componentWillMount', this).call(this);

      var _props = this.props,
          _map = _props.map,
          googlekey = _props.googlekey,
          maptype = _props.maptype,
          asclientid = _props.asclientid,
          props = _objectWithoutProperties(_props, ['map', 'googlekey', 'maptype', 'asclientid']);

      this.leafletElement = new L.gridLayer.googleMutant(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          opacity = _props2.opacity,
          zIndex = _props2.zIndex;

      if (opacity !== prevProps.opacity) {
        this.leafletElement.setOpacity(opacity);
      }
      if (zIndex !== prevProps.zIndex) {
        this.leafletElement.setZIndex(zIndex);
      }
    }
  }]);

  return GoogleLayer;
}(_reactLeaflet.GridLayer);

GoogleLayer.propTypes = {
  googlekey: _react.PropTypes.string.isRequired,
  maptype: _react.PropTypes.string,
  asclientid: _react.PropTypes.bool
};
exports.default = GoogleLayer;