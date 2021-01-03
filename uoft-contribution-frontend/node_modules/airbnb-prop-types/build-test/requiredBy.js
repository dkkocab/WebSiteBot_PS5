"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function assertPasses(validator, element, propName) {
  (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"requiredBy" test')).to.equal(null);
}

function assertFails(validator, element, propName) {
  (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"requiredBy" test')).to.be.instanceOf(Error);
}

describe('requiredBy propTypes', function () {
  describe('passed prop name into requiredBy exists', function () {
    it('passes when no props are present', function () {
      assertPasses((0, _.requiredBy)('bar', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
        bar: null,
        foo: null
      }), 'foo');
    });
    it('passes when the prop that the requiredBy prop needs is passed in', function () {
      assertPasses((0, _.requiredBy)('bar', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: true
      }), 'foo');
      assertPasses((0, _.requiredBy)('bar', _propTypes.number, 42), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: 3
      }), 'foo');
      assertPasses((0, _.requiredBy)('bar', _propTypes.number, NaN), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: 42
      }), 'foo');
    });
    it('fails when the prop the requiredBy prop needs matches the defaultValue', function () {
      assertFails((0, _.requiredBy)('bar', _propTypes.number, 42), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: 42
      }), 'foo');
      assertFails((0, _.requiredBy)('bar', _propTypes.number, 0), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: 0
      }), 'foo');
      assertFails((0, _.requiredBy)('bar', _propTypes.number, NaN), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: NaN
      }), 'foo');
    });
    it('fails when the prop the requiredBy prop needs has the wrong prop type', function () {
      assertFails((0, _.requiredBy)('bar', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true,
        foo: "wrong"
      }), 'foo');
    });
    it('fails when the prop the requiredBy prop needs does not exist', function () {
      assertFails((0, _.requiredBy)('bar', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
        bar: true
      }), 'foo');
    });
  });
  describe('passed prop name into requiredBy does not exist', function () {
    it('passes when the prop the required prop needs is passed in', function () {
      assertPasses((0, _.requiredBy)('bar', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
        foo: true
      }), 'foo');
    });
    it('passes when the prop the required prop needs does not exist', function () {
      assertPasses((0, _.requiredBy)('bar', _propTypes.bool), /*#__PURE__*/_react["default"].createElement("div", {
        foo: true
      }), 'foo');
    });
  });
  describe('.isRequired', function () {
    it('is required when the requiredBy prop is present', function () {
      var validator = (0, _.requiredBy)('bar', _propTypes.bool).isRequired;
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        bar: true
      }), 'foo');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: true,
        bar: true
      }), 'foo');
    });
    it('is required when the requiredBy prop is absent', function () {
      var validator = (0, _.requiredBy)('bar', _propTypes.bool).isRequired;
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'foo');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: true
      }), 'foo');
    });
    it('is required when the prop matches the defaultValue', function () {
      var validator = (0, _.requiredBy)('bar', _propTypes.number, 42).isRequired;
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'foo');
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        bar: true
      }), 'foo');
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: 42
      }), 'foo');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: 7
      }), 'foo');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        foo: 0,
        bar: true
      }), 'foo');
    });
  });
});
//# sourceMappingURL=requiredBy.js.map