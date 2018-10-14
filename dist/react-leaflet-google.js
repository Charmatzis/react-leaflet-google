(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("leaflet"), require("react-leaflet"), require("google-maps"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "leaflet", "react-leaflet", "google-maps"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("react"), require("leaflet"), require("react-leaflet"), require("google-maps"));
	else
		root["ReactLeaflet"] = factory(root["React"], root["L"], root[undefined], root["GoogleMapsLoader"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GoogleLayer = __webpack_require__(1);

	Object.defineProperty(exports, "GoogleLayer", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GoogleLayer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _leaflet = __webpack_require__(10);

	var L = _interopRequireWildcard(_leaflet);

	var _reactLeaflet = __webpack_require__(11);

	__webpack_require__(12);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    key: "createLeafletElement",
	    value: function createLeafletElement(props) {
	      this.leafletElement = new L.gridLayer.googleMutant(props);
	      return this.leafletElement;
	    }
	  }, {
	    key: "updateLeafletElement",
	    value: function updateLeafletElement(prevProps, nextProps) {
	      var opacity = nextProps.opacity,
	          zIndex = nextProps.zIndex;

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
	  googlekey: _propTypes2.default.string.isRequired,
	  maptype: _propTypes2.default.string,
	  asclientid: _propTypes2.default.bool,
	  channel: _propTypes2.default.string
	};
	GoogleLayer.contextTypes = _reactLeaflet.GridLayer.contextTypes;
	GoogleLayer.childContextTypes = _reactLeaflet.GridLayer.childContextTypes;
	exports.default = (0, _reactLeaflet.withLeaflet)(GoogleLayer);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(6);

	var ReactPropTypesSecret = __webpack_require__(7);
	var checkPropTypes = __webpack_require__(8);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(7);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(7);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _googleMaps = __webpack_require__(13);

	var _googleMaps2 = _interopRequireDefault(_googleMaps);

	var _leaflet = __webpack_require__(10);

	var L = _interopRequireWildcard(_leaflet);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Based on https://github.com/shramov/leaflet-plugins
	// GridLayer like https://avinmathew.com/leaflet-and-google-maps/ , but using MutationObserver instead of jQuery
	_googleMaps2.default.VERSION = "3.32";

	var google = void 0;

	// class GridLayer.GoogleMutant
	// extends GridLayer
	L.GridLayer.GoogleMutant = L.GridLayer.extend({
	  includes: L.Evented,

	  options: {
	    minZoom: 0,
	    maxZoom: 18,
	    tileSize: 256,
	    subdomains: "abc",
	    errorTileUrl: "",
	    attribution: "", // The mutant container will add its own attribution anyways.
	    opacity: 1,
	    continuousWorld: false,
	    noWrap: false,
	    // 🍂option type: String = 'roadmap'
	    // Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
	    type: "HYBRID",
	    maxNativeZoom: 18
	  },

	  initialize: function initialize(options) {
	    L.GridLayer.prototype.initialize.call(this, options);
	    var self = this;

	    if (options.asclientid) {
	      _googleMaps2.default.CLIENT = options.googlekey;
	    } else {
	      _googleMaps2.default.KEY = options.googlekey;
	    }

	    _googleMaps2.default.LIBRARIES = options.libraries || [];

	    if (options.channel) {
	      _googleMaps2.default.CHANNEL = options.channel;
	    }

	    self._type = options.maptype || "SATELLITE";

	    _googleMaps2.default.load(function (_google) {
	      google = _google;
	      self._ready = true;
	      // self._initMapObject();
	      // self.
	      self._initMutant();
	      self._update();

	      if (options.onAfterLoad) {
	        options.onAfterLoad(google);
	      }

	      // this._ready = google.maps.Map !== undefined;
	      // if (!this._ready) L.Google.asyncWait.push(this);
	    });

	    // Couple data structures indexed by tile key
	    this._tileCallbacks = {}; // Callbacks for promises for tiles that are expected
	    this._freshTiles = {}; // Tiles from the mutant which haven't been requested yet

	    this._imagesPerTile = self._type === "HYBRID" ? 2 : 1;
	    this.createTile = self._type === "HYBRID" ? this._createMultiTile : this._createSingleTile;
	  },
	  onAdd: function onAdd(map) {
	    L.GridLayer.prototype.onAdd.call(this, map);
	    this._initMutantContainer();

	    // Will be called after callback passed in initialize function
	    _googleMaps2.default.load(function (google) {
	      this._map = map;

	      this._initMutant();

	      map.on("viewreset", this._reset, this);
	      map.on("move", this._update, this);
	      map.on("zoomend", this._handleZoomAnim, this);
	      map.on("resize", this._resize, this);

	      // 20px instead of 1em to avoid a slight overlap with google's attribution
	      map._controlCorners.bottomright.style.marginBottom = "20px";

	      this._reset();
	      this._update();
	    }.bind(this));
	  },
	  onRemove: function onRemove(map) {
	    L.GridLayer.prototype.onRemove.call(this, map);
	    map._container.removeChild(this._mutantContainer);
	    this._mutantContainer = undefined;

	    map.off("viewreset", this._reset, this);
	    map.off("move", this._update, this);
	    map.off("zoomend", this._handleZoomAnim, this);
	    map.off("resize", this._resize, this);

	    if (map._controlCorners) map._controlCorners.bottomright.style.marginBottom = "0em";
	  },
	  getAttribution: function getAttribution() {
	    return this.options.attribution;
	  },
	  setOpacity: function setOpacity(opacity) {
	    this.options.opacity = opacity;
	    if (opacity < 1) {
	      L.DomUtil.setOpacity(this._mutantContainer, opacity);
	    }
	  },
	  setElementSize: function setElementSize(e, size) {
	    e.style.width = size.x + "px";
	    e.style.height = size.y + "px";
	  },
	  _initMutantContainer: function _initMutantContainer() {
	    if (!this._mutantContainer) {
	      this._mutantContainer = L.DomUtil.create("div", "leaflet-google-mutant leaflet-top leaflet-left");
	      this._mutantContainer.id = "_MutantContainer_" + L.Util.stamp(this._mutantContainer);
	      // 			this._mutantContainer.style.zIndex = 'auto';
	      this._mutantContainer.style.pointerEvents = "none";

	      this._map.getContainer().appendChild(this._mutantContainer);
	    }

	    this.setOpacity(this.options.opacity);
	    this.setElementSize(this._mutantContainer, this._map.getSize());

	    this._attachObserver(this._mutantContainer);
	  },
	  _initMutant: function _initMutant() {
	    if (!this._ready || !this._mutantContainer) return;
	    this._mutantCenter = new google.maps.LatLng(0, 0);

	    var map = new google.maps.Map(this._mutantContainer, {
	      center: this._mutantCenter,
	      zoom: 0,
	      tilt: 0,
	      mapTypeId: google.maps.MapTypeId[this._type],
	      disableDefaultUI: true,
	      keyboardShortcuts: false,
	      draggable: false,
	      disableDoubleClickZoom: true,
	      scrollwheel: false,
	      streetViewControl: false,
	      styles: this.options.styles || {},
	      backgroundColor: "transparent"
	    });

	    this._mutant = map;

	    // 🍂event spawned
	    // Fired when the mutant has been created.
	    this.fire("spawned", {
	      mapObject: map
	    });
	  },


	  _attachObserver: function _attachObserver(node) {
	    // 		console.log('Gonna observe', node);

	    var observer = new MutationObserver(this._onMutations.bind(this));

	    // pass in the target node, as well as the observer options
	    observer.observe(node, {
	      childList: true,
	      subtree: true
	    });
	  },

	  _onMutations: function _onMutations(mutations) {
	    for (var i = 0; i < mutations.length; ++i) {
	      var mutation = mutations[i];
	      for (var j = 0; j < mutation.addedNodes.length; ++j) {
	        var node = mutation.addedNodes[j];

	        if (node instanceof HTMLImageElement) {
	          this._onMutatedImage(node);
	        } else if (node instanceof HTMLElement) {
	          Array.prototype.forEach.call(node.querySelectorAll("img"), this._onMutatedImage.bind(this));
	        }
	      }
	    }
	  },

	  // Only images which 'src' attrib match this will be considered for moving around.
	  // Looks like some kind of string-based protobuf, maybe??
	  // Only the roads (and terrain, and vector-based stuff) match this pattern
	  _roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+)!/,

	  // On the other hand, raster imagery matches this other pattern
	  _satRegexp: /x=(\d+)&y=(\d+)&z=(\d+)/,

	  // On small viewports, when zooming in/out, a static image is requested
	  // This will not be moved around, just removed from the DOM.
	  _staticRegExp: /StaticMapService\.GetMapImage/,

	  _onMutatedImage: function _onMutatedImage(imgNode) {
	    // 		if (imgNode.src) {
	    // 			console.log('caught mutated image: ', imgNode.src);
	    // 		}

	    var coords = void 0;
	    var match = imgNode.src.match(this._roadRegexp);
	    var sublayer = void 0;
	    var parent = void 0;

	    if (match) {
	      coords = {
	        z: match[1],
	        x: match[2],
	        y: match[3]
	      };
	      if (this._imagesPerTile > 1) {
	        imgNode.style.zIndex = 1;
	      }
	      sublayer = 1;
	    } else {
	      match = imgNode.src.match(this._satRegexp);
	      if (match) {
	        coords = {
	          x: match[1],
	          y: match[2],
	          z: match[3]
	        };
	      }
	      // 			imgNode.style.zIndex = 0;
	      sublayer = 0;
	    }

	    if (coords) {
	      var key = this._tileCoordsToKey(coords);
	      imgNode.style.position = "absolute";
	      if (this._imagesPerTile > 1) {
	        key += "/" + sublayer;
	      }
	      if (key in this._tileCallbacks && this._tileCallbacks[key]) {
	        // console.log('Fullfilling callback ', key);
	        this._tileCallbacks[key].pop()(imgNode);
	        if (!this._tileCallbacks[key].length) {
	          delete this._tileCallbacks[key];
	        }
	      } else {
	        // console.log('Caching for later', key);
	        parent = imgNode.parentNode;
	        if (parent) {
	          parent.removeChild(imgNode);
	          parent.removeChild = L.Util.falseFn;
	          // 					imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
	        }
	        if (key in this._freshTiles) {
	          this._freshTiles[key].push(imgNode);
	        } else {
	          this._freshTiles[key] = [imgNode];
	        }
	      }
	    } else if (imgNode.src.match(this._staticRegExp)) {
	      parent = imgNode.parentNode;
	      if (parent) {
	        // Remove the image, but don't store it anywhere.
	        // Image needs to be replaced instead of removed, as the container
	        // seems to be reused.
	        imgNode.parentNode.replaceChild(L.DomUtil.create("img"), imgNode);
	      }
	    }
	  },

	  // This will be used as this.createTile for 'roadmap', 'sat', 'terrain'
	  _createSingleTile: function createTile(coords, done) {
	    var key = this._tileCoordsToKey(coords);
	    // console.log('Need:', key);

	    if (key in this._freshTiles) {
	      var tile = this._freshTiles[key].pop();
	      if (!this._freshTiles[key].length) {
	        delete this._freshTiles[key];
	      }
	      L.Util.requestAnimFrame(done);
	      // 			console.log('Got ', key, ' from _freshTiles');
	      return tile;
	    }
	    var tileContainer = L.DomUtil.create("div");
	    this._tileCallbacks[key] = this._tileCallbacks[key] || [];
	    this._tileCallbacks[key].push(function (c /* , k*/) {
	      return function (imgNode) {
	        var parent = imgNode.parentNode;
	        if (parent) {
	          parent.removeChild(imgNode);
	          parent.removeChild = L.Util.falseFn;
	          // 						imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
	        }
	        c.appendChild(imgNode);
	        done();
	        // 					console.log('Sent ', k, ' to _tileCallbacks');
	      };
	    }(tileContainer /* , key*/));

	    return tileContainer;
	  },

	  // This will be used as this.createTile for 'hybrid'
	  _createMultiTile: function createTile(coords, done) {
	    var key = this._tileCoordsToKey(coords);

	    var tileContainer = L.DomUtil.create("div");
	    tileContainer.dataset.pending = this._imagesPerTile;

	    for (var i = 0; i < this._imagesPerTile; i++) {
	      var key2 = key + "/" + i;
	      if (key2 in this._freshTiles) {
	        tileContainer.appendChild(this._freshTiles[key2].pop());
	        if (!this._freshTiles[key2].length) {
	          delete this._freshTiles[key2];
	        }
	        tileContainer.dataset.pending--;
	        // 				console.log('Got ', key2, ' from _freshTiles');
	      } else {
	        this._tileCallbacks[key2] = this._tileCallbacks[key2] || [];
	        this._tileCallbacks[key2].push(function (c /* , k2*/) {
	          return function (imgNode) {
	            var parent = imgNode.parentNode;
	            if (parent) {
	              parent.removeChild(imgNode);
	              parent.removeChild = L.Util.falseFn;
	              // 							imgNode.parentNode.replaceChild(L.DomUtil.create('img'), imgNode);
	            }
	            c.appendChild(imgNode);
	            c.dataset.pending--;
	            if (!parseInt(c.dataset.pending)) {
	              done();
	            }
	            // 						console.log('Sent ', k2, ' to _tileCallbacks, still ', c.dataset.pending, ' images to go');
	          };
	        }(tileContainer /* , key2*/));
	      }
	    }

	    if (!parseInt(tileContainer.dataset.pending)) {
	      L.Util.requestAnimFrame(done);
	    }
	    return tileContainer;
	  },

	  _checkZoomLevels: function _checkZoomLevels() {
	    // setting the zoom level on the Google map may result in a different zoom level than the one requested
	    // (it won't go beyond the level for which they have data).
	    // verify and make sure the zoom levels on both Leaflet and Google maps are consistent
	    if (this._map.getZoom() !== undefined && this._mutant.getZoom() !== this._map.getZoom()) {
	      // zoom levels are out of sync. Set the leaflet zoom level to match the google one
	      this._map.setZoom(this._mutant.getZoom());
	    }
	  },
	  _reset: function _reset() {
	    this._initContainer();
	  },
	  _update: function _update() {
	    L.GridLayer.prototype._update.call(this);
	    if (!this._mutant) return;

	    var center = this._map.getCenter();
	    var _center = new google.maps.LatLng(center.lat, center.lng);

	    this._mutant.setCenter(_center);
	    var zoom = this._map.getZoom();
	    if (zoom !== undefined) {
	      this._mutant.setZoom(Math.round(this._map.getZoom()));
	    }
	  },
	  _resize: function _resize() {
	    var size = this._map.getSize();
	    if (this._mutantContainer.style.width === size.x && this._mutantContainer.style.height === size.y) return;
	    this.setElementSize(this._mutantContainer, size);
	    if (!this._mutant) return;
	    google.maps.event.trigger(this._mutant, "resize");
	  },
	  _handleZoomAnim: function _handleZoomAnim() {
	    var center = this._map.getCenter();
	    var _center = new google.maps.LatLng(center.lat, center.lng);

	    this._mutant.setCenter(_center);
	    this._mutant.setZoom(Math.round(this._map.getZoom()));
	  },


	  // Agressively prune _freshtiles when a tile with the same key is removed,
	  // this prevents a problem where Leaflet keeps a loaded tile longer than
	  // GMaps, so that GMaps makes two requests but Leaflet only consumes one,
	  // polluting _freshTiles with stale data.
	  _removeTile: function _removeTile(key) {
	    if (this._imagesPerTile > 1) {
	      for (var i = 0; i < this._imagesPerTile; i++) {
	        var key2 = key + "/" + i;
	        if (key2 in this._freshTiles) {
	          delete this._freshTiles[key2];
	        }
	        // 				console.log('Pruned spurious hybrid _freshTiles');
	      }
	    } else if (key in this._freshTiles) {
	      delete this._freshTiles[key];
	      // 				console.log('Pruned spurious _freshTiles', key);
	    }

	    return L.GridLayer.prototype._removeTile.call(this, key);
	  }
	});

	// 🍂factory gridLayer.googleMutant(options)
	// Returns a new `GridLayer.GoogleMutant` given its options
	L.gridLayer.googleMutant = function (options) {
	  return new L.GridLayer.GoogleMutant(options);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ])
});
;