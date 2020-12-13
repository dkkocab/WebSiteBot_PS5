"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('shape', function () {
  it('is a function', function () {
    (0, _chai.expect)(_typeof(_.shape)).to.equal('function');
  });
  describe('errors', function () {
    it('throws if not given a shape object', function () {
      (0, _chai.expect)(function () {
        return (0, _.shape)();
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.shape)(undefined);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.shape)(null);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.shape)([]);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.shape)('');
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.shape)(42);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.shape)(NaN);
      }).to["throw"](TypeError);
    });
  });
  describe('validator', function () {
    it('returns a function', function () {
      (0, _chai.expect)(_typeof((0, _.shape)({}))).to.equal('function');
    });

    function assertPasses(validator, element, propName) {
      (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"shape" test')).to.equal(null);
    }

    function assertFails(validator, element, propName) {
      (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"shape" test')).to.be.instanceOf(Error);
    }

    it('behaves when nullary', function () {
      var validator = (0, _.shape)({
        toFixed: _propTypes.func.isRequired
      });
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
      assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
    });
    it('enforces the provided type', function () {
      assertPasses((0, _.shape)({
        toFixed: _propTypes.func.isRequired
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: 3
      }), 'foo');
      assertFails((0, _.shape)({
        missing: _propTypes.bool.isRequired
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: "3"
      }), 'foo');
    });
    it('enforces the provided shape', function () {
      assertPasses((0, _.shape)({
        length: (0, _propTypes.oneOf)([2])
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
      assertFails((0, _.shape)({
        length: (0, _propTypes.oneOf)([2]),
        missing: _propTypes.number.isRequired
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
      assertFails((0, _.shape)({
        length: (0, _propTypes.oneOf)([1])
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
    });
    it('skips falsy shape keys', function () {
      assertPasses((0, _.shape)({
        toFixed: _propTypes.func.isRequired,
        missing: null,
        nope: false
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: 3
      }), 'foo');
    });
  });
});
//# sourceMappingURL=shape.js.map