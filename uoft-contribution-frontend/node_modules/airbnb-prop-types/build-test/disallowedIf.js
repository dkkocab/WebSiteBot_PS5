"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('disallowedIf', function () {
  it('throws when not given proper arguments', function () {
    (0, _chai.expect)(function () {
      return (0, _.disallowedIf)(null, 'other', _propTypes.any);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.disallowedIf)(_propTypes.any, 'other');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.disallowedIf)(_propTypes.any, null, _propTypes.any);
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.disallowedIf)(_propTypes.any, 'other', _propTypes.any))).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.be.instanceOf(Error);
  }

  it('passes when the other prop is null or undefined', function () {
    assertPasses((0, _.disallowedIf)(_propTypes.bool, 'b', _propTypes.any), /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
  });
  it('passes when the other prop does not match the specified type', function () {
    assertPasses((0, _.disallowedIf)(_propTypes.bool, 'b', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: "string"
    }), 'a');
  });
  it('passes when the other prop matches the specified type and the prop is not provided', function () {
    assertPasses((0, _.disallowedIf)(_propTypes.bool, 'b', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
      b: "string"
    }), 'a');
  });
  it('fails when the other prop matches the specified type', function () {
    assertFails((0, _.disallowedIf)(_propTypes.bool, 'b', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: false
    }), 'a');
  });
  it('fails when the provided propType fails', function () {
    assertFails((0, _.disallowedIf)(_propTypes.bool, 'b', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
      a: "string",
      b: "other string"
    }), 'a');
  });
  it('fails when required and not provided', function () {
    assertFails((0, _.disallowedIf)(_propTypes.bool, 'b', _propTypes.bool).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      b: "other string"
    }), 'a');
  });
});
//# sourceMappingURL=disallowedIf.js.map