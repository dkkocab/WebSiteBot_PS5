"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('booleanSome', function () {
  it('throws when given non-strings', function () {
    (0, _chai.expect)(function () {
      return (0, _.booleanSome)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.booleanSome)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.booleanSome)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.booleanSome)([]);
    }).to["throw"](TypeError);
  });
  it('throws when given 0 props', function () {
    (0, _chai.expect)(function () {
      return (0, _.booleanSome)();
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.booleanSome)('a', 'b'))).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.be.instanceOf(Error);
  }

  it('passes with all true', function () {
    var validator = (0, _.booleanSome)('a', 'b');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: true
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: true
    }), 'b');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: true
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: true
    }), 'b');
  });
  it('behaves with one true', function () {
    var validator = (0, _.booleanSome)('a', 'b');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'b');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      b: true
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      b: true
    }), 'b');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'b');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      b: true
    }), 'b');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      b: true
    }), 'a');
  });
  it('passes with one false', function () {
    var validator = (0, _.booleanSome)('a', 'b');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'b');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      b: false
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      b: false
    }), 'b');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false,
      b: true
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false,
      b: true
    }), 'b');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: false
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true,
      b: false
    }), 'b');
  });
  it('fails with all false', function () {
    var validator = (0, _.booleanSome)('a', 'b');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false,
      b: false
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false,
      b: false
    }), 'b');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false,
      b: false
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      b: false
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false,
      b: false
    }), 'b');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'b');
  });
  it('passes when one of the boolean props is null/undefined', function () {
    var prop1 = 'foo';
    var prop2 = 'bar';
    var validator = (0, _.booleanSome)(prop1, prop2);
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
    var validator = (0, _.booleanSome)(prop1, prop2).isRequired;
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
//# sourceMappingURL=booleanSome.js.map