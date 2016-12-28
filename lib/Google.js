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

var GoogleLayer = function (_BaseTileLayer) {
  _inherits(GoogleLayer, _BaseTileLayer);

  function GoogleLayer() {
    _classCallCheck(this, GoogleLayer);

    return _possibleConstructorReturn(this, (GoogleLayer.__proto__ || Object.getPrototypeOf(GoogleLayer)).apply(this, arguments));
  }

  _createClass(GoogleLayer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _get(GoogleLayer.prototype.__proto__ || Object.getPrototypeOf(GoogleLayer.prototype), 'componentWillMount', this).call(this);
      var _props = this.props;
      var _map = _props.map;
      var _lc = _props.layerContainer;
      var googlekey = _props.googlekey;
      var type = _props.type;
      var asclientid = _props.asclientid;

      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'googlekey', 'type', 'asclientid']);

      this.leafletElement = new L.Google(googlekey, type, asclientid, props);
    }
  }]);

  return GoogleLayer;
}(_reactLeaflet.BaseTileLayer);

GoogleLayer.propTypes = {
  type: _react.PropTypes.string,
  googlekey: _react.PropTypes.string.isRequired,
  asclientid: _react.PropTypes.bool
};
exports.default = GoogleLayer;