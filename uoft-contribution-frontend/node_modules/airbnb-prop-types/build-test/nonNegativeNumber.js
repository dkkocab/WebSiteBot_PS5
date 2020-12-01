"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('nonNegativeNumber', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.nonNegativeNumber)())).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, 'nonNegativeNumber test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, 'nonNegativeNumber test')).to.be.instanceOf(Error);
  }

  it('passes on nil values', function () {
    assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: undefined
    }), 'a');
    assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: null
    }), 'a');
  });
  it('passes on zero', function () {
    return assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: 0
    }), 'a');
  });
  it('passes on positive numbers', function () {
    var validator = (0, _.nonNegativeNumber)();
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 42
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: 42
    }), 'a');
  });
  it('fails on negative numbers', function () {
    var validator = (0, _.nonNegativeNumber)();
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: -42
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: -42
    }), 'a');
  });
  it('passes on positive non-integers', function () {
    assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: 1.5
    }), 'a');
    assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: 1.999999
    }), 'a');
    assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: (0.1 + 0.2) * 10
    }), 'a');
  });
  it('fails on negative non-integers', function () {
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1.5
    }), 'a');
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1.999999
    }), 'a');
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: -(0.1 + 0.2) * 10
    }), 'a');
  });
  it('fails on number edge cases', function () {
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: -Infinity
    }), 'a');
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: Infinity
    }), 'a');
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: NaN
    }), 'a');
  });
  it('fails on negative zero', function () {
    assertFails((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", {
      a: -0
    }), 'a');
  });
  describe('isRequired', function () {
    it('passes when not required', function () {
      return assertPasses((0, _.nonNegativeNumber)(), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    });
    it('fails when required', function () {
      return assertFails((0, _.nonNegativeNumber)().isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    });
  });
});
//# sourceMappingURL=nonNegativeNumber.js.map