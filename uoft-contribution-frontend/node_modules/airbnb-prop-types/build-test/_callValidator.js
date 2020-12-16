"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = callValidator;

var _ReactPropTypesSecret = _interopRequireDefault(require("prop-types/lib/ReactPropTypesSecret"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function callValidator(validator, _ref) {
  var props = _ref.props;
  var propName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var componentName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var location = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var propFullName = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  return validator(props, propName, componentName, location, propFullName, _ReactPropTypesSecret["default"]);
}
//# sourceMappingURL=_callValidator.js.map