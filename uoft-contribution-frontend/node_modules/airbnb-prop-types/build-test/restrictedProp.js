"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('restrictedProp', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.restrictedProp)())).to.equal('function');
  });

  function assertPasses(validator, element, propName, location) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"restrictedProp" test', location)).to.equal(null);
  }

  function assertFails(validator, element, propName, location) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"restrictedProp" test', location)).to.be.instanceOf(Error);
  }

  it('passes on null/undefined', function () {
    assertPasses((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo', 'prop');
    assertPasses((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo', 'prop');
  });
  it('fails on any other value', function () {
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: false
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: true
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: NaN
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: []
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: {}
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: ""
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "foo"
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: function foo() {}
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: /a/g
    }), 'foo', 'prop');
  });
  it('allows for custom error message', function () {
    assertPasses((0, _.restrictedProp)(function () {
      return new TypeError('Custom Error');
    }), /*#__PURE__*/_react["default"].createElement("div", null), 'foo', 'prop');
    assertPasses((0, _.restrictedProp)(function () {
      return new TypeError('Custom Error');
    }), /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo', 'prop');
    assertPasses((0, _.restrictedProp)(function () {
      return new TypeError('Custom Error');
    }), /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo', 'prop');
    assertFails((0, _.restrictedProp)(function () {
      return new TypeError('Custom Error');
    }), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "foo"
    }), 'foo', 'prop');

    var messageFunction = function messageFunction(props, propName, componentName, location) {
      return "[custom message] The ".concat(propName, " ").concat(location, " on ").concat(componentName, " is not allowed.");
    };

    (0, _chai.expect)((0, _callValidator["default"])((0, _.restrictedProp)(messageFunction), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "foo"
    }), 'foo', '"restrictedProp" test', 'prop')).to.exist.and.be["instanceof"](Error).and.have.property('message', '[custom message] The foo prop on "restrictedProp" test is not allowed.');
  });
});
//# sourceMappingURL=restrictedProp.js.map