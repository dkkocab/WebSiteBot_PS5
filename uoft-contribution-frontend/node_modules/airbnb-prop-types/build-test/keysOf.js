"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('keysOf', function () {
  it('throws when not given a valid propType', function () {
    (0, _chai.expect)(function () {
      return (0, _.keysOf)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.keysOf)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.keysOf)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.keysOf)([]);
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.keysOf)(_propTypes.any))).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"keysOf" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"keysOf" test')).to.be.instanceOf(Error);
  }

  it('passes with an object with no keys', function () {
    assertPasses((0, _.keysOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", {
      a: {}
    }), 'a');
  });
  it('passes when keys match the prop type', function () {
    assertPasses((0, _.keysOf)((0, _propTypes.oneOf)(['foo', 'bar'])), /*#__PURE__*/_react["default"].createElement("div", {
      a: {
        foo: 1,
        bar: 'qoob'
      }
    }), 'a');
  });
  it('fails when keys do not match the prop type', function () {
    assertFails((0, _.keysOf)((0, _propTypes.oneOf)(['foo', 'bar'])), /*#__PURE__*/_react["default"].createElement("div", {
      a: {
        foo: 1,
        not_validated: 'qoob'
      }
    }), 'a');
  });
  it('passes when the prop is not defined', function () {
    assertPasses((0, _.keysOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  it('is required with .isRequired', function () {
    assertFails((0, _.keysOf)(_propTypes.number).isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  it('still passes with .isRequired if props are valid', function () {
    assertPasses((0, _.keysOf)((0, _propTypes.oneOf)(['foo', 'bar'])).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: {
        foo: 1,
        bar: 'qoob'
      }
    }), 'a');
  });
});
//# sourceMappingURL=keysOf.js.map