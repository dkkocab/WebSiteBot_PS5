"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('stringStartsWith', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.stringStartsWith)(' '))).to.equal('function');
  });
  it('throws when given a non-string', function () {
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)(true);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)(false);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)([]);
    }).to["throw"](TypeError);
  });
  it('throws when given an empty string', function () {
    (0, _chai.expect)(function () {
      return (0, _.stringStartsWith)('');
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"stringStartsWith" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"stringStartsWith" test')).to.be.instanceOf(Error);
  }

  it('behaves when absent', function () {
    var validator = (0, _.stringStartsWith)('foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  it('fails when not a string', function () {
    var validator = (0, _.stringStartsWith)('foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 42
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: {}
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: function a() {}
    }), 'a');
  });
  it('passes when the string starts with the requested substring', function () {
    var validator = (0, _.stringStartsWith)('foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "food"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "foobar"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "foo bar"
    }), 'a');
  });
  it('fails when the string does not start with the requested substring', function () {
    var validator = (0, _.stringStartsWith)('foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "Food"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "Foobar"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "bar baz"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "fo"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "Food"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "Foobar"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "bar baz"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "fo"
    }), 'a');
  });
  it('fails when the string matches the requested substring', function () {
    var validator = (0, _.stringStartsWith)('foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "foo"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "foo"
    }), 'a');
  });
});
//# sourceMappingURL=stringStartsWith.js.map