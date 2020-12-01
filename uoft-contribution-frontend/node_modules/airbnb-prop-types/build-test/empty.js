"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _objectInspect = _interopRequireDefault(require("object-inspect"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('empty', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.empty)())).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    var e = (0, _callValidator["default"])(validator, element, propName, '"empty" test');
    (0, _chai.expect)(e && e.message).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"empty" test')).to.be.instanceOf(Error);
  }

  var emptyRenderValues = [null, undefined, '', false, []];
  var nonEmptyRenderValues = [true, 'foo', 0, Infinity, {}];
  emptyRenderValues.forEach(function (emptyValue) {
    it("passes on empty render values: ".concat((0, _objectInspect["default"])(emptyValue)), function () {
      var validator = (0, _.empty)();
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: emptyValue
      }), 'foo');

      if (typeof emptyValue !== 'undefined') {
        assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
          foo: emptyValue
        }), 'foo');
      }
    });
    it("passes on arrays of empty render values: ".concat((0, _objectInspect["default"])(emptyValue)), function () {
      var validator = (0, _.empty)();
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: [emptyValue]
      }), 'foo');
      assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: [emptyValue]
      }), 'foo');
    });
  });
  nonEmptyRenderValues.forEach(function (nonEmptyValue) {
    it("fails on non-empty render values: ".concat((0, _objectInspect["default"])(nonEmptyValue)), function () {
      var validator = (0, _.empty)();
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: nonEmptyValue
      }), 'foo');
      assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: nonEmptyValue
      }), 'foo');
    });
    it("fails on arrays of non-empty render values: ".concat((0, _objectInspect["default"])(nonEmptyValue)), function () {
      var validator = (0, _.empty)();
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: [nonEmptyValue]
      }), 'foo');
      assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: [nonEmptyValue]
      }), 'foo');
    });
  });
});
//# sourceMappingURL=empty.js.map