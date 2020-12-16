"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('valuesOf', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.valuesOf)(function () {}))).to.equal('function');
  });
  it('throws when not given a function', function () {
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)('');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.valuesOf)(true);
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"valuesOf" passing test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"valuesOf" failing test')).to.be.instanceOf(Error);
  }

  it('passes on null/undefined', function () {
    var validator = (0, _.valuesOf)(function () {});
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
  });
  it('fails on null/undefined when required', function () {
    var validator = (0, _.valuesOf)(function () {}).isRequired;
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
  });
  it('passes when the validator passes on all values', function () {
    var validator = (0, _.valuesOf)(_propTypes.number);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: NaN,
        c: Infinity,
        d: -0
      }
    }), 'foo');
  });
  it('behaves on null values', function () {
    assertPasses((0, _.valuesOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: null
      }
    }), 'foo');
    assertPasses((0, _.valuesOf)(_propTypes.number).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: null
      }
    }), 'foo');
    assertFails((0, _.valuesOf)(_propTypes.number.isRequired), /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: null
      }
    }), 'foo');
    assertFails((0, _.valuesOf)(_propTypes.number.isRequired).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: null
      }
    }), 'foo');
  });
  it('fails when any value fails', function () {
    var validator = (0, _.valuesOf)(_propTypes.number);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: 'not a number'
      }
    }), 'foo');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {
        a: 3,
        b: 'not a number'
      }
    }), 'foo');
  });
  it('passes on non-nullary primitives', function () {
    var validator = (0, _.valuesOf)(_propTypes.number.isRequired);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 3
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: NaN
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ""
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "foo"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: 3
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: NaN
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: ""
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "foo"
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
  });
  it('passes on functions and arrays', function () {
    var validator = (0, _.valuesOf)(_propTypes.number.isRequired);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: function a() {}
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: function a() {}
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
  });
});
//# sourceMappingURL=valuesOf.js.map