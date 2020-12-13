"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('explicitNull', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.explicitNull)())).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"explicitNull" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"explicitNull" test')).to.be.instanceOf(Error);
  }

  it('passes on null/undefined/missing', function () {
    var validator = (0, _.explicitNull)();
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: null
    }), 'foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'foo');
  });
  it('fails on undefined/missing when required', function () {
    var validator = (0, _.explicitNull)();
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: undefined
    }), 'foo');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'foo');
  });
  it('fails on any other value', function () {
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: false
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: NaN
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: []
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: {}
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: ""
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "foo"
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: function foo() {}
    }), 'foo');
    assertFails((0, _.explicitNull)(), /*#__PURE__*/_react["default"].createElement("div", {
      foo: /a/g
    }), 'foo');
  });
  it('fails on any other value when required', function () {
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: false
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: NaN
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: []
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: {}
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: ""
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: "foo"
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: function foo() {}
    }), 'foo');
    assertFails((0, _.explicitNull)().isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: /a/g
    }), 'foo');
  });
});
//# sourceMappingURL=explicitNull.js.map