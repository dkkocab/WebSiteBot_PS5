"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('object', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.object)())).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"object" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"object" test')).to.be.instanceOf(Error);
  }

  it('passes on null/undefined', function () {
    var validator = (0, _.object)();
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
  });
  it('fails on null/undefined when required', function () {
    var validator = (0, _.object)().isRequired;
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
  });
  it('fails on arrays and functions', function () {
    var validator = (0, _.object)();
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: []
    }), 'foo');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: []
    }), 'foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: function foo() {}
    }), 'foo');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: function foo() {}
    }), 'foo');
  });
  it('fails on any other value', function () {
    assertFails((0, _.object)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: false
    }), 'foo');
    assertFails((0, _.object)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: true
    }), 'foo');
    assertFails((0, _.object)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: NaN
    }), 'foo');
    assertFails((0, _.object)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: ""
    }), 'foo');
    assertFails((0, _.object)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "foo"
    }), 'foo');
  });
  it('passes on non-array non-function objects', function () {
    var validator = (0, _.object)();
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {}
    }), 'foo');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {}
    }), 'foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: /a/g
    }), 'foo');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: /a/g
    }), 'foo');
  });
});
//# sourceMappingURL=object.js.map