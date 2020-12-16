"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = predicate;

var _wrapValidator = _interopRequireDefault(require("./helpers/wrapValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function predicate(fn) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof fn !== 'function') {
    throw new TypeError('`fn` must be a function');
  }

  if (typeof message !== 'string') {
    throw new TypeError('`message`, if provided, must be a string');
  }

  function requiredValidator(props, propName, componentName) {
    var result = fn(props[propName]);

    if (result) {
      return null;
    }

    return new TypeError("`".concat(componentName, "` requires that `").concat(propName, "` pass a predicate function").concat(message ? ": ".concat(message) : '', "."));
  }

  function validator(props, propName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    return requiredValidator.apply(void 0, [props, propName].concat(rest));
  }

  validator.isRequired = requiredValidator;
  return (0, _wrapValidator["default"])(validator, 'predicate', fn);
}
//# sourceMappingURL=predicate.js.map