"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('uniqueArray', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.uniqueArray)())).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"uniqueArray" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"uniqueArray" test')).to.be.instanceOf(Error);
  }

  it('requires an array', function () {
    return assertFails((0, _.uniqueArray)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "bar"
    }), 'foo');
  });
  it('is not required by default', function () {
    return assertPasses((0, _.uniqueArray)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "bar"
    }), 'missing');
  });
  it('is required with .isRequired', function () {
    return assertFails((0, _.uniqueArray)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: "bar"
    }), 'missing');
  });
  it('enforces uniqueness', function () {
    assertFails((0, _.uniqueArray)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [3, 1, 2, 3, 4]
    }), 'foo');
    assertPasses((0, _.uniqueArray)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [1, 2, 3, 4]
    }), 'foo');
  });
  it('enforces uniqueness of objects too', function () {
    var arr = [1];
    assertFails((0, _.uniqueArray)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [[1], arr, arr]
    }), 'foo');
    assertPasses((0, _.uniqueArray)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [[1], arr, [1]]
    }), 'foo');
  });
});
//# sourceMappingURL=uniqueArray.js.map