"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('nChildren', function () {
  it('throws when not given a positive number', function () {
    (0, _chai.expect)(function () {
      return (0, _.nChildren)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)('1');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)(NaN);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)(-1);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.nChildren)(-Infinity);
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.nChildren)(1))).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.be.instanceOf(Error);
  }

  it('fails when run on a prop that is not "children"', function () {
    assertFails((0, _.nChildren)(0), /*#__PURE__*/_react["default"].createElement("div", null), 'foo');
  });
  it('fails when the children are less than n', function () {
    var validator = (0, _.nChildren)(3);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null), /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
  });
  it('passes when the children are equal to n', function () {
    var validator = (0, _.nChildren)(3);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null), /*#__PURE__*/_react["default"].createElement("i", null), /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
  });
  it('fails when the children are more than n', function () {
    var validator = (0, _.nChildren)(1);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null), /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
  });
  it('validates against the optionally provided propType', function () {
    assertFails((0, _.nChildren)(1, _propTypes.number), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
    assertPasses((0, _.nChildren)(1, (0, _.childrenOfType)('i')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
    assertFails((0, _.nChildren)(1, (0, _.childrenOfType)('span')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", null)), 'children');
  });
});
//# sourceMappingURL=nChildren.js.map