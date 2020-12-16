"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('numericString', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.numericString)())).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"numericString" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"numericString" test')).to.be.instanceOf(Error);
  }

  it('behaves when absent', function () {
    var validator = (0, _.numericString)();
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  it('fails when not a string', function () {
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: 42
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: {}
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: function a() {}
    }), 'a');
  });
  it('passes on the zeroes', function () {
    var validator = (0, _.numericString)();
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "0"
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "0"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "-0"
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "-0"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "+0"
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "+0"
    }), 'a');
  });
  it('passes when a numeric string', function () {
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "123"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "-123"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "+123"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "123.456"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "-123.456"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "+123.456"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "0.45"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "-0.45"
    }), 'a');
    assertPasses((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "+0.45"
    }), 'a');
  });
  it('fails when not a numeric string', function () {
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "123a"
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "123.456.789"
    }), 'a');
    assertFails((0, _.numericString)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: "1,234.567"
    }), 'a');
  });
  it('fails on edge cases', function () {
    var validator = (0, _.numericString)();
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "NaN"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "-NaN"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "+NaN"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "Infinity"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "-Infinity"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "+Infinity"
    }), 'a');
  });
  it('fails on edge cases when required', function () {
    var validator = (0, _.numericString)().isRequired;
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "NaN"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "-NaN"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "+NaN"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "Infinity"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "-Infinity"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "+Infinity"
    }), 'a');
  });
});
//# sourceMappingURL=numericString.js.map