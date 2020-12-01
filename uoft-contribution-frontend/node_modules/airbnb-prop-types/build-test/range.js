"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('range', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.range)(0, 1))).to.equal('function');
  });
  it('throws with invalid lengths', function () {
    (0, _chai.expect)(function () {
      return (0, _.range)(NaN, 2);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(2, NaN);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(Infinity, 2);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(2, Infinity);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(-Infinity, 2);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(2, -Infinity);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(0.5, 2);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.range)(2, 0.5);
    }).to["throw"](RangeError);
  });
  it('throws when the min/max are the same', function () {
    (0, _chai.expect)(function () {
      return (0, _.range)(2, 2);
    }).to["throw"](RangeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"range" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"range" test')).to.be.instanceOf(Error);
  }

  it('passes when inside the range', function () {
    assertPasses((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertPasses((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: -0
    }), 'a');
    assertPasses((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: 0
    }), 'a');
    assertPasses((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
  });
  it('fails when outside the range', function () {
    assertFails((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: 2
    }), 'a');
    assertFails((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: -2
    }), 'a');
    assertFails((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: 1.5
    }), 'a');
    assertFails((0, _.range)(-1, 2), /*#__PURE__*/_react["default"].createElement("div", {
      a: -0.5
    }), 'a');
  });
});
//# sourceMappingURL=range.js.map