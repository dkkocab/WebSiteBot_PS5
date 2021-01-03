"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('predicate', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.predicate)(function () {}))).to.equal('function');
  });
  it('throws when provided a non-function predicate', function () {
    (0, _chai.expect)(function () {
      return (0, _.predicate)();
    }).to["throw"](TypeError);
  });
  it('throws when provided a non-string message', function () {
    (0, _chai.expect)(function () {
      return (0, _.predicate)(function () {}, null);
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"predicate" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"predicate" test')).to.be.instanceOf(Error);
  }

  it('passes on null/undefined', function () {
    var validator = (0, _.predicate)(function () {
      return false;
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
  });
  it('fails on null/undefined when required', function () {
    var validator = (0, _.predicate)(function () {
      return false;
    }).isRequired;
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
  });
  var values = [undefined, null, 0, -0, 42, Infinity, -Infinity, '', 'foo', true, false, [], {}, function () {}];
  it('fails when the predicate returns false', function () {
    var validator = (0, _.predicate)(function () {
      return false;
    });
    values.forEach(function (x) {
      if (x != null) {
        assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
          foo: x
        }), 'foo');
      }

      assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: x
      }), 'foo');
    });
  });
  it('passes when the predicate returns true', function () {
    var validator = (0, _.predicate)(function () {
      return true;
    });
    values.forEach(function (x) {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: x
      }), 'foo');
      assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: x
      }), 'foo');
    });
  });
  it('passes based on the predicate', function () {
    var validator = (0, _.predicate)(function (x) {
      return x === 2;
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: 2
    }), 'foo');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: 2
    }), 'foo');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: 3
    }), 'foo');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: 3
    }), 'foo');
  });
});
//# sourceMappingURL=predicate.js.map