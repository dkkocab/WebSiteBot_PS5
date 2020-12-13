"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('mutuallyExclusiveTrueProps', function () {
  it('throws when given non-strings', function () {
    (0, _chai.expect)(function () {
      return (0, _.mutuallyExclusiveTrueProps)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.mutuallyExclusiveTrueProps)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.mutuallyExclusiveTrueProps)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.mutuallyExclusiveTrueProps)([]);
    }).to["throw"](TypeError);
  });
  it('throws when given 0 props', function () {
    (0, _chai.expect)(function () {
      return (0, _.mutuallyExclusiveTrueProps)();
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.mutuallyExclusiveTrueProps)('a', 'b'))).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.be.instanceOf(Error);
  }

  it('passes with one mutually exclusive prop', function () {
    assertPasses((0, _.mutuallyExclusiveTrueProps)('b'), /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertPasses((0, _.mutuallyExclusiveTrueProps)('a'), /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'b');
  });
  it('passes when mutually exclusive props are not both provided', function () {
    var prop1 = 'foo';
    var prop2 = 'bar';
    var validator = (0, _.mutuallyExclusiveTrueProps)(prop1, prop2);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop1, true))), prop1);
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop1, true))), prop1);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop2, true))), prop2);
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop2, true))), prop2);
  });
  it('fails when the provided propType fails', function () {
    var prop1 = 'foo';
    var prop2 = 'bar';
    var validator = (0, _.mutuallyExclusiveTrueProps)(prop1, prop2);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop1, 1))), prop1);
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop1, 1))), prop1);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop2, 2))), prop2);
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, _defineProperty({}, prop2, 2))), prop2);
  });
  it('fails when mutually exclusive props are provided', function () {
    var _ref9, _ref10, _ref11, _ref12;

    var prop1 = 'foo';
    var prop2 = 'bar';
    var validator = (0, _.mutuallyExclusiveTrueProps)(prop1, prop2);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, (_ref9 = {}, _defineProperty(_ref9, prop1, true), _defineProperty(_ref9, prop2, true), _ref9))), prop1);
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, (_ref10 = {}, _defineProperty(_ref10, prop1, true), _defineProperty(_ref10, prop2, true), _ref10))), prop1);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, (_ref11 = {}, _defineProperty(_ref11, prop1, true), _defineProperty(_ref11, prop2, true), _ref11))), prop2);
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", _extends({
      a: 1
    }, (_ref12 = {}, _defineProperty(_ref12, prop1, true), _defineProperty(_ref12, prop2, true), _ref12))), prop2);
  });
  it('passes when one of the exclusive props is null/undefined', function () {
    var prop1 = 'foo';
    var prop2 = 'bar';
    var validator = (0, _.mutuallyExclusiveTrueProps)(prop1, prop2);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: true,
      bar: null
    }), prop1);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: true,
      bar: null
    }), prop2);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      bar: true,
      foo: null
    }), prop1);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      bar: true,
      foo: null
    }), prop2);
  });
  it('fails when required, and one of the exclusive props is null/undefined', function () {
    var prop1 = 'foo';
    var prop2 = 'bar';
    var validator = (0, _.mutuallyExclusiveTrueProps)(prop1, prop2).isRequired;
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: true,
      bar: null
    }), prop2);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      bar: true,
      foo: null
    }), prop1);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: true,
      bar: undefined
    }), prop2);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      bar: true,
      foo: undefined
    }), prop1);
  });
});
//# sourceMappingURL=mutuallyExclusiveTrueProps.js.map