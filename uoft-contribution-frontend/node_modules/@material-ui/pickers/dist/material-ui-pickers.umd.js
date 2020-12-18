(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/core/Typography'), require('@material-ui/core/styles'), require('@material-ui/core/Button'), require('@material-ui/core/Toolbar'), require('@material-ui/core/TextField'), require('@material-ui/core/IconButton'), require('@material-ui/core/InputAdornment'), require('@material-ui/core/SvgIcon'), require('react-dom'), require('@material-ui/core/CircularProgress'), require('@material-ui/core/DialogActions'), require('@material-ui/core/DialogContent'), require('@material-ui/core/Dialog'), require('@material-ui/core/Popover'), require('@material-ui/core/Grid'), require('@material-ui/core/Tab'), require('@material-ui/core/Tabs'), require('@material-ui/core/Paper')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/core/Typography', '@material-ui/core/styles', '@material-ui/core/Button', '@material-ui/core/Toolbar', '@material-ui/core/TextField', '@material-ui/core/IconButton', '@material-ui/core/InputAdornment', '@material-ui/core/SvgIcon', 'react-dom', '@material-ui/core/CircularProgress', '@material-ui/core/DialogActions', '@material-ui/core/DialogContent', '@material-ui/core/Dialog', '@material-ui/core/Popover', '@material-ui/core/Grid', '@material-ui/core/Tab', '@material-ui/core/Tabs', '@material-ui/core/Paper'], factory) :
  (global = global || self, factory(global['@material-ui/pickers'] = {}, global.React, global['material-ui'].Typography, global['material-ui'], global['material-ui'].Button, global['material-ui'].Toolbar, global['material-ui'].TextField, global['material-ui'].IconButton, global['material-ui'].InputAdornment, global['material-ui'].SvgIcon, global.ReactDOM, global['material-ui'].CircularProgress, global['material-ui'].DialogActions, global['material-ui'].DialogContent, global['material-ui'].Dialog, global['material-ui'].Popover, global['material-ui'].Grid, global['material-ui'].Tab, global['material-ui'].Tabs, global['material-ui'].Paper));
}(this, (function (exports, React, Typography, styles$5, Button, Toolbar, TextField, IconButton, InputAdornment, SvgIcon, ReactDOM, CircularProgress, DialogActions, DialogContent, Dialog, Popover, Grid, Tab, Tabs, Paper) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  Typography = Typography && Typography.hasOwnProperty('default') ? Typography['default'] : Typography;
  Button = Button && Button.hasOwnProperty('default') ? Button['default'] : Button;
  Toolbar = Toolbar && Toolbar.hasOwnProperty('default') ? Toolbar['default'] : Toolbar;
  TextField = TextField && TextField.hasOwnProperty('default') ? TextField['default'] : TextField;
  IconButton = IconButton && IconButton.hasOwnProperty('default') ? IconButton['default'] : IconButton;
  InputAdornment = InputAdornment && InputAdornment.hasOwnProperty('default') ? InputAdornment['default'] : InputAdornment;
  SvgIcon = SvgIcon && SvgIcon.hasOwnProperty('default') ? SvgIcon['default'] : SvgIcon;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  CircularProgress = CircularProgress && CircularProgress.hasOwnProperty('default') ? CircularProgress['default'] : CircularProgress;
  DialogActions = DialogActions && DialogActions.hasOwnProperty('default') ? DialogActions['default'] : DialogActions;
  DialogContent = DialogContent && DialogContent.hasOwnProperty('default') ? DialogContent['default'] : DialogContent;
  Dialog = Dialog && Dialog.hasOwnProperty('default') ? Dialog['default'] : Dialog;
  Popover = Popover && Popover.hasOwnProperty('default') ? Popover['default'] : Popover;
  Grid = Grid && Grid.hasOwnProperty('default') ? Grid['default'] : Grid;
  Tab = Tab && Tab.hasOwnProperty('default') ? Tab['default'] : Tab;
  Tabs = Tabs && Tabs.hasOwnProperty('default') ? Tabs['default'] : Tabs;
  Paper = Paper && Paper.hasOwnProperty('default') ? Paper['default'] : Paper;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
  60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
  exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
  exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
  exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  Object.defineProperty(exports, '__esModule', { value: true });

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
  }

  /**
   * Forked from fbjs/warning:
   * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
   *
   * Only change is we use console.warn instead of console.error,
   * and do nothing when 'console' is not supported.
   * This really simplifies the code.
   * ---
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */
  var lowPriorityWarningWithoutStack = function () {};

  {
    var printWarning = function (format) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });

      if (typeof console !== 'undefined') {
        console.warn(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    lowPriorityWarningWithoutStack = function (condition, format) {
      if (format === undefined) {
        throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(void 0, [format].concat(args));
      }
    };
  }

  var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true;
        lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.typeOf = typeOf;
  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isValidElementType = isValidElementType;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
    })();
  }
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });
  var reactIs_1 = reactIs.typeOf;
  var reactIs_2 = reactIs.AsyncMode;
  var reactIs_3 = reactIs.ConcurrentMode;
  var reactIs_4 = reactIs.ContextConsumer;
  var reactIs_5 = reactIs.ContextProvider;
  var reactIs_6 = reactIs.Element;
  var reactIs_7 = reactIs.ForwardRef;
  var reactIs_8 = reactIs.Fragment;
  var reactIs_9 = reactIs.Lazy;
  var reactIs_10 = reactIs.Memo;
  var reactIs_11 = reactIs.Portal;
  var reactIs_12 = reactIs.Profiler;
  var reactIs_13 = reactIs.StrictMode;
  var reactIs_14 = reactIs.Suspense;
  var reactIs_15 = reactIs.isValidElementType;
  var reactIs_16 = reactIs.isAsyncMode;
  var reactIs_17 = reactIs.isConcurrentMode;
  var reactIs_18 = reactIs.isContextConsumer;
  var reactIs_19 = reactIs.isContextProvider;
  var reactIs_20 = reactIs.isElement;
  var reactIs_21 = reactIs.isForwardRef;
  var reactIs_22 = reactIs.isFragment;
  var reactIs_23 = reactIs.isLazy;
  var reactIs_24 = reactIs.isMemo;
  var reactIs_25 = reactIs.isPortal;
  var reactIs_26 = reactIs.isProfiler;
  var reactIs_27 = reactIs.isStrictMode;
  var reactIs_28 = reactIs.isSuspense;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
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

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
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
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
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
            );
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

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
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

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
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
      elementType: createElementTypeTypeChecker(),
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
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if ( typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
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
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
         printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
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

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });
  var propTypes_1 = propTypes.array;
  var propTypes_2 = propTypes.bool;
  var propTypes_3 = propTypes.func;
  var propTypes_4 = propTypes.number;
  var propTypes_5 = propTypes.object;
  var propTypes_6 = propTypes.string;
  var propTypes_7 = propTypes.symbol;
  var propTypes_8 = propTypes.any;
  var propTypes_9 = propTypes.arrayOf;
  var propTypes_10 = propTypes.element;
  var propTypes_11 = propTypes.elementType;
  var propTypes_12 = propTypes.instanceOf;
  var propTypes_13 = propTypes.node;
  var propTypes_14 = propTypes.objectOf;
  var propTypes_15 = propTypes.oneOf;
  var propTypes_16 = propTypes.oneOfType;
  var propTypes_17 = propTypes.shape;
  var propTypes_18 = propTypes.exact;
  var propTypes_19 = propTypes.checkPropTypes;
  var propTypes_20 = propTypes.resetWarningCache;
  var propTypes_21 = propTypes.PropTypes;

  var MuiPickersContext = React.createContext(null);
  var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
    var Utils = _ref.utils,
        children = _ref.children,
        locale = _ref.locale,
        libInstance = _ref.libInstance;
    var utils = React.useMemo(function () {
      return new Utils({
        locale: locale,
        instance: libInstance
      });
    }, [Utils, libInstance, locale]);
    return React.createElement(MuiPickersContext.Provider, {
      value: utils,
      children: children
    });
  };
   MuiPickersUtilsProvider.propTypes = {
    utils: propTypes_3.isRequired,
    locale: propTypes_16([propTypes_5, propTypes_6]),
    children: propTypes_16([propTypes_10.isRequired, propTypes_9(propTypes_10.isRequired)]).isRequired
  } ;

  var checkUtils = function checkUtils(utils) {
    if (!utils) {
      // tslint:disable-next-line
      throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
    }
  };
  function useUtils() {
    var utils = React.useContext(MuiPickersContext);
    checkUtils(utils);
    return utils;
  }

  function toVal(mix) {
  	var k, y, str='';
  	if (mix) {
  		if (typeof mix === 'object') {
  			if (!!mix.push) {
  				for (k=0; k < mix.length; k++) {
  					if (mix[k] && (y = toVal(mix[k]))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			} else {
  				for (k in mix) {
  					if (mix[k] && (y = toVal(k))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else if (typeof mix !== 'boolean' && !mix.call) {
  			str && (str += ' ');
  			str += mix;
  		}
  	}
  	return str;
  }

  function clsx () {
  	var i=0, x, str='';
  	while (i < arguments.length) {
  		if (x = toVal(arguments[i++])) {
  			str && (str += ' ');
  			str += x;
  		}
  	}
  	return str;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var useStyles = styles$5.makeStyles(function (theme) {
    var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
    return {
      toolbarTxt: {
        color: styles$5.fade(textColor, 0.54)
      },
      toolbarBtnSelected: {
        color: textColor
      }
    };
  }, {
    name: 'MuiPickersToolbarText'
  });

  var ToolbarText = function ToolbarText(_ref) {
    var selected = _ref.selected,
        label = _ref.label,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        other = _objectWithoutProperties(_ref, ["selected", "label", "className"]);

    var classes = useStyles();
    return React.createElement(Typography, _extends({
      children: label,
      className: clsx(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
    }, other));
  };

  var ToolbarButton = function ToolbarButton(_ref) {
    var classes = _ref.classes,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        label = _ref.label,
        selected = _ref.selected,
        variant = _ref.variant,
        align = _ref.align,
        typographyClassName = _ref.typographyClassName,
        other = _objectWithoutProperties(_ref, ["classes", "className", "label", "selected", "variant", "align", "typographyClassName"]);

    return React.createElement(Button, _extends({
      variant: "text",
      className: clsx(classes.toolbarBtn, className)
    }, other), React.createElement(ToolbarText, {
      align: align,
      className: typographyClassName,
      variant: variant,
      label: label,
      selected: selected
    }));
  };

   ToolbarButton.propTypes = {
    selected: propTypes_2.isRequired,
    label: propTypes_6.isRequired,
    classes: propTypes_8.isRequired,
    className: propTypes_6,
    innerRef: propTypes_8
  } ;
  ToolbarButton.defaultProps = {
    className: ''
  };
  var styles = styles$5.createStyles({
    toolbarBtn: {
      padding: 0,
      minWidth: '16px',
      textTransform: 'none'
    }
  });
  var ToolbarButton$1 = styles$5.withStyles(styles, {
    name: 'MuiPickersToolbarButton'
  })(ToolbarButton);

  var useStyles$1 = styles$5.makeStyles(function (theme) {
    return {
      toolbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"]
      },
      toolbarLandscape: {
        height: 'auto',
        maxWidth: 150,
        padding: 8,
        justifyContent: 'flex-start'
      }
    };
  }, {
    name: 'MuiPickersToolbar'
  });

  var PickerToolbar = function PickerToolbar(_ref) {
    var children = _ref.children,
        isLandscape = _ref.isLandscape,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        other = _objectWithoutProperties(_ref, ["children", "isLandscape", "className"]);

    var classes = useStyles$1();
    return React.createElement(Toolbar, _extends({
      className: clsx(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
    }, other), children);
  };

  /** Use it instead of .includes method for IE support */
  function arrayIncludes(array, itemOrItems) {
    if (Array.isArray(itemOrItems)) {
      return itemOrItems.every(function (item) {
        return array.indexOf(item) !== -1;
      });
    }

    return array.indexOf(itemOrItems) !== -1;
  }

  var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
    var date = _ref.date,
        utils = _ref.utils,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        disableFuture = _ref.disableFuture,
        disablePast = _ref.disablePast,
        shouldDisableDate = _ref.shouldDisableDate;
    var today = utils.startOfDay(utils.date());

    if (disablePast && utils.isBefore(minDate, today)) {
      minDate = today;
    }

    if (disableFuture && utils.isAfter(maxDate, today)) {
      maxDate = today;
    }

    var forward = date;
    var backward = date;

    if (utils.isBefore(date, minDate)) {
      forward = utils.date(minDate);
      backward = null;
    }

    if (utils.isAfter(date, maxDate)) {
      if (backward) {
        backward = utils.date(maxDate);
      }

      forward = null;
    }

    while (forward || backward) {
      if (forward && utils.isAfter(forward, maxDate)) {
        forward = null;
      }

      if (backward && utils.isBefore(backward, minDate)) {
        backward = null;
      }

      if (forward) {
        if (!shouldDisableDate(forward)) {
          return forward;
        }

        forward = utils.addDays(forward, 1);
      }

      if (backward) {
        if (!shouldDisableDate(backward)) {
          return backward;
        }

        backward = utils.addDays(backward, -1);
      }
    } // fallback to today if no enabled days


    return utils.date();
  };
  var isYearOnlyView = function isYearOnlyView(views) {
    return views.length === 1 && views[0] === 'year';
  };
  var isYearAndMonthViews = function isYearAndMonthViews(views) {
    return views.length === 2 && arrayIncludes(views, 'month') && arrayIncludes(views, 'year');
  };
  var getFormatByViews = function getFormatByViews(views, utils) {
    if (isYearOnlyView(views)) {
      return utils.yearFormat;
    }

    if (isYearAndMonthViews(views)) {
      return utils.yearMonthFormat;
    }

    return utils.dateFormat;
  };

  var useStyles$2 = styles$5.makeStyles({
    toolbar: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    toolbarLandscape: {
      padding: 16
    },
    dateLandscape: {
      marginRight: 16
    }
  }, {
    name: 'MuiPickersDatePickerRoot'
  });
  var DatePickerToolbar = function DatePickerToolbar(_ref) {
    var date = _ref.date,
        views = _ref.views,
        setOpenView = _ref.setOpenView,
        isLandscape = _ref.isLandscape,
        openView = _ref.openView;
    var utils = useUtils();
    var classes = useStyles$2();
    var isYearOnly = React.useMemo(function () {
      return isYearOnlyView(views);
    }, [views]);
    var isYearAndMonth = React.useMemo(function () {
      return isYearAndMonthViews(views);
    }, [views]);
    return React.createElement(PickerToolbar, {
      isLandscape: isLandscape,
      className: clsx(!isYearOnly && classes.toolbar, isLandscape && classes.toolbarLandscape)
    }, React.createElement(ToolbarButton$1, {
      variant: isYearOnly ? 'h3' : 'subtitle1',
      onClick: function onClick() {
        return setOpenView('year');
      },
      selected: openView === 'year',
      label: utils.getYearText(date)
    }), !isYearOnly && !isYearAndMonth && React.createElement(ToolbarButton$1, {
      variant: "h4",
      selected: openView === 'date',
      onClick: function onClick() {
        return setOpenView('date');
      },
      align: isLandscape ? 'left' : 'center',
      label: utils.getDatePickerHeaderText(date),
      className: clsx(isLandscape && classes.dateLandscape)
    }), isYearAndMonth && React.createElement(ToolbarButton$1, {
      variant: "h4",
      onClick: function onClick() {
        return setOpenView('month');
      },
      selected: openView === 'month',
      label: utils.getMonthText(date)
    }));
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var PureDateInput = function PureDateInput(_ref) {
    var inputValue = _ref.inputValue,
        inputVariant = _ref.inputVariant,
        validationError = _ref.validationError,
        InputProps = _ref.InputProps,
        onOpen = _ref.openPicker,
        _ref$TextFieldCompone = _ref.TextFieldComponent,
        TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
        other = _objectWithoutProperties(_ref, ["inputValue", "inputVariant", "validationError", "InputProps", "openPicker", "TextFieldComponent"]);

    var PureDateInputProps = React.useMemo(function () {
      return _objectSpread({}, InputProps, {
        readOnly: true
      });
    }, [InputProps]);
    return React.createElement(TextFieldComponent, _extends({
      error: Boolean(validationError),
      helperText: validationError
    }, other, {
      // do not overridable
      onClick: onOpen,
      value: inputValue,
      variant: inputVariant,
      InputProps: PureDateInputProps,
      onKeyDown: function onKeyDown(e) {
        // space
        if (e.keyCode === 32) {
          e.stopPropagation();
          onOpen();
        }
      }
    }));
  };
  PureDateInput.displayName = 'PureDateInput';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var Rifm =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Rifm, _React$Component);

    function Rifm(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._state = null;
      _this._del = false;

      _this._handleChange = function (evt) {
        {
          if (evt.target.type === 'number') {
            console.error('Rifm does not support input type=number, use type=tel instead.');
            return;
          }
        } // FUTURE: use evt.nativeEvent.inputType for del event, see comments at onkeydown


        var stateValue = _this.state.value;
        var value = evt.target.value;
        var input = evt.target;
        var op = value.length > stateValue.length;
        var del = _this._del;

        var noOp = stateValue === _this.props.format(value);

        _this.setState({
          value: value,
          local: true
        }, function () {
          var selectionStart = input.selectionStart;
          var refuse = _this.props.refuse || /[^\d]+/g;
          var before = value.substr(0, selectionStart).replace(refuse, '');
          _this._state = {
            input: input,
            before: before,
            op: op,
            di: del && noOp,
            del: del
          };

          if (_this.props.replace && _this.props.replace(stateValue) && op && !noOp) {
            var start = -1;

            for (var i = 0; i !== before.length; ++i) {
              start = Math.max(start, value.toLowerCase().indexOf(before[i].toLowerCase(), start + 1));
            }

            var c = value.substr(start + 1).replace(refuse, '')[0];
            start = value.indexOf(c, start + 1);
            value = "" + value.substr(0, start) + value.substr(start + 1);
          }

          var fv = _this.props.format(value);

          if (stateValue === fv) {
            _this.setState({
              value: value
            });
          } else {
            _this.props.onChange(fv);
          }
        });
      };

      _this._hKD = function (evt) {
        if (evt.code === 'Delete') {
          _this._del = true;
        }
      };

      _this._hKU = function (evt) {
        if (evt.code === 'Delete') {
          _this._del = false;
        }
      };

      _this.state = {
        value: props.value,
        local: true
      };
      return _this;
    }

    Rifm.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      return {
        value: state.local ? state.value : props.value,
        local: false
      };
    };

    var _proto = Rifm.prototype;

    _proto.render = function render() {
      var _handleChange = this._handleChange,
          value = this.state.value,
          children = this.props.children;
      return children({
        value: value,
        onChange: _handleChange
      });
    } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
    ;

    _proto.componentWillUnmount = function componentWillUnmount() {
      document.removeEventListener('keydown', this._hKD);
      document.removeEventListener('keyup', this._hKU);
    } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
    ;

    _proto.componentDidMount = function componentDidMount() {
      document.addEventListener('keydown', this._hKD);
      document.addEventListener('keyup', this._hKU);
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _state = this._state;

      if (_state) {
        var value = this.state.value;
        var start = -1;

        for (var i = 0; i !== _state.before.length; ++i) {
          start = Math.max(start, value.toLowerCase().indexOf(_state.before[i].toLowerCase(), start + 1));
        } // format usually looks better without this


        if (this.props.replace && (_state.op || _state.del && !_state.di)) {
          while (value[start + 1] && (this.props.refuse || /[^\d]+/).test(value[start + 1])) {
            start += 1;
          }
        }

        _state.input.selectionStart = _state.input.selectionEnd = start + 1 + (_state.di ? 1 : 0);
      }

      this._state = null;
    };

    return Rifm;
  }(React.Component);

  var KeyboardIcon = function KeyboardIcon(props) {
    return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
      d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  };

  var getDisplayDate = function getDisplayDate(value, format, utils, isEmpty, _ref) {
    var invalidLabel = _ref.invalidLabel,
        emptyLabel = _ref.emptyLabel,
        labelFunc = _ref.labelFunc;
    var date = utils.date(value);

    if (labelFunc) {
      return labelFunc(isEmpty ? null : date, invalidLabel);
    }

    if (isEmpty) {
      return emptyLabel || '';
    }

    return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
  };

  var getComparisonMaxDate = function getComparisonMaxDate(utils, strictCompareDates, date) {
    if (strictCompareDates) {
      return date;
    }

    return utils.endOfDay(date);
  };

  var getComparisonMinDate = function getComparisonMinDate(utils, strictCompareDates, date) {
    if (strictCompareDates) {
      return date;
    }

    return utils.startOfDay(date);
  };

  var validate = function validate(value, utils, _ref2) {
    var maxDate = _ref2.maxDate,
        minDate = _ref2.minDate,
        disablePast = _ref2.disablePast,
        disableFuture = _ref2.disableFuture,
        maxDateMessage = _ref2.maxDateMessage,
        minDateMessage = _ref2.minDateMessage,
        invalidDateMessage = _ref2.invalidDateMessage,
        strictCompareDates = _ref2.strictCompareDates;
    var parsedValue = utils.date(value); // if null - do not show error

    if (value === null) {
      return '';
    }

    if (!utils.isValid(value)) {
      return invalidDateMessage;
    }

    if (maxDate && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date(maxDate)))) {
      return maxDateMessage;
    }

    if (disableFuture && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date()))) {
      return maxDateMessage;
    }

    if (minDate && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date(minDate)))) {
      return minDateMessage;
    }

    if (disablePast && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date()))) {
      return minDateMessage;
    }

    return '';
  };
  function pick12hOr24hFormat(userFormat) {
    var ampm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var formats = arguments.length > 2 ? arguments[2] : undefined;

    if (userFormat) {
      return userFormat;
    }

    return ampm ? formats['12h'] : formats['24h'];
  }
  function makeMaskFromFormat(format, numberMaskChar) {
    return format.replace(/[a-z]/gi, numberMaskChar);
  }
  var maskedDateFormatter = function maskedDateFormatter(mask, numberMaskChar, refuse) {
    return function (value) {
      var result = '';
      var parsed = value.replace(refuse, '');

      if (parsed === '') {
        return parsed;
      }

      var i = 0;
      var n = 0;

      while (i < mask.length) {
        var maskChar = mask[i];

        if (maskChar === numberMaskChar && n < parsed.length) {
          var parsedChar = parsed[n];
          result += parsedChar;
          n += 1;
        } else {
          result += maskChar;
        }

        i += 1;
      }

      return result;
    };
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var KeyboardDateInput = function KeyboardDateInput(_ref) {
    var inputValue = _ref.inputValue,
        inputVariant = _ref.inputVariant,
        validationError = _ref.validationError,
        KeyboardButtonProps = _ref.KeyboardButtonProps,
        InputAdornmentProps = _ref.InputAdornmentProps,
        onOpen = _ref.openPicker,
        onChange = _ref.onChange,
        InputProps = _ref.InputProps,
        mask = _ref.mask,
        _ref$maskChar = _ref.maskChar,
        maskChar = _ref$maskChar === void 0 ? '_' : _ref$maskChar,
        _ref$refuse = _ref.refuse,
        refuse = _ref$refuse === void 0 ? /[^\d]+/gi : _ref$refuse,
        format = _ref.format,
        keyboardIcon = _ref.keyboardIcon,
        disabled = _ref.disabled,
        rifmFormatter = _ref.rifmFormatter,
        _ref$TextFieldCompone = _ref.TextFieldComponent,
        TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
        other = _objectWithoutProperties(_ref, ["inputValue", "inputVariant", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "refuse", "format", "keyboardIcon", "disabled", "rifmFormatter", "TextFieldComponent"]);

    var inputMask = mask || makeMaskFromFormat(format, maskChar); // prettier-ignore

    var formatter = React.useMemo(function () {
      return maskedDateFormatter(inputMask, maskChar, refuse);
    }, [inputMask, maskChar, refuse]);
    var position = InputAdornmentProps && InputAdornmentProps.position ? InputAdornmentProps.position : 'end';

    var handleChange = function handleChange(text) {
      var finalString = text === '' || text === inputMask ? null : text;
      onChange(finalString);
    };

    return React.createElement(Rifm, {
      key: inputMask,
      value: inputValue,
      onChange: handleChange,
      refuse: refuse,
      format: rifmFormatter || formatter
    }, function (_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value;
      return React.createElement(TextFieldComponent, _extends({
        disabled: disabled,
        error: Boolean(validationError),
        helperText: validationError
      }, other, {
        value: value,
        onChange: onChange,
        variant: inputVariant,
        InputProps: _objectSpread$1({}, InputProps, _defineProperty({}, "".concat(position, "Adornment"), React.createElement(InputAdornment, _extends({
          position: position
        }, InputAdornmentProps), React.createElement(IconButton, _extends({
          disabled: disabled
        }, KeyboardButtonProps, {
          onClick: onOpen
        }), keyboardIcon))))
      }));
    });
  };
  KeyboardDateInput.defaultProps = {
    keyboardIcon: React.createElement(KeyboardIcon, null)
  };

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function useOpenState(_ref) {
    var open = _ref.open,
        onOpen = _ref.onOpen,
        onClose = _ref.onClose;
    var setIsOpenState = null;

    if (open === undefined || open === null) {
      // The component is uncontrolled, so we need to give it its own state.
      var _useState = React.useState(false);

      var _useState2 = _slicedToArray(_useState, 2);

      open = _useState2[0];
      setIsOpenState = _useState2[1];
    } // prettier-ignore


    var setIsOpen = React.useCallback(function (newIsOpen) {
      setIsOpenState && setIsOpenState(newIsOpen);
      return newIsOpen ? onOpen && onOpen() : onClose && onClose();
    }, [onOpen, onClose, setIsOpenState]);
    return {
      isOpen: open,
      setIsOpen: setIsOpen
    };
  }

  var useValueToDate = function useValueToDate(utils, _ref) {
    var value = _ref.value,
        initialFocusedDate = _ref.initialFocusedDate;
    var nowRef = React.useRef(utils.date());
    var date = utils.date(value || initialFocusedDate || nowRef.current);
    return date && utils.isValid(date) ? date : nowRef.current;
  };

  function useDateValues(props, options) {
    var utils = useUtils();
    var date = useValueToDate(utils, props);
    var format = props.format || options.getDefaultFormat();
    return {
      date: date,
      format: format
    };
  }

  function usePickerState(props, options) {
    var autoOk = props.autoOk,
        disabled = props.disabled,
        readOnly = props.readOnly,
        onAccept = props.onAccept,
        _onChange = props.onChange,
        onError = props.onError,
        value = props.value,
        variant = props.variant;
    var utils = useUtils();

    var _useOpenState = useOpenState(props),
        isOpen = _useOpenState.isOpen,
        setIsOpen = _useOpenState.setIsOpen;

    var _useDateValues = useDateValues(props, options),
        date = _useDateValues.date,
        format = _useDateValues.format;

    var _useState = React.useState(date),
        _useState2 = _slicedToArray(_useState, 2),
        pickerDate = _useState2[0],
        setPickerDate = _useState2[1];

    React.useEffect(function () {
      // if value was changed in closed state - treat it as accepted
      if (!isOpen && !utils.isEqual(pickerDate, date)) {
        setPickerDate(date);
      }
    }, [date, isOpen, pickerDate, utils]);
    var acceptDate = React.useCallback(function (acceptedDate) {
      _onChange(acceptedDate);

      if (onAccept) {
        onAccept(acceptedDate);
      }

      setIsOpen(false);
    }, [onAccept, _onChange, setIsOpen]);
    var wrapperProps = React.useMemo(function () {
      return {
        format: format,
        open: isOpen,
        onClear: function onClear() {
          return acceptDate(null);
        },
        onAccept: function onAccept() {
          return acceptDate(pickerDate);
        },
        onSetToday: function onSetToday() {
          return setPickerDate(utils.date());
        },
        onDismiss: function onDismiss() {
          setIsOpen(false);
        }
      };
    }, [acceptDate, format, isOpen, pickerDate, setIsOpen, utils]);
    var pickerProps = React.useMemo(function () {
      return {
        date: pickerDate,
        onChange: function onChange(newDate) {
          var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          setPickerDate(newDate);

          if (isFinish && autoOk) {
            acceptDate(newDate);
            return;
          } // simulate autoOk, but do not close the modal


          if (variant === 'inline' || variant === 'static') {
            _onChange(newDate);

            onAccept && onAccept(newDate);
          }
        }
      };
    }, [acceptDate, autoOk, onAccept, _onChange, pickerDate, variant]);
    var validationError = validate(value, utils, props);
    React.useEffect(function () {
      if (onError) {
        onError(validationError, value);
      }
    }, [onError, validationError, value]);
    var inputValue = getDisplayDate(date, format, utils, value === null, props);
    var inputProps = React.useMemo(function () {
      return {
        inputValue: inputValue,
        validationError: validationError,
        openPicker: function openPicker() {
          return !readOnly && !disabled && setIsOpen(true);
        }
      };
    }, [disabled, inputValue, readOnly, setIsOpen, validationError]);
    var pickerState = {
      pickerProps: pickerProps,
      inputProps: inputProps,
      wrapperProps: wrapperProps
    };
    React.useDebugValue(pickerState);
    return pickerState;
  }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var date = propTypes_16([propTypes_5, propTypes_6, propTypes_4, propTypes_12(Date)]);
  var datePickerView = propTypes_15(['year', 'month', 'day']);
  /* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

  var timePickerDefaultProps = {
    ampm: true,
    invalidDateMessage: 'Invalid Time Format'
  };
  var datePickerDefaultProps = {
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01'),
    invalidDateMessage: 'Invalid Date Format',
    minDateMessage: 'Date should not be before minimal date',
    maxDateMessage: 'Date should not be after maximal date',
    allowKeyboardControl: true
  };
  var dateTimePickerDefaultProps = _objectSpread$2({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
    showTabs: true
  });

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function parseInputString(value, utils, format) {
    try {
      return utils.parse(value, format);
    } catch (_unused) {
      return null;
    }
  }

  function useKeyboardPickerState(props, options) {
    var _props$format = props.format,
        format = _props$format === void 0 ? options.getDefaultFormat() : _props$format,
        inputValue = props.inputValue,
        _onChange = props.onChange,
        value = props.value;
    var utils = useUtils();
    var displayDate = getDisplayDate(value, format, utils, value === null, props);

    var _useState = React.useState(displayDate),
        _useState2 = _slicedToArray(_useState, 2),
        innerInputValue = _useState2[0],
        setInnerInputValue = _useState2[1];

    var dateValue = inputValue ? parseInputString(inputValue, utils, format) : value;
    React.useEffect(function () {
      if (value === null || utils.isValid(value)) {
        setInnerInputValue(displayDate);
      }
    }, [displayDate, setInnerInputValue, utils, value]);
    var handleKeyboardChange = React.useCallback(function (date) {
      _onChange(date, date === null ? null : utils.format(date, format));
    }, [format, _onChange, utils]);

    var _usePickerState = usePickerState( // Extend props interface
    _objectSpread$3({}, props, {
      value: dateValue,
      onChange: handleKeyboardChange
    }), options),
        innerInputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps,
        pickerProps = _usePickerState.pickerProps;

    var inputProps = React.useMemo(function () {
      return _objectSpread$3({}, innerInputProps, {
        // reuse validation and open/close logic
        format: wrapperProps.format,
        inputValue: inputValue || innerInputValue,
        onChange: function onChange(value) {
          setInnerInputValue(value || '');
          var date = value === null ? null : utils.parse(value, wrapperProps.format);

          _onChange(date, value);
        }
      });
    }, [innerInputProps, innerInputValue, inputValue, _onChange, utils, wrapperProps.format]);
    return {
      inputProps: inputProps,
      wrapperProps: wrapperProps,
      pickerProps: pickerProps
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  var useStyles$3 = styles$5.makeStyles(function (theme) {
    return {
      day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: '0 2px',
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightMedium,
        padding: 0
      },
      hidden: {
        opacity: 0,
        pointerEvents: 'none'
      },
      current: {
        color: theme.palette.primary.main,
        fontWeight: 600
      },
      daySelected: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
          backgroundColor: theme.palette.primary.main
        }
      },
      dayDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  }, {
    name: 'MuiPickersDay'
  });
  var Day = function Day(_ref) {
    var children = _ref.children,
        disabled = _ref.disabled,
        hidden = _ref.hidden,
        current = _ref.current,
        selected = _ref.selected,
        other = _objectWithoutProperties(_ref, ["children", "disabled", "hidden", "current", "selected"]);

    var classes = useStyles$3();
    var className = clsx(classes.day, hidden && classes.hidden, current && classes.current, selected && classes.daySelected, disabled && classes.dayDisabled);
    return React.createElement(IconButton, _extends({
      className: className,
      tabIndex: hidden || disabled ? -1 : 0
    }, other), React.createElement(Typography, {
      variant: "body2",
      color: "inherit"
    }, children));
  };
  Day.displayName = 'Day';
   Day.propTypes = {
    current: propTypes_2,
    disabled: propTypes_2,
    hidden: propTypes_2,
    selected: propTypes_2
  } ;
  Day.defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false
  };

  var DayWrapper = function DayWrapper(_ref) {
    var children = _ref.children,
        value = _ref.value,
        disabled = _ref.disabled,
        onSelect = _ref.onSelect,
        dayInCurrentMonth = _ref.dayInCurrentMonth,
        other = _objectWithoutProperties(_ref, ["children", "value", "disabled", "onSelect", "dayInCurrentMonth"]);

    var handleClick = React.useCallback(function () {
      return onSelect(value);
    }, [onSelect, value]);
    return React.createElement("div", _extends({
      role: "presentation",
      onClick: dayInCurrentMonth && !disabled ? handleClick : undefined,
      onKeyPress: dayInCurrentMonth && !disabled ? handleClick : undefined
    }, other), children);
  };

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
  }

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === 'string') {
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
  }

  var config = {
    disabled: false
  };

  var timeoutsShape =  propTypes.oneOfType([propTypes.number, propTypes.shape({
    enter: propTypes.number,
    exit: propTypes.number,
    appear: propTypes.number
  }).isRequired]) ;
  var classNamesShape =  propTypes.oneOfType([propTypes.string, propTypes.shape({
    enter: propTypes.string,
    exit: propTypes.string,
    active: propTypes.string
  }), propTypes.shape({
    enter: propTypes.string,
    enterDone: propTypes.string,
    enterActive: propTypes.string,
    exit: propTypes.string,
    exitDone: propTypes.string,
    exitActive: propTypes.string
  })]) ;

  var TransitionGroupContext = React__default.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }


    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = ReactDOM.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing);

        _this2.onTransitionEnd(node, enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    _proto.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        // allows for nested Transitions
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, children(status, childProps));
      }

      var child = React__default.Children.only(children);
      return (// allows for nested Transitions
        React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, React__default.cloneElement(child, childProps))
      );
    };

    return Transition;
  }(React__default.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {
    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: propTypes.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: propTypes.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: propTypes.bool,

    /**
     * Normally a component is not transitioned if it is shown when the
     * `<Transition>` component mounts. If you want to transition on the first
     * mount set `appear` to `true`, and the component will transition in as soon
     * as the `<Transition>` mounts.
     *
     * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
     * > only adds an additional enter transition. However, in the
     * > `<CSSTransition>` component that first enter transition does result in
     * > additional `.appear-*` classes, that way you can choose to style it
     * > differently.
     */
    appear: propTypes.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: propTypes.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: propTypes.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return pt.apply(void 0, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: propTypes.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: propTypes.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: propTypes.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: propTypes.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: propTypes.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: propTypes.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: propTypes.func // Name the function so it is clearer in the documentation

  } ;

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  var _addClass = function addClass$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return addClass(node, c);
    });
  };

  var removeClass$1 = function removeClass$1(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return removeClass(node, c);
    });
  };
  /**
   * A transition component inspired by the excellent
   * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
   * using CSS transitions or animations. It's built upon the
   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
   * component, so it inherits all of its props.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` states of the transition. The first class is applied and then a
   * second `*-active` class in order to activate the CSS transition. After the
   * transition, matching `*-done` class names are applied to persist the
   * transition state.
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
   *         <div>
   *           {"I'll receive my-node-* classes"}
   *         </div>
   *       </CSSTransition>
   *       <button type="button" onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the `in` prop is set to `true`, the child component will first receive
   * the class `example-enter`, then the `example-enter-active` will be added in
   * the next tick. `CSSTransition` [forces a
   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * between before adding the `example-enter-active`. This is an important trick
   * because it allows us to transition between `example-enter` and
   * `example-enter-active` even though they were added immediately one after
   * another. Most notably, this is what makes it possible for us to animate
   * _appearance_.
   *
   * ```css
   * .my-node-enter {
   *   opacity: 0;
   * }
   * .my-node-enter-active {
   *   opacity: 1;
   *   transition: opacity 200ms;
   * }
   * .my-node-exit {
   *   opacity: 1;
   * }
   * .my-node-exit-active {
   *   opacity: 0;
   *   transition: opacity 200ms;
   * }
   * ```
   *
   * `*-active` classes represent which styles you want to animate **to**.
   *
   * **Note**: If you're using the
   * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
   * prop, make sure to define styles for `.appear-*` classes as well.
   */


  var CSSTransition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(CSSTransition, _React$Component);

    function CSSTransition() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };

      _this.onEnter = function (node, appearing) {
        _this.removeClasses(node, 'exit');

        _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

        if (_this.props.onEnter) {
          _this.props.onEnter(node, appearing);
        }
      };

      _this.onEntering = function (node, appearing) {
        var type = appearing ? 'appear' : 'enter';

        _this.addClass(node, type, 'active');

        if (_this.props.onEntering) {
          _this.props.onEntering(node, appearing);
        }
      };

      _this.onEntered = function (node, appearing) {
        var type = appearing ? 'appear' : 'enter';

        _this.removeClasses(node, type);

        _this.addClass(node, type, 'done');

        if (_this.props.onEntered) {
          _this.props.onEntered(node, appearing);
        }
      };

      _this.onExit = function (node) {
        _this.removeClasses(node, 'appear');

        _this.removeClasses(node, 'enter');

        _this.addClass(node, 'exit', 'base');

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      _this.onExiting = function (node) {
        _this.addClass(node, 'exit', 'active');

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      };

      _this.onExited = function (node) {
        _this.removeClasses(node, 'exit');

        _this.addClass(node, 'exit', 'done');

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      };

      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var isStringClassNames = typeof classNames === 'string';
        var prefix = isStringClassNames && classNames ? classNames + "-" : '';
        var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
        var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
        var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
        return {
          baseClassName: baseClassName,
          activeClassName: activeClassName,
          doneClassName: doneClassName
        };
      };

      return _this;
    }

    var _proto = CSSTransition.prototype;

    _proto.addClass = function addClass(node, type, phase) {
      var className = this.getClassNames(type)[phase + "ClassName"];

      if (type === 'appear' && phase === 'done') {
        className += " " + this.getClassNames('enter').doneClassName;
      } // This is for to force a repaint,
      // which is necessary in order to transition styles when adding a class name.


      if (phase === 'active') {
        /* eslint-disable no-unused-expressions */
        node && node.scrollTop;
      }

      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    };

    _proto.removeClasses = function removeClasses(node, type) {
      var _this$appliedClasses$ = this.appliedClasses[type],
          baseClassName = _this$appliedClasses$.base,
          activeClassName = _this$appliedClasses$.active,
          doneClassName = _this$appliedClasses$.done;
      this.appliedClasses[type] = {};

      if (baseClassName) {
        removeClass$1(node, baseClassName);
      }

      if (activeClassName) {
        removeClass$1(node, activeClassName);
      }

      if (doneClassName) {
        removeClass$1(node, doneClassName);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          _ = _this$props.classNames,
          props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

      return React__default.createElement(Transition, _extends({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };

    return CSSTransition;
  }(React__default.Component);

  CSSTransition.defaultProps = {
    classNames: ''
  };
  CSSTransition.propTypes =  _extends({}, Transition.propTypes, {
    /**
     * The animation classNames applied to the component as it appears, enters,
     * exits or has finished the transition. A single name can be provided and it
     * will be suffixed for each stage: e.g.
     *
     * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
     * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
     * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
     *
     * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
     * This allows you to define different behavior for when appearing is done and
     * when regular entering is done, using selectors like
     * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
     * epic entrance animation when element first appears in the DOM using
     * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
     * simply use `fade-enter-done` for defining both cases.
     *
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
     *  appearDone: 'my-done-appear',
     *  enter: 'my-enter',
     *  enterActive: 'my-active-enter',
     *  enterDone: 'my-done-enter',
     *  exit: 'my-exit',
     *  exitActive: 'my-active-exit',
     *  exitDone: 'my-done-exit',
     * }}
     * ```
     *
     * If you want to set these classes using CSS Modules:
     *
     * ```js
     * import styles from './styles.css';
     * ```
     *
     * you might want to use camelCase in your CSS file, that way could simply
     * spread them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
     *  appearDone?: string,
     *  enter?: string,
     *  enterActive?: string,
     *  enterDone?: string,
     *  exit?: string,
     *  exitActive?: string,
     *  exitDone?: string,
     * }}
     */
    classNames: classNamesShape,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
     * applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEnter: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter-active' or
     * 'appear-active' class is applied.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'enter' or
     * 'appear' classes are **removed** and the `done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntered: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' class is
     * applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExit: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
     *
     * @type Function(node: HtmlElement)
     */
    onExiting: propTypes.func,

    /**
     * A `<Transition>` callback fired immediately after the 'exit' classes
     * are **removed** and the `exit-done` class is added to the DOM node.
     *
     * @type Function(node: HtmlElement)
     */
    onExited: propTypes.func
  }) ;

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, React__default.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React__default.Component);

  TransitionGroup.propTypes =  {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: propTypes.any,

    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     *
     * While this component is meant for multiple `Transition` or `CSSTransition`
     * children, sometimes you may want to have a single transition child with
     * content that you want to be transitioned out and in when you change it
     * (e.g. routes, images etc.) In that case you can change the `key` prop of
     * the transition child as you change its content, this will cause
     * `TransitionGroup` to transition the child out and back in.
     */
    children: propTypes.node,

    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: propTypes.bool,

    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: propTypes.bool,

    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: propTypes.bool,

    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: propTypes.func
  } ;
  TransitionGroup.defaultProps = defaultProps;

  var animationDuration = 350;
  var useStyles$4 = styles$5.makeStyles(function (theme) {
    var slideTransition = theme.transitions.create('transform', {
      duration: animationDuration,
      easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
    });
    return {
      transitionContainer: {
        display: 'block',
        position: 'relative',
        '& > *': {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0
        }
      },
      'slideEnter-left': {
        willChange: 'transform',
        transform: 'translate(100%)'
      },
      'slideEnter-right': {
        willChange: 'transform',
        transform: 'translate(-100%)'
      },
      slideEnterActive: {
        transform: 'translate(0%)',
        transition: slideTransition
      },
      slideExit: {
        transform: 'translate(0%)'
      },
      'slideExitActiveLeft-left': {
        willChange: 'transform',
        transform: 'translate(-200%)',
        transition: slideTransition
      },
      'slideExitActiveLeft-right': {
        willChange: 'transform',
        transform: 'translate(200%)',
        transition: slideTransition
      }
    };
  }, {
    name: 'MuiPickersSlideTransition'
  });

  var SlideTransition = function SlideTransition(_ref) {
    var children = _ref.children,
        transKey = _ref.transKey,
        slideDirection = _ref.slideDirection,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className;
    var classes = useStyles$4();
    var transitionClasses = {
      exit: classes.slideExit,
      enterActive: classes.slideEnterActive,
      // @ts-ignore
      enter: classes['slideEnter-' + slideDirection],
      // @ts-ignore
      exitActive: classes['slideExitActiveLeft-' + slideDirection]
    };
    return React.createElement(TransitionGroup, {
      className: clsx(classes.transitionContainer, className),
      childFactory: function childFactory(element) {
        return React.cloneElement(element, {
          classNames: transitionClasses
        });
      }
    }, React.createElement(CSSTransition, {
      mountOnEnter: true,
      unmountOnExit: true,
      key: transKey + slideDirection,
      timeout: animationDuration,
      classNames: transitionClasses,
      children: children
    }));
  };

  var ArrowLeftIcon = function ArrowLeftIcon(props) {
    return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
      d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }));
  };

  var ArrowRightIcon = function ArrowRightIcon(props) {
    return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
      d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }));
  };

  var useStyles$5 = styles$5.makeStyles(function (theme) {
    return {
      switchHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1)
      },
      transitionContainer: {
        width: '100%',
        overflow: 'hidden',
        height: 23
      },
      iconButton: {
        zIndex: 1,
        backgroundColor: theme.palette.background.paper
      },
      daysHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 16
      },
      dayLabel: {
        width: 36,
        margin: '0 2px',
        textAlign: 'center',
        color: theme.palette.text.hint
      }
    };
  }, {
    name: 'MuiPickersCalendarHeader'
  });
  var CalendarHeader = function CalendarHeader(_ref) {
    var currentMonth = _ref.currentMonth,
        onMonthChange = _ref.onMonthChange,
        leftArrowIcon = _ref.leftArrowIcon,
        rightArrowIcon = _ref.rightArrowIcon,
        leftArrowButtonProps = _ref.leftArrowButtonProps,
        rightArrowButtonProps = _ref.rightArrowButtonProps,
        disablePrevMonth = _ref.disablePrevMonth,
        disableNextMonth = _ref.disableNextMonth,
        slideDirection = _ref.slideDirection;
    var utils = useUtils();
    var classes = useStyles$5();
    var theme = styles$5.useTheme();
    var rtl = theme.direction === 'rtl';

    var selectNextMonth = function selectNextMonth() {
      return onMonthChange(utils.getNextMonth(currentMonth), 'left');
    };

    var selectPreviousMonth = function selectPreviousMonth() {
      return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
    };

    return React.createElement("div", null, React.createElement("div", {
      className: classes.switchHeader
    }, React.createElement(IconButton, _extends({}, leftArrowButtonProps, {
      disabled: disablePrevMonth,
      onClick: selectPreviousMonth,
      className: classes.iconButton
    }), rtl ? rightArrowIcon : leftArrowIcon), React.createElement(SlideTransition, {
      slideDirection: slideDirection,
      transKey: currentMonth.toString(),
      className: classes.transitionContainer
    }, React.createElement(Typography, {
      align: "center",
      variant: "body1"
    }, utils.getCalendarHeaderText(currentMonth))), React.createElement(IconButton, _extends({}, rightArrowButtonProps, {
      disabled: disableNextMonth,
      onClick: selectNextMonth,
      className: classes.iconButton
    }), rtl ? leftArrowIcon : rightArrowIcon)), React.createElement("div", {
      className: classes.daysHeader
    }, utils.getWeekdays().map(function (day, index) {
      return React.createElement(Typography, {
        key: index // eslint-disable-line react/no-array-index-key
        ,
        variant: "caption",
        className: classes.dayLabel
      }, day);
    })));
  };
  CalendarHeader.displayName = 'CalendarHeader';
   CalendarHeader.propTypes = {
    leftArrowIcon: propTypes_13,
    rightArrowIcon: propTypes_13,
    disablePrevMonth: propTypes_2,
    disableNextMonth: propTypes_2
  } ;
  CalendarHeader.defaultProps = {
    leftArrowIcon: React.createElement(ArrowLeftIcon, null),
    rightArrowIcon: React.createElement(ArrowRightIcon, null),
    disablePrevMonth: false,
    disableNextMonth: false
  };

  var DIALOG_WIDTH = 310;
  var DIALOG_WIDTH_WIDER = 325;
  var VIEW_HEIGHT = 305;

  var useStyles$6 = styles$5.makeStyles(function (theme) {
    return {
      staticWrapperRoot: {
        overflow: 'hidden',
        minWidth: DIALOG_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper
      }
    };
  }, {
    name: 'MuiPickersStaticWrapper'
  });
  var StaticWrapper = function StaticWrapper(_ref) {
    var children = _ref.children;
    var classes = useStyles$6();
    return React.createElement("div", {
      className: classes.staticWrapperRoot,
      children: children
    });
  };

  var ModalDialog = function ModalDialog(_ref) {
    var children = _ref.children,
        classes = _ref.classes,
        onAccept = _ref.onAccept,
        onDismiss = _ref.onDismiss,
        onClear = _ref.onClear,
        onSetToday = _ref.onSetToday,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        clearable = _ref.clearable,
        showTodayButton = _ref.showTodayButton,
        showTabs = _ref.showTabs,
        wider = _ref.wider,
        other = _objectWithoutProperties(_ref, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

    return React.createElement(Dialog, _extends({
      role: "dialog",
      onClose: onDismiss,
      classes: {
        paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
      }
    }, other), React.createElement(DialogContent, {
      children: children,
      className: classes.dialog
    }), React.createElement(DialogActions, {
      classes: {
        root: clsx((clearable || showTodayButton) && classes.withAdditionalAction)
      }
    }, clearable && React.createElement(Button, {
      color: "primary",
      onClick: onClear
    }, clearLabel), showTodayButton && React.createElement(Button, {
      color: "primary",
      onClick: onSetToday
    }, todayLabel), cancelLabel && React.createElement(Button, {
      color: "primary",
      onClick: onDismiss
    }, cancelLabel), okLabel && React.createElement(Button, {
      color: "primary",
      onClick: onAccept
    }, okLabel)));
  };
  ModalDialog.displayName = 'ModalDialog';
  var styles$1 = styles$5.createStyles({
    dialogRoot: {
      minWidth: DIALOG_WIDTH
    },
    dialogRootWider: {
      minWidth: DIALOG_WIDTH_WIDER
    },
    dialog: {
      '&:first-child': {
        padding: 0
      }
    },
    withAdditionalAction: {
      // set justifyContent to default value to fix IE11 layout bug
      // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
      justifyContent: 'flex-start',
      '& > *:first-child': {
        marginRight: 'auto'
      }
    }
  });
  var ModalDialog$1 = styles$5.withStyles(styles$1, {
    name: 'MuiPickersModal'
  })(ModalDialog);

  var useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
  function runKeyHandler(e, keyHandlers) {
    var handler = keyHandlers[e.key];

    if (handler) {
      handler(); // if event was handled prevent other side effects (e.g. page scroll)

      e.preventDefault();
    }
  }
  function useKeyDown(active, keyHandlers) {
    var keyHandlersRef = React.useRef(keyHandlers);
    keyHandlersRef.current = keyHandlers;
    useIsomorphicEffect(function () {
      if (active) {
        var handleKeyDown = function handleKeyDown(event) {
          runKeyHandler(event, keyHandlersRef.current);
        };

        window.addEventListener('keydown', handleKeyDown);
        return function () {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [active]);
  }

  var ModalWrapper = function ModalWrapper(_ref) {
    var open = _ref.open,
        children = _ref.children,
        okLabel = _ref.okLabel,
        cancelLabel = _ref.cancelLabel,
        clearLabel = _ref.clearLabel,
        todayLabel = _ref.todayLabel,
        showTodayButton = _ref.showTodayButton,
        clearable = _ref.clearable,
        DialogProps = _ref.DialogProps,
        showTabs = _ref.showTabs,
        wider = _ref.wider,
        InputComponent = _ref.InputComponent,
        DateInputProps = _ref.DateInputProps,
        onClear = _ref.onClear,
        onAccept = _ref.onAccept,
        onDismiss = _ref.onDismiss,
        onSetToday = _ref.onSetToday,
        other = _objectWithoutProperties(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);

    useKeyDown(open, {
      Enter: onAccept
    });
    return React.createElement(React.Fragment, null, React.createElement(InputComponent, _extends({}, other, DateInputProps)), React.createElement(ModalDialog$1, _extends({
      wider: wider,
      showTabs: showTabs,
      open: open,
      onClear: onClear,
      onAccept: onAccept,
      onDismiss: onDismiss,
      onSetToday: onSetToday,
      clearLabel: clearLabel,
      todayLabel: todayLabel,
      okLabel: okLabel,
      cancelLabel: cancelLabel,
      clearable: clearable,
      showTodayButton: showTodayButton,
      children: children
    }, DialogProps)));
  };
   ModalWrapper.propTypes = {
    okLabel: propTypes_13,
    cancelLabel: propTypes_13,
    clearLabel: propTypes_13,
    clearable: propTypes_2,
    todayLabel: propTypes_13,
    showTodayButton: propTypes_2,
    DialogProps: propTypes_5
  } ;
  ModalWrapper.defaultProps = {
    okLabel: 'OK',
    cancelLabel: 'Cancel',
    clearLabel: 'Clear',
    todayLabel: 'Today',
    clearable: false,
    showTodayButton: false
  };

  var InlineWrapper = function InlineWrapper(_ref) {
    var open = _ref.open,
        wider = _ref.wider,
        children = _ref.children,
        PopoverProps = _ref.PopoverProps,
        onClear = _ref.onClear,
        onDismiss = _ref.onDismiss,
        onSetToday = _ref.onSetToday,
        onAccept = _ref.onAccept,
        showTabs = _ref.showTabs,
        DateInputProps = _ref.DateInputProps,
        InputComponent = _ref.InputComponent,
        other = _objectWithoutProperties(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);

    var ref = React.useRef();
    useKeyDown(open, {
      Enter: onAccept
    });
    return React.createElement(React.Fragment, null, React.createElement(InputComponent, _extends({}, other, DateInputProps, {
      inputRef: ref
    })), React.createElement(Popover, _extends({
      open: open,
      onClose: onDismiss,
      anchorEl: ref.current,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      children: children
    }, PopoverProps)));
  };
   InlineWrapper.propTypes = {
    onOpen: propTypes_3,
    onClose: propTypes_3,
    PopoverProps: propTypes_5
  } ;

  function getWrapperFromVariant(variant) {
    switch (variant) {
      case 'inline':
        return InlineWrapper;

      case 'static':
        return StaticWrapper;

      default:
        return ModalWrapper;
    }
  }
  var VariantContext = React.createContext(null);
  var Wrapper = function Wrapper(_ref) {
    var variant = _ref.variant,
        props = _objectWithoutProperties(_ref, ["variant"]);

    var Component = getWrapperFromVariant(variant);
    return React.createElement(VariantContext.Provider, {
      value: variant || 'dialog'
    }, React.createElement(Component, props));
  };

  var withUtils = function withUtils() {
    return function (Component) {
      var WithUtils = function WithUtils(props) {
        var utils = useUtils();
        return React.createElement(Component, _extends({
          utils: utils
        }, props));
      };

      WithUtils.displayName = "WithUtils(".concat(Component.displayName || Component.name, ")");
      return WithUtils;
    };
  };

  var KeyDownListener = function KeyDownListener(_ref) {
    var onKeyDown = _ref.onKeyDown;
    React.useEffect(function () {
      window.addEventListener('keydown', onKeyDown);
      return function () {
        window.removeEventListener('keydown', onKeyDown);
      };
    }, [onKeyDown]);
    return null;
  };

  var Calendar =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Calendar, _React$Component);

    function Calendar() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Calendar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        slideDirection: 'left',
        currentMonth: _this.props.utils.startOfMonth(_this.props.date),
        loadingQueue: 0
      };

      _this.pushToLoadingQueue = function () {
        var loadingQueue = _this.state.loadingQueue + 1;

        _this.setState({
          loadingQueue: loadingQueue
        });
      };

      _this.popFromLoadingQueue = function () {
        var loadingQueue = _this.state.loadingQueue;
        loadingQueue = loadingQueue <= 0 ? 0 : loadingQueue - 1;

        _this.setState({
          loadingQueue: loadingQueue
        });
      };

      _this.handleChangeMonth = function (newMonth, slideDirection) {
        _this.setState({
          currentMonth: newMonth,
          slideDirection: slideDirection
        });

        if (_this.props.onMonthChange) {
          var returnVal = _this.props.onMonthChange(newMonth);

          if (returnVal) {
            _this.pushToLoadingQueue();

            returnVal.then(function () {
              _this.popFromLoadingQueue();
            });
          }
        }
      };

      _this.validateMinMaxDate = function (day) {
        var _this$props = _this.props,
            minDate = _this$props.minDate,
            maxDate = _this$props.maxDate,
            utils = _this$props.utils,
            disableFuture = _this$props.disableFuture,
            disablePast = _this$props.disablePast;
        var now = utils.date();
        return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
      };

      _this.shouldDisablePrevMonth = function () {
        var _this$props2 = _this.props,
            utils = _this$props2.utils,
            disablePast = _this$props2.disablePast,
            minDate = _this$props2.minDate;
        var now = utils.date();
        var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
        return !utils.isBefore(firstEnabledMonth, _this.state.currentMonth);
      };

      _this.shouldDisableNextMonth = function () {
        var _this$props3 = _this.props,
            utils = _this$props3.utils,
            disableFuture = _this$props3.disableFuture,
            maxDate = _this$props3.maxDate;
        var now = utils.date();
        var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
        return !utils.isAfter(lastEnabledMonth, _this.state.currentMonth);
      };

      _this.shouldDisableDate = function (day) {
        var shouldDisableDate = _this.props.shouldDisableDate;
        return _this.validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
      };

      _this.handleDaySelect = function (day) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var _this$props4 = _this.props,
            date = _this$props4.date,
            utils = _this$props4.utils;

        _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
      };

      _this.moveToDay = function (day) {
        var utils = _this.props.utils;

        if (day && !_this.shouldDisableDate(day)) {
          if (utils.getMonth(day) !== utils.getMonth(_this.state.currentMonth)) {
            _this.handleChangeMonth(utils.startOfMonth(day), 'left');
          }

          _this.handleDaySelect(day, false);
        }
      };

      _this.handleKeyDown = function (event) {
        var _this$props5 = _this.props,
            theme = _this$props5.theme,
            date = _this$props5.date,
            utils = _this$props5.utils;
        runKeyHandler(event, {
          ArrowUp: function ArrowUp() {
            return _this.moveToDay(utils.addDays(date, -7));
          },
          ArrowDown: function ArrowDown() {
            return _this.moveToDay(utils.addDays(date, 7));
          },
          ArrowLeft: function ArrowLeft() {
            return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1));
          },
          ArrowRight: function ArrowRight() {
            return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1));
          }
        });
      };

      _this.renderWeeks = function () {
        var _this$props6 = _this.props,
            utils = _this$props6.utils,
            classes = _this$props6.classes;
        var weeks = utils.getWeekArray(_this.state.currentMonth);
        return weeks.map(function (week) {
          return React.createElement("div", {
            key: "week-".concat(week[0].toString()),
            className: classes.week
          }, _this.renderDays(week));
        });
      };

      _this.renderDays = function (week) {
        var _this$props7 = _this.props,
            date = _this$props7.date,
            renderDay = _this$props7.renderDay,
            utils = _this$props7.utils;
        var now = utils.date();
        var selectedDate = utils.startOfDay(date);
        var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
        return week.map(function (day) {
          var disabled = _this.shouldDisableDate(day);

          var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
          var dayComponent = React.createElement(Day, {
            disabled: disabled,
            current: utils.isSameDay(day, now),
            hidden: !isDayInCurrentMonth,
            selected: utils.isSameDay(selectedDate, day)
          }, utils.getDayText(day));

          if (renderDay) {
            dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
          }

          return React.createElement(DayWrapper, {
            value: day,
            key: day.toString(),
            disabled: disabled,
            dayInCurrentMonth: isDayInCurrentMonth,
            onSelect: _this.handleDaySelect
          }, dayComponent);
        });
      };

      return _this;
    }

    _createClass(Calendar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props8 = this.props,
            date = _this$props8.date,
            minDate = _this$props8.minDate,
            maxDate = _this$props8.maxDate,
            utils = _this$props8.utils,
            disablePast = _this$props8.disablePast,
            disableFuture = _this$props8.disableFuture;

        if (this.shouldDisableDate(date)) {
          var closestEnabledDate = findClosestEnabledDate({
            date: date,
            utils: utils,
            minDate: utils.date(minDate),
            maxDate: utils.date(maxDate),
            disablePast: Boolean(disablePast),
            disableFuture: Boolean(disableFuture),
            shouldDisableDate: this.shouldDisableDate
          });
          this.handleDaySelect(closestEnabledDate, false);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            currentMonth = _this$state.currentMonth,
            slideDirection = _this$state.slideDirection;
        var _this$props9 = this.props,
            classes = _this$props9.classes,
            allowKeyboardControl = _this$props9.allowKeyboardControl,
            leftArrowButtonProps = _this$props9.leftArrowButtonProps,
            leftArrowIcon = _this$props9.leftArrowIcon,
            rightArrowButtonProps = _this$props9.rightArrowButtonProps,
            rightArrowIcon = _this$props9.rightArrowIcon,
            loadingIndicator = _this$props9.loadingIndicator;
        var loadingElement = loadingIndicator ? loadingIndicator : React.createElement(CircularProgress, null);
        return React.createElement(React.Fragment, null, allowKeyboardControl && this.context !== 'static' && React.createElement(KeyDownListener, {
          onKeyDown: this.handleKeyDown
        }), React.createElement(CalendarHeader, {
          currentMonth: currentMonth,
          slideDirection: slideDirection,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: leftArrowIcon,
          leftArrowButtonProps: leftArrowButtonProps,
          rightArrowIcon: rightArrowIcon,
          rightArrowButtonProps: rightArrowButtonProps,
          disablePrevMonth: this.shouldDisablePrevMonth(),
          disableNextMonth: this.shouldDisableNextMonth()
        }), React.createElement(SlideTransition, {
          slideDirection: slideDirection,
          transKey: currentMonth.toString(),
          className: classes.transitionContainer
        }, React.createElement(React.Fragment, null, this.state.loadingQueue > 0 && React.createElement("div", {
          className: classes.progressContainer
        }, loadingElement) || React.createElement("div", null, this.renderWeeks()))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, state) {
        var utils = nextProps.utils,
            nextDate = nextProps.date;

        if (!utils.isEqual(nextDate, state.lastDate)) {
          var nextMonth = utils.getMonth(nextDate);
          var lastDate = state.lastDate || nextDate;
          var lastMonth = utils.getMonth(lastDate);
          return {
            lastDate: nextDate,
            currentMonth: nextProps.utils.startOfMonth(nextDate),
            // prettier-ignore
            slideDirection: nextMonth === lastMonth ? state.slideDirection : utils.isAfterDay(nextDate, lastDate) ? 'left' : 'right'
          };
        }

        return null;
      }
    }]);

    return Calendar;
  }(React.Component);
  Calendar.contextType = VariantContext;
   Calendar.propTypes = {
    renderDay: propTypes_3,
    shouldDisableDate: propTypes_3,
    allowKeyboardControl: propTypes_2
  } ;
  Calendar.defaultProps = {
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01'),
    disablePast: false,
    disableFuture: false,
    allowKeyboardControl: true
  };
  var styles$2 = function styles(theme) {
    return {
      transitionContainer: {
        minHeight: 36 * 6,
        marginTop: theme.spacing(1.5)
      },
      progressContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      week: {
        display: 'flex',
        justifyContent: 'center'
      }
    };
  };
  var Calendar$1 = styles$5.withStyles(styles$2, {
    name: 'MuiPickersCalendar',
    withTheme: true
  })(withUtils()(Calendar));

  function useViews(views, openTo, onChange) {
    var _React$useState = React.useState(openTo && arrayIncludes(views, openTo) ? openTo : views[0]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        openView = _React$useState2[0],
        setOpenView = _React$useState2[1];

    var handleChangeAndOpenNext = React.useCallback(function (date, isFinish) {
      var nextViewToOpen = views[views.indexOf(openView) + 1];

      if (isFinish && nextViewToOpen) {
        // do not close picker if needs to show next view
        onChange(date, false);
        setOpenView(nextViewToOpen);
        return;
      }

      onChange(date, Boolean(isFinish));
    }, [onChange, openView, views]);
    return {
      handleChangeAndOpenNext: handleChangeAndOpenNext,
      openView: openView,
      setOpenView: setOpenView
    };
  }

  var ClockType;

  (function (ClockType) {
    ClockType["HOURS"] = "hours";
    ClockType["MINUTES"] = "minutes";
    ClockType["SECONDS"] = "seconds";
  })(ClockType || (ClockType = {}));

  var ClockType$1 = ClockType;

  var ClockPointer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ClockPointer, _React$Component);

    function ClockPointer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ClockPointer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClockPointer)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        toAnimateTransform: false,
        previousType: undefined
      };

      _this.getAngleStyle = function () {
        var _this$props = _this.props,
            value = _this$props.value,
            isInner = _this$props.isInner,
            type = _this$props.type;
        var max = type === ClockType$1.HOURS ? 12 : 60;
        var angle = 360 / max * value;

        if (type === ClockType$1.HOURS && value > 12) {
          angle -= 360; // round up angle to max 360 degrees
        }

        return {
          height: isInner ? '26%' : '40%',
          transform: "rotateZ(".concat(angle, "deg)")
        };
      };

      return _this;
    }

    _createClass(ClockPointer, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            classes = _this$props2.classes,
            hasSelected = _this$props2.hasSelected;
        return React.createElement("div", {
          style: this.getAngleStyle(),
          className: clsx(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
        }, React.createElement("div", {
          className: clsx(classes.thumb, hasSelected && classes.noPoint)
        }));
      }
    }]);

    return ClockPointer;
  }(React.Component);

  ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
    if (nextProps.type !== state.previousType) {
      return {
        toAnimateTransform: true,
        previousType: nextProps.type
      };
    }

    return {
      toAnimateTransform: false,
      previousType: nextProps.type
    };
  };

  var styles$3 = function styles(theme) {
    return styles$5.createStyles({
      pointer: {
        width: 2,
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        left: 'calc(50% - 1px)',
        bottom: '50%',
        transformOrigin: 'center bottom 0px'
      },
      animateTransform: {
        transition: theme.transitions.create(['transform', 'height'])
      },
      thumb: {
        width: 4,
        height: 4,
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: '100%',
        position: 'absolute',
        top: -21,
        left: -15,
        border: "14px solid ".concat(theme.palette.primary.main),
        boxSizing: 'content-box'
      },
      noPoint: {
        backgroundColor: theme.palette.primary.main
      }
    });
  };
  var ClockPointer$1 = styles$5.withStyles(styles$3, {
    name: 'MuiPickersClockPointer'
  })(ClockPointer);

  var center = {
    x: 260 / 2,
    y: 260 / 2
  };
  var basePoint = {
    x: center.x,
    y: 0
  };
  var cx = basePoint.x - center.x;
  var cy = basePoint.y - center.y;

  var rad2deg = function rad2deg(rad) {
    return rad * 57.29577951308232;
  };

  var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
    var x = offsetX - center.x;
    var y = offsetY - center.y;
    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
    var deg = rad2deg(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;
    var value = Math.floor(deg / step) || 0;
    var delta = Math.pow(x, 2) + Math.pow(y, 2);
    var distance = Math.sqrt(delta);
    return {
      value: value,
      distance: distance
    };
  };

  var getHours = function getHours(offsetX, offsetY, ampm) {
    var _getAngleValue = getAngleValue(30, offsetX, offsetY),
        value = _getAngleValue.value,
        distance = _getAngleValue.distance;

    value = value || 12;

    if (!ampm) {
      if (distance < 90) {
        value += 12;
        value %= 24;
      }
    } else {
      value %= 12;
    }

    return value;
  };
  var getMinutes = function getMinutes(offsetX, offsetY) {
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var angleStep = step * 6;

    var _getAngleValue2 = getAngleValue(angleStep, offsetX, offsetY),
        value = _getAngleValue2.value;

    value = value * step % 60;
    return value;
  };
  var getMeridiem = function getMeridiem(date, utils) {
    return utils.getHours(date) >= 12 ? 'pm' : 'am';
  };
  var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
    if (ampm) {
      var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

      if (currentMeridiem !== meridiem) {
        var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
        return utils.setHours(time, hours);
      }
    }

    return time;
  };

  var Clock =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Clock);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Clock)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.isMoving = false;

      _this.handleTouchMove = function (e) {
        _this.isMoving = true;

        _this.setTime(e);
      };

      _this.handleTouchEnd = function (e) {
        if (_this.isMoving) {
          _this.setTime(e, true);

          _this.isMoving = false;
        }
      };

      _this.handleMove = function (e) {
        e.preventDefault();
        e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

        var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

        if (isButtonPressed) {
          _this.setTime(e.nativeEvent, false);
        }
      };

      _this.handleMouseUp = function (e) {
        if (_this.isMoving) {
          _this.isMoving = false;
        }

        _this.setTime(e.nativeEvent, true);
      };

      _this.hasSelected = function () {
        var _this$props = _this.props,
            type = _this$props.type,
            value = _this$props.value;

        if (type === ClockType$1.HOURS) {
          return true;
        }

        return value % 5 === 0;
      };

      return _this;
    }

    _createClass(Clock, [{
      key: "setTime",
      value: function setTime(e) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var offsetX = e.offsetX,
            offsetY = e.offsetY;

        if (typeof offsetX === 'undefined') {
          var rect = e.target.getBoundingClientRect();
          offsetX = e.changedTouches[0].clientX - rect.left;
          offsetY = e.changedTouches[0].clientY - rect.top;
        }

        var value = this.props.type === ClockType$1.SECONDS || this.props.type === ClockType$1.MINUTES ? getMinutes(offsetX, offsetY, this.props.minutesStep) : getHours(offsetX, offsetY, Boolean(this.props.ampm));
        this.props.onChange(value, isFinish);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            classes = _this$props2.classes,
            value = _this$props2.value,
            children = _this$props2.children,
            type = _this$props2.type,
            ampm = _this$props2.ampm;
        var isPointerInner = !ampm && type === ClockType$1.HOURS && (value < 1 || value > 12);
        return React.createElement("div", {
          className: classes.container
        }, React.createElement("div", {
          className: classes.clock
        }, React.createElement("div", {
          role: "menu",
          tabIndex: -1,
          className: classes.squareMask,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd,
          onMouseUp: this.handleMouseUp,
          onMouseMove: this.handleMove
        }), React.createElement("div", {
          className: classes.pin
        }), React.createElement(ClockPointer$1, {
          type: type,
          value: value,
          isInner: isPointerInner,
          hasSelected: this.hasSelected()
        }), children));
      }
    }]);

    return Clock;
  }(React.Component);
   Clock.propTypes = {
    type: propTypes_15(Object.keys(ClockType$1).map(function (key) {
      return ClockType$1[key];
    })).isRequired,
    value: propTypes_4.isRequired,
    onChange: propTypes_3.isRequired,
    children: propTypes_9(propTypes_13).isRequired,
    ampm: propTypes_2,
    minutesStep: propTypes_4,
    innerRef: propTypes_8
  } ;
  Clock.defaultProps = {
    ampm: false,
    minutesStep: 1
  };
  var styles$4 = function styles(theme) {
    return styles$5.createStyles({
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: "".concat(theme.spacing(2), "px 0 ").concat(theme.spacing(1), "px")
      },
      clock: {
        backgroundColor: 'rgba(0,0,0,.07)',
        borderRadius: '50%',
        height: 260,
        width: 260,
        position: 'relative',
        pointerEvents: 'none'
      },
      squareMask: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'auto',
        outline: 'none',
        touchActions: 'none',
        userSelect: 'none',
        '&:active': {
          cursor: 'move'
        }
      },
      pin: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    });
  };
  var Clock$1 = styles$5.withStyles(styles$4, {
    name: 'MuiPickersClock'
  })(Clock);

  var positions = {
    0: [0, 40],
    1: [55, 19.6],
    2: [94.4, 59.5],
    3: [109, 114],
    4: [94.4, 168.5],
    5: [54.5, 208.4],
    6: [0, 223],
    7: [-54.5, 208.4],
    8: [-94.4, 168.5],
    9: [-109, 114],
    10: [-94.4, 59.5],
    11: [-54.5, 19.6],
    12: [0, 5],
    13: [36.9, 49.9],
    14: [64, 77],
    15: [74, 114],
    16: [64, 151],
    17: [37, 178],
    18: [0, 188],
    19: [-37, 178],
    20: [-64, 151],
    21: [-74, 114],
    22: [-64, 77],
    23: [-37, 50]
  };
  var useStyles$7 = styles$5.makeStyles(function (theme) {
    var size = theme.spacing(4);
    return {
      clockNumber: {
        width: size,
        height: 32,
        userSelect: 'none',
        position: 'absolute',
        left: "calc((100% - ".concat(typeof size === 'number' ? "".concat(size, "px") : size, ") / 2)"),
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
      },
      clockNumberSelected: {
        color: theme.palette.primary.contrastText
      }
    };
  }, {
    name: 'MuiPickersClockNumber'
  });
  var ClockNumber = function ClockNumber(_ref) {
    var selected = _ref.selected,
        label = _ref.label,
        index = _ref.index,
        isInner = _ref.isInner;
    var classes = useStyles$7();
    var className = clsx(classes.clockNumber, selected && classes.clockNumberSelected);
    var transformStyle = React.useMemo(function () {
      var position = positions[index];
      return {
        transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
      };
    }, [index]);
    return React.createElement(Typography, {
      component: "span",
      className: className,
      variant: isInner ? 'body2' : 'body1',
      style: transformStyle,
      children: label
    });
  };

  var getHourNumbers = function getHourNumbers(_ref) {
    var ampm = _ref.ampm,
        utils = _ref.utils,
        date = _ref.date;
    var currentHours = utils.getHours(date);
    var hourNumbers = [];
    var startHour = ampm ? 1 : 0;
    var endHour = ampm ? 12 : 23;

    var isSelected = function isSelected(hour) {
      if (ampm) {
        if (hour === 12) {
          return currentHours === 12 || currentHours === 0;
        }

        return currentHours === hour || currentHours - 12 === hour;
      }

      return currentHours === hour;
    };

    for (var hour = startHour; hour <= endHour; hour += 1) {
      var label = hour.toString();

      if (hour === 0) {
        label = '00';
      }

      var props = {
        index: hour,
        label: utils.formatNumber(label),
        selected: isSelected(hour),
        isInner: !ampm && (hour === 0 || hour > 12)
      };
      hourNumbers.push(React.createElement(ClockNumber, _extends({
        key: hour
      }, props)));
    }

    return hourNumbers;
  };
  var getMinutesNumbers = function getMinutesNumbers(_ref2) {
    var value = _ref2.value,
        utils = _ref2.utils;
    var f = utils.formatNumber;
    return [React.createElement(ClockNumber, {
      label: f('00'),
      selected: value === 0,
      index: 12,
      key: 12
    }), React.createElement(ClockNumber, {
      label: f('05'),
      selected: value === 5,
      index: 1,
      key: 1
    }), React.createElement(ClockNumber, {
      label: f('10'),
      selected: value === 10,
      index: 2,
      key: 2
    }), React.createElement(ClockNumber, {
      label: f('15'),
      selected: value === 15,
      index: 3,
      key: 3
    }), React.createElement(ClockNumber, {
      label: f('20'),
      selected: value === 20,
      index: 4,
      key: 4
    }), React.createElement(ClockNumber, {
      label: f('25'),
      selected: value === 25,
      index: 5,
      key: 5
    }), React.createElement(ClockNumber, {
      label: f('30'),
      selected: value === 30,
      index: 6,
      key: 6
    }), React.createElement(ClockNumber, {
      label: f('35'),
      selected: value === 35,
      index: 7,
      key: 7
    }), React.createElement(ClockNumber, {
      label: f('40'),
      selected: value === 40,
      index: 8,
      key: 8
    }), React.createElement(ClockNumber, {
      label: f('45'),
      selected: value === 45,
      index: 9,
      key: 9
    }), React.createElement(ClockNumber, {
      label: f('50'),
      selected: value === 50,
      index: 10,
      key: 10
    }), React.createElement(ClockNumber, {
      label: f('55'),
      selected: value === 55,
      index: 11,
      key: 11
    })];
  };

  var ClockView = function ClockView(_ref) {
    var type = _ref.type,
        onHourChange = _ref.onHourChange,
        onMinutesChange = _ref.onMinutesChange,
        onSecondsChange = _ref.onSecondsChange,
        ampm = _ref.ampm,
        date = _ref.date,
        minutesStep = _ref.minutesStep;
    var utils = useUtils();
    var viewProps = React.useMemo(function () {
      switch (type) {
        case ClockType$1.HOURS:
          return {
            value: utils.getHours(date),
            children: getHourNumbers({
              date: date,
              utils: utils,
              ampm: Boolean(ampm)
            }),
            onChange: function onChange(value, isFinish) {
              var currentMeridiem = getMeridiem(date, utils);
              var updatedTimeWithMeridiem = convertToMeridiem(utils.setHours(date, value), currentMeridiem, Boolean(ampm), utils);
              onHourChange(updatedTimeWithMeridiem, isFinish);
            }
          };

        case ClockType$1.MINUTES:
          var minutesValue = utils.getMinutes(date);
          return {
            value: minutesValue,
            children: getMinutesNumbers({
              value: minutesValue,
              utils: utils
            }),
            onChange: function onChange(value, isFinish) {
              var updatedTime = utils.setMinutes(date, value);
              onMinutesChange(updatedTime, isFinish);
            }
          };

        case ClockType$1.SECONDS:
          var secondsValue = utils.getSeconds(date);
          return {
            value: secondsValue,
            children: getMinutesNumbers({
              value: secondsValue,
              utils: utils
            }),
            onChange: function onChange(value, isFinish) {
              var updatedTime = utils.setSeconds(date, value);
              onSecondsChange(updatedTime, isFinish);
            }
          };

        default:
          throw new Error('You must provide the type for TimePickerView');
      }
    }, [ampm, date, onHourChange, onMinutesChange, onSecondsChange, type, utils]);
    return React.createElement(Clock$1, _extends({
      type: type,
      ampm: ampm,
      minutesStep: minutesStep
    }, viewProps));
  };
  ClockView.displayName = 'TimePickerView';
   ClockView.propTypes = {
    date: propTypes_5.isRequired,
    onHourChange: propTypes_3.isRequired,
    onMinutesChange: propTypes_3.isRequired,
    onSecondsChange: propTypes_3.isRequired,
    ampm: propTypes_2,
    minutesStep: propTypes_4,
    type: propTypes_15(Object.keys(ClockType$1).map(function (key) {
      return ClockType$1[key];
    })).isRequired
  } ;
  ClockView.defaultProps = {
    ampm: true,
    minutesStep: 1
  };
  var ClockView$1 = React.memo(ClockView);

  var useStyles$8 = styles$5.makeStyles(function (theme) {
    return {
      root: {
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&:focus': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium
        }
      },
      yearSelected: {
        margin: '10px 0',
        fontWeight: theme.typography.fontWeightMedium
      },
      yearDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  }, {
    name: 'MuiPickersYear'
  });
  var Year = function Year(_ref) {
    var onSelect = _ref.onSelect,
        forwardedRef = _ref.forwardedRef,
        value = _ref.value,
        selected = _ref.selected,
        disabled = _ref.disabled,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);

    var classes = useStyles$8();
    var handleClick = React.useCallback(function () {
      return onSelect(value);
    }, [onSelect, value]);
    return React.createElement(Typography, _extends({
      role: "button",
      component: "div",
      tabIndex: disabled ? -1 : 0,
      onClick: handleClick,
      onKeyPress: handleClick,
      color: selected ? 'primary' : undefined,
      variant: selected ? 'h5' : 'subtitle1',
      children: children,
      ref: forwardedRef,
      className: clsx(classes.root, selected && classes.yearSelected, disabled && classes.yearDisabled)
    }, other));
  };
  Year.displayName = 'Year';
  var Year$1 = React.forwardRef(function (props, ref) {
    return React.createElement(Year, _extends({}, props, {
      forwardedRef: ref
    }));
  });

  var useStyles$9 = styles$5.makeStyles({
    container: {
      height: 300,
      overflowY: 'auto'
    }
  }, {
    name: 'MuiPickersYearSelection'
  });
  var YearSelection = function YearSelection(_ref) {
    var date = _ref.date,
        onChange = _ref.onChange,
        onYearChange = _ref.onYearChange,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        animateYearScrolling = _ref.animateYearScrolling;
    var utils = useUtils();
    var classes = useStyles$9();
    var currentVariant = React.useContext(VariantContext);
    var selectedYearRef = React.useRef(null);
    React.useEffect(function () {
      if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
        try {
          selectedYearRef.current.scrollIntoView({
            block: currentVariant === 'static' ? 'nearest' : 'center',
            behavior: animateYearScrolling ? 'smooth' : 'auto'
          });
        } catch (e) {
          // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
          selectedYearRef.current.scrollIntoView();
        }
      }
    }, []); // eslint-disable-line

    var currentYear = utils.getYear(date);
    var onYearSelect = React.useCallback(function (year) {
      var newDate = utils.setYear(date, year);

      if (onYearChange) {
        onYearChange(newDate);
      }

      onChange(newDate, true);
    }, [date, onChange, onYearChange, utils]);
    return React.createElement("div", {
      className: classes.container
    }, utils.getYearRange(minDate, maxDate).map(function (year) {
      var yearNumber = utils.getYear(year);
      var selected = yearNumber === currentYear;
      return React.createElement(Year$1, {
        key: utils.getYearText(year),
        selected: selected,
        value: yearNumber,
        onSelect: onYearSelect,
        ref: selected ? selectedYearRef : undefined,
        disabled: Boolean(disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()))
      }, utils.getYearText(year));
    }));
  };

  var useStyles$a = styles$5.makeStyles(function (theme) {
    return {
      root: {
        flex: '1 0 33.33%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        height: 75,
        transition: theme.transitions.create('font-size', {
          duration: '100ms'
        }),
        '&:focus': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium
        }
      },
      monthSelected: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      },
      monthDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint
      }
    };
  }, {
    name: 'MuiPickersMonth'
  });
  var Month = function Month(_ref) {
    var selected = _ref.selected,
        onSelect = _ref.onSelect,
        disabled = _ref.disabled,
        value = _ref.value,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

    var classes = useStyles$a();
    var handleSelection = React.useCallback(function () {
      onSelect(value);
    }, [onSelect, value]);
    return React.createElement(Typography, _extends({
      role: "button",
      component: "div",
      className: clsx(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
      tabIndex: disabled ? -1 : 0,
      onClick: handleSelection,
      onKeyPress: handleSelection,
      color: selected ? 'primary' : undefined,
      variant: selected ? 'h5' : 'subtitle1',
      children: children
    }, other));
  };
  Month.displayName = 'Month';

  var useStyles$b = styles$5.makeStyles({
    container: {
      width: 310,
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'stretch'
    }
  }, {
    name: 'MuiPickersMonthSelection'
  });
  var MonthSelection = function MonthSelection(_ref) {
    var disablePast = _ref.disablePast,
        disableFuture = _ref.disableFuture,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        date = _ref.date,
        onMonthChange = _ref.onMonthChange,
        onChange = _ref.onChange;
    var utils = useUtils();
    var classes = useStyles$b();
    var currentMonth = utils.getMonth(date);

    var shouldDisableMonth = function shouldDisableMonth(month) {
      var now = utils.date();
      var utilMinDate = utils.date(minDate);
      var utilMaxDate = utils.date(maxDate);
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
      var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
      var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
      return isBeforeFirstEnabled || isAfterLastEnabled;
    };

    var onMonthSelect = React.useCallback(function (month) {
      var newDate = utils.setMonth(date, month);
      onChange(newDate, true);

      if (onMonthChange) {
        onMonthChange(newDate);
      }
    }, [date, onChange, onMonthChange, utils]);
    return React.createElement("div", {
      className: classes.container
    }, utils.getMonthArray(date).map(function (month) {
      var monthNumber = utils.getMonth(month);
      var monthText = utils.format(month, 'MMM');
      return React.createElement(Month, {
        key: monthText,
        value: monthNumber,
        selected: monthNumber === currentMonth,
        onSelect: onMonthSelect,
        disabled: shouldDisableMonth(month)
      }, monthText);
    }));
  };

  var getOrientation = function getOrientation() {
    if (typeof window === 'undefined') {
      return 'portrait';
    }

    if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
      return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
    } // Support IOS safari


    if (window.orientation) {
      return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
    }

    return 'portrait';
  };

  function useIsLandscape(customOrientation) {
    var _React$useState = React.useState(getOrientation()),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        orientation = _React$useState2[0],
        setOrientation = _React$useState2[1];

    var eventHandler = React.useCallback(function () {
      return setOrientation(getOrientation());
    }, []);
    useIsomorphicEffect(function () {
      window.addEventListener('orientationchange', eventHandler);
      return function () {
        return window.removeEventListener('orientationchange', eventHandler);
      };
    }, [eventHandler]);
    var orientationToUse = customOrientation || orientation;
    return orientationToUse === 'landscape';
  }

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var viewsMap = {
    year: YearSelection,
    month: MonthSelection,
    date: Calendar$1,
    hours: ClockView,
    minutes: ClockView,
    seconds: ClockView
  };
  var useStyles$c = styles$5.makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    containerLandscape: {
      flexDirection: 'row'
    },
    pickerView: {
      overflowX: 'hidden',
      minHeight: VIEW_HEIGHT,
      minWidth: DIALOG_WIDTH,
      maxWidth: DIALOG_WIDTH_WIDER,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    pickerViewLandscape: {
      padding: '0 8px'
    }
  }, {
    name: 'MuiPickersBasePicker'
  });
  var Picker = function Picker(_ref) {
    var date = _ref.date,
        views = _ref.views,
        disableToolbar = _ref.disableToolbar,
        onChange = _ref.onChange,
        openTo = _ref.openTo,
        unparsedMinDate = _ref.minDate,
        unparsedMaxDate = _ref.maxDate,
        ToolbarComponent = _ref.ToolbarComponent,
        orientation = _ref.orientation,
        rest = _objectWithoutProperties(_ref, ["date", "views", "disableToolbar", "onChange", "openTo", "minDate", "maxDate", "ToolbarComponent", "orientation"]);

    var utils = useUtils();
    var classes = useStyles$c();
    var isLandscape = useIsLandscape(orientation);

    var _useViews = useViews(views, openTo, onChange),
        openView = _useViews.openView,
        setOpenView = _useViews.setOpenView,
        handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

    var minDate = React.useMemo(function () {
      return utils.date(unparsedMinDate);
    }, [unparsedMinDate, utils]);
    var maxDate = React.useMemo(function () {
      return utils.date(unparsedMaxDate);
    }, [unparsedMaxDate, utils]);
    return React.createElement("div", {
      className: clsx(classes.container, isLandscape && classes.containerLandscape)
    }, !disableToolbar && React.createElement(ToolbarComponent, _extends({}, rest, {
      views: views,
      isLandscape: isLandscape,
      date: date,
      onChange: onChange,
      setOpenView: setOpenView,
      openView: openView
    })), React.createElement("div", {
      className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
    }, openView === 'year' && React.createElement(YearSelection, _extends({}, rest, {
      date: date,
      onChange: handleChangeAndOpenNext,
      minDate: minDate,
      maxDate: maxDate
    })), openView === 'month' && React.createElement(MonthSelection, _extends({}, rest, {
      date: date,
      onChange: handleChangeAndOpenNext,
      minDate: minDate,
      maxDate: maxDate
    })), openView === 'date' && React.createElement(Calendar$1, _extends({}, rest, {
      date: date,
      onChange: handleChangeAndOpenNext,
      minDate: minDate,
      maxDate: maxDate
    })), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && React.createElement(ClockView, _extends({}, rest, {
      date: date,
      type: openView,
      onHourChange: handleChangeAndOpenNext,
      onMinutesChange: handleChangeAndOpenNext,
      onSecondsChange: handleChangeAndOpenNext
    }))));
  };
  Picker.defaultProps = _objectSpread$4({}, datePickerDefaultProps, {
    views: Object.keys(viewsMap)
  });

  function makePickerWithState(_ref) {
    var Input = _ref.Input,
        useState = _ref.useState,
        useOptions = _ref.useOptions,
        getCustomProps = _ref.getCustomProps,
        DefaultToolbarComponent = _ref.DefaultToolbarComponent;

    function PickerWithState(props) {
      var allowKeyboardControl = props.allowKeyboardControl,
          ampm = props.ampm,
          animateYearScrolling = props.animateYearScrolling,
          autoOk = props.autoOk,
          dateRangeIcon = props.dateRangeIcon,
          disableFuture = props.disableFuture,
          disablePast = props.disablePast,
          disableToolbar = props.disableToolbar,
          emptyLabel = props.emptyLabel,
          format = props.format,
          forwardedRef = props.forwardedRef,
          hideTabs = props.hideTabs,
          initialFocusedDate = props.initialFocusedDate,
          invalidDateMessage = props.invalidDateMessage,
          invalidLabel = props.invalidLabel,
          labelFunc = props.labelFunc,
          leftArrowButtonProps = props.leftArrowButtonProps,
          leftArrowIcon = props.leftArrowIcon,
          loadingIndicator = props.loadingIndicator,
          maxDate = props.maxDate,
          maxDateMessage = props.maxDateMessage,
          minDate = props.minDate,
          minDateMessage = props.minDateMessage,
          minutesStep = props.minutesStep,
          onAccept = props.onAccept,
          onChange = props.onChange,
          onClose = props.onClose,
          onMonthChange = props.onMonthChange,
          onOpen = props.onOpen,
          onYearChange = props.onYearChange,
          openTo = props.openTo,
          orientation = props.orientation,
          renderDay = props.renderDay,
          rightArrowButtonProps = props.rightArrowButtonProps,
          rightArrowIcon = props.rightArrowIcon,
          shouldDisableDate = props.shouldDisableDate,
          strictCompareDates = props.strictCompareDates,
          timeIcon = props.timeIcon,
          _props$ToolbarCompone = props.ToolbarComponent,
          ToolbarComponent = _props$ToolbarCompone === void 0 ? DefaultToolbarComponent : _props$ToolbarCompone,
          value = props.value,
          variant = props.variant,
          views = props.views,
          other = _objectWithoutProperties(props, ["allowKeyboardControl", "ampm", "animateYearScrolling", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "disableToolbar", "emptyLabel", "format", "forwardedRef", "hideTabs", "initialFocusedDate", "invalidDateMessage", "invalidLabel", "labelFunc", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "variant", "views"]);

      var injectedProps = getCustomProps ? getCustomProps(props) : {};
      var options = useOptions(props);

      var _useState = useState(props, options),
          pickerProps = _useState.pickerProps,
          inputProps = _useState.inputProps,
          wrapperProps = _useState.wrapperProps;

      return React.createElement(Wrapper, _extends({
        variant: variant,
        InputComponent: Input,
        DateInputProps: inputProps
      }, injectedProps, wrapperProps, other), React.createElement(Picker, _extends({}, pickerProps, {
        allowKeyboardControl: allowKeyboardControl,
        ampm: ampm,
        animateYearScrolling: animateYearScrolling,
        dateRangeIcon: dateRangeIcon,
        disableFuture: disableFuture,
        disablePast: disablePast,
        disableToolbar: disableToolbar,
        hideTabs: hideTabs,
        leftArrowButtonProps: leftArrowButtonProps,
        leftArrowIcon: leftArrowIcon,
        loadingIndicator: loadingIndicator,
        maxDate: maxDate,
        minDate: minDate,
        minutesStep: minutesStep,
        onMonthChange: onMonthChange,
        onYearChange: onYearChange,
        openTo: openTo,
        orientation: orientation,
        renderDay: renderDay,
        rightArrowButtonProps: rightArrowButtonProps,
        rightArrowIcon: rightArrowIcon,
        shouldDisableDate: shouldDisableDate,
        strictCompareDates: strictCompareDates,
        timeIcon: timeIcon,
        ToolbarComponent: ToolbarComponent,
        views: views
      })));
    }

    return PickerWithState;
  }

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var defaultProps$1 = _objectSpread$5({}, datePickerDefaultProps, {
    openTo: 'date',
    views: ['year', 'date']
  });

  function useOptions(props) {
    var utils = useUtils();
    return {
      getDefaultFormat: function getDefaultFormat() {
        return getFormatByViews(props.views, utils);
      }
    };
  }

  var DatePicker = makePickerWithState({
    useOptions: useOptions,
    Input: PureDateInput,
    useState: usePickerState,
    DefaultToolbarComponent: DatePickerToolbar
  });
  var KeyboardDatePicker = makePickerWithState({
    useOptions: useOptions,
    Input: KeyboardDateInput,
    useState: useKeyboardPickerState,
    DefaultToolbarComponent: DatePickerToolbar
  });
  DatePicker.defaultProps = defaultProps$1;
  KeyboardDatePicker.defaultProps = defaultProps$1;

  var useStyles$d = styles$5.makeStyles({
    toolbarLandscape: {
      flexWrap: 'wrap'
    },
    toolbarAmpmLeftPadding: {
      paddingLeft: 50
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelAmpmLandscape: {
      marginTop: 'auto'
    },
    hourMinuteLabelReverse: {
      flexDirection: 'row-reverse'
    },
    ampmSelection: {
      marginLeft: 20,
      marginRight: -20,
      display: 'flex',
      flexDirection: 'column'
    },
    ampmLandscape: {
      margin: '4px 0 auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexBasis: '100%'
    },
    ampmSelectionWithSeconds: {
      marginLeft: 15,
      marginRight: 10
    },
    ampmLabel: {
      fontSize: 18
    }
  }, {
    name: 'MuiPickersTimePickerToolbar'
  });
  function useMeridiemMode(date, ampm, onChange) {
    var utils = useUtils();
    var meridiemMode = getMeridiem(date, utils);
    var handleMeridiemChange = React.useCallback(function (mode) {
      var timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils);
      onChange(timeWithMeridiem, false);
    }, [ampm, date, onChange, utils]);
    return {
      meridiemMode: meridiemMode,
      handleMeridiemChange: handleMeridiemChange
    };
  }
  var TimePickerToolbar = function TimePickerToolbar(_ref) {
    var date = _ref.date,
        views = _ref.views,
        ampm = _ref.ampm,
        openView = _ref.openView,
        onChange = _ref.onChange,
        isLandscape = _ref.isLandscape,
        setOpenView = _ref.setOpenView;
    var utils = useUtils();
    var theme = styles$5.useTheme();
    var classes = useStyles$d();

    var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
        meridiemMode = _useMeridiemMode.meridiemMode,
        handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

    var clockTypographyVariant = isLandscape ? 'h3' : 'h2';
    return React.createElement(PickerToolbar, {
      isLandscape: isLandscape,
      className: clsx(isLandscape ? classes.toolbarLandscape : ampm && classes.toolbarAmpmLeftPadding)
    }, React.createElement("div", {
      className: clsx(classes.hourMinuteLabel, ampm && isLandscape && classes.hourMinuteLabelAmpmLandscape, {
        rtl: classes.hourMinuteLabelReverse
      }[theme.direction])
    }, arrayIncludes(views, 'hours') && React.createElement(ToolbarButton$1, {
      variant: clockTypographyVariant,
      onClick: function onClick() {
        return setOpenView(ClockType$1.HOURS);
      },
      selected: openView === ClockType$1.HOURS,
      label: utils.getHourText(date, Boolean(ampm))
    }), arrayIncludes(views, ['hours', 'minutes']) && React.createElement(ToolbarText, {
      label: ":",
      variant: clockTypographyVariant,
      selected: false,
      className: classes.separator
    }), arrayIncludes(views, 'minutes') && React.createElement(ToolbarButton$1, {
      variant: clockTypographyVariant,
      onClick: function onClick() {
        return setOpenView(ClockType$1.MINUTES);
      },
      selected: openView === ClockType$1.MINUTES,
      label: utils.getMinuteText(date)
    }), arrayIncludes(views, ['minutes', 'seconds']) && React.createElement(ToolbarText, {
      variant: "h2",
      label: ":",
      selected: false,
      className: classes.separator
    }), arrayIncludes(views, 'seconds') && React.createElement(ToolbarButton$1, {
      variant: "h2",
      onClick: function onClick() {
        return setOpenView(ClockType$1.SECONDS);
      },
      selected: openView === ClockType$1.SECONDS,
      label: utils.getSecondText(date)
    })), ampm && React.createElement("div", {
      className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape, arrayIncludes(views, 'seconds') && classes.ampmSelectionWithSeconds)
    }, React.createElement(ToolbarButton$1, {
      disableRipple: true,
      variant: "subtitle1",
      selected: meridiemMode === 'am',
      typographyClassName: classes.ampmLabel,
      label: utils.getMeridiemText('am'),
      onClick: function onClick() {
        return handleMeridiemChange('am');
      }
    }), React.createElement(ToolbarButton$1, {
      disableRipple: true,
      variant: "subtitle1",
      selected: meridiemMode === 'pm',
      typographyClassName: classes.ampmLabel,
      label: utils.getMeridiemText('pm'),
      onClick: function onClick() {
        return handleMeridiemChange('pm');
      }
    })));
  };

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var defaultProps$2 = _objectSpread$6({}, timePickerDefaultProps, {
    openTo: 'hours',
    views: ['hours', 'minutes']
  });

  function useOptions$1(props) {
    var utils = useUtils();
    return {
      getDefaultFormat: function getDefaultFormat() {
        return pick12hOr24hFormat(props.format, props.ampm, {
          '12h': utils.time12hFormat,
          '24h': utils.time24hFormat
        });
      }
    };
  }

  var TimePicker = makePickerWithState({
    useOptions: useOptions$1,
    Input: PureDateInput,
    useState: usePickerState,
    DefaultToolbarComponent: TimePickerToolbar
  });
  var KeyboardTimePicker = makePickerWithState({
    useOptions: useOptions$1,
    Input: KeyboardDateInput,
    useState: useKeyboardPickerState,
    DefaultToolbarComponent: TimePickerToolbar,
    getCustomProps: function getCustomProps(props) {
      return {
        refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
      };
    }
  });
  TimePicker.defaultProps = defaultProps$2;
  KeyboardTimePicker.defaultProps = defaultProps$2;

  var TimeIcon = function TimeIcon(props) {
    return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
      d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), React__default.createElement("path", {
      d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
    }));
  };

  var DateRangeIcon = function DateRangeIcon(props) {
    return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
      d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  };

  var viewToTabIndex = function viewToTabIndex(openView) {
    if (openView === 'date' || openView === 'year') {
      return 'date';
    }

    return 'time';
  };

  var tabIndexToView = function tabIndexToView(tab) {
    if (tab === 'date') {
      return 'date';
    }

    return 'hours';
  };

  var useStyles$e = styles$5.makeStyles(function (theme) {
    // prettier-ignore
    var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
    return {
      tabs: {
        color: theme.palette.getContrastText(tabsBackground),
        backgroundColor: tabsBackground
      }
    };
  }, {
    name: 'MuiPickerDTTabs'
  });
  var DateTimePickerTabs = function DateTimePickerTabs(_ref) {
    var view = _ref.view,
        onChange = _ref.onChange,
        dateRangeIcon = _ref.dateRangeIcon,
        timeIcon = _ref.timeIcon;
    var classes = useStyles$e();
    var theme = styles$5.useTheme();
    var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

    var handleChange = function handleChange(e, value) {
      if (value !== viewToTabIndex(view)) {
        onChange(tabIndexToView(value));
      }
    };

    return React.createElement(Paper, null, React.createElement(Tabs, {
      variant: "fullWidth",
      value: viewToTabIndex(view),
      onChange: handleChange,
      className: classes.tabs,
      indicatorColor: indicatorColor
    }, React.createElement(Tab, {
      value: "date",
      icon: React.createElement(React.Fragment, null, dateRangeIcon)
    }), React.createElement(Tab, {
      value: "time",
      icon: React.createElement(React.Fragment, null, timeIcon)
    })));
  };
  DateTimePickerTabs.defaultProps = {
    dateRangeIcon: React.createElement(DateRangeIcon, null),
    timeIcon: React.createElement(TimeIcon, null)
  };

  var useStyles$f = styles$5.makeStyles(function (_) {
    return {
      toolbar: {
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-around'
      },
      separator: {
        margin: '0 4px 0 2px',
        cursor: 'default'
      }
    };
  }, {
    name: 'MuiPickerDTToolbar'
  });
  var DateTimePickerToolbar = function DateTimePickerToolbar(_ref) {
    var date = _ref.date,
        openView = _ref.openView,
        setOpenView = _ref.setOpenView,
        ampm = _ref.ampm,
        hideTabs = _ref.hideTabs,
        dateRangeIcon = _ref.dateRangeIcon,
        timeIcon = _ref.timeIcon,
        onChange = _ref.onChange;
    var utils = useUtils();
    var classes = useStyles$f();
    var showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

    var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
        meridiemMode = _useMeridiemMode.meridiemMode,
        handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

    var theme = styles$5.useTheme();
    var rtl = theme.direction === 'rtl';
    return React.createElement(React.Fragment, null, React.createElement(PickerToolbar, {
      isLandscape: false,
      className: classes.toolbar
    }, React.createElement(Grid, {
      container: true,
      justify: "center",
      wrap: "nowrap"
    }, React.createElement(Grid, {
      item: true,
      container: true,
      xs: 5,
      justify: "flex-start",
      direction: "column"
    }, React.createElement("div", null, React.createElement(ToolbarButton$1, {
      variant: "subtitle1",
      onClick: function onClick() {
        return setOpenView('year');
      },
      selected: openView === 'year',
      label: utils.getYearText(date)
    })), React.createElement("div", null, React.createElement(ToolbarButton$1, {
      variant: "h4",
      onClick: function onClick() {
        return setOpenView('date');
      },
      selected: openView === 'date',
      label: utils.getDateTimePickerHeaderText(date)
    }))), React.createElement(Grid, {
      item: true,
      container: true,
      xs: 6,
      justify: "center",
      alignItems: "flex-end",
      direction: rtl ? 'row-reverse' : 'row'
    }, React.createElement(ToolbarButton$1, {
      variant: "h3",
      onClick: function onClick() {
        return setOpenView('hours');
      },
      selected: openView === 'hours',
      label: utils.getHourText(date, ampm)
    }), React.createElement(ToolbarText, {
      variant: "h3",
      label: ":",
      className: classes.separator
    }), React.createElement(ToolbarButton$1, {
      variant: "h3",
      onClick: function onClick() {
        return setOpenView('minutes');
      },
      selected: openView === 'minutes',
      label: utils.getMinuteText(date)
    })), ampm && React.createElement(Grid, {
      item: true,
      container: true,
      xs: 1,
      direction: "column",
      justify: "flex-end"
    }, React.createElement(ToolbarButton$1, {
      variant: "subtitle1",
      selected: meridiemMode === 'am',
      label: utils.getMeridiemText('am'),
      onClick: function onClick() {
        return handleMeridiemChange('am');
      }
    }), React.createElement(ToolbarButton$1, {
      variant: "subtitle1",
      selected: meridiemMode === 'pm',
      label: utils.getMeridiemText('pm'),
      onClick: function onClick() {
        return handleMeridiemChange('pm');
      }
    })))), showTabs && React.createElement(DateTimePickerTabs, {
      dateRangeIcon: dateRangeIcon,
      timeIcon: timeIcon,
      view: openView,
      onChange: setOpenView
    }));
  };

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var defaultProps$3 = _objectSpread$7({}, dateTimePickerDefaultProps, {
    wider: true,
    orientation: 'portrait',
    openTo: 'date',
    views: ['year', 'date', 'hours', 'minutes']
  });

  function useOptions$2(props) {
    var utils = useUtils();

    if (props.orientation !== 'portrait') {
      throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
    }

    return {
      getDefaultFormat: function getDefaultFormat() {
        return pick12hOr24hFormat(props.format, props.ampm, {
          '12h': utils.dateTime12hFormat,
          '24h': utils.dateTime24hFormat
        });
      }
    };
  }

  var DateTimePicker = makePickerWithState({
    useOptions: useOptions$2,
    Input: PureDateInput,
    useState: usePickerState,
    DefaultToolbarComponent: DateTimePickerToolbar
  });
  var KeyboardDateTimePicker = makePickerWithState({
    useOptions: useOptions$2,
    Input: KeyboardDateInput,
    useState: useKeyboardPickerState,
    DefaultToolbarComponent: DateTimePickerToolbar,
    getCustomProps: function getCustomProps(props) {
      return {
        refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
      };
    }
  });
  DateTimePicker.defaultProps = defaultProps$3;
  KeyboardDateTimePicker.defaultProps = defaultProps$3;

  function useStaticState(_ref) {
    var value = _ref.value,
        _ref$autoOk = _ref.autoOk,
        autoOk = _ref$autoOk === void 0 ? true : _ref$autoOk,
        onChange = _ref.onChange,
        defaultFormat = _ref.defaultFormat;

    var _usePickerState = usePickerState({
      value: value,
      onChange: onChange,
      autoOk: autoOk
    }, {
      // just a random format, mostly always not needed for users
      getDefaultFormat: function getDefaultFormat() {
        return defaultFormat || 'MM/dd/yyyy';
      }
    }),
        pickerProps = _usePickerState.pickerProps,
        wrapperProps = _usePickerState.wrapperProps,
        inputProps = _usePickerState.inputProps;

    return {
      pickerProps: pickerProps,
      wrapperProps: wrapperProps,
      inputProps: inputProps
    };
  }

  exports.Calendar = Calendar$1;
  exports.Clock = Clock$1;
  exports.ClockView = ClockView;
  exports.DatePicker = DatePicker;
  exports.DateTimePicker = DateTimePicker;
  exports.Day = Day;
  exports.KeyboardDatePicker = KeyboardDatePicker;
  exports.KeyboardDateTimePicker = KeyboardDateTimePicker;
  exports.KeyboardTimePicker = KeyboardTimePicker;
  exports.MuiPickersContext = MuiPickersContext;
  exports.MuiPickersUtilsProvider = MuiPickersUtilsProvider;
  exports.Picker = Picker;
  exports.TimePicker = TimePicker;
  exports.TimePickerView = ClockView$1;
  exports.makePickerWithState = makePickerWithState;
  exports.useKeyboardPickerState = useKeyboardPickerState;
  exports.usePickerState = usePickerState;
  exports.useStaticState = useStaticState;
  exports.useUtils = useUtils;
  exports.validate = validate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
