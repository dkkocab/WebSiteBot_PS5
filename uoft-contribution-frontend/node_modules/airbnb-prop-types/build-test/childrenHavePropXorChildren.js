"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('childrenHavePropXorChildren', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.childrenHavePropXorChildren)('foo'))).to.equal('function');
  });
  it('throws with an invalid prop name', function () {
    (0, _chai.expect)(function () {
      return (0, _.childrenHavePropXorChildren)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenHavePropXorChildren)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenHavePropXorChildren)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenHavePropXorChildren)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenHavePropXorChildren)(function () {});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenHavePropXorChildren)(/a/g);
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.equal(null);
  }

  function assertFails(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.be.an.instanceOf(Error);
  }

  describe('with a property', function () {
    var prop = 'foo';
    it('passes when all children have children', function () {
      return assertPasses((0, _.childrenHavePropXorChildren)(prop), /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null, "a"), /*#__PURE__*/_react["default"].createElement("div", null, "b"), /*#__PURE__*/_react["default"].createElement("div", null, "c")), 'abc', 'ComponentName');
    });
    it('passes when all children have neither the prop nor children', function () {
      return assertPasses((0, _.childrenHavePropXorChildren)(prop), /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null)), 'abc', 'ComponentName');
    });
    it('passes when all children have the prop and no children', function () {
      return assertPasses((0, _.childrenHavePropXorChildren)(prop), /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", _defineProperty({}, prop, 1)), /*#__PURE__*/_react["default"].createElement("div", _defineProperty({}, prop, 2))), 'abc', 'ComponentName');
    });
    it('passes when falsy children are present and non-falsy children passes validator', function () {
      return assertPasses((0, _.childrenHavePropXorChildren)(prop),
      /*#__PURE__*/

      /* eslint react/jsx-curly-brace-presence: 1 */
      _react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), null, false, ''), 'abc', 'ComponentName');
    });
    it('fails when there is a mix of children and no children', function () {
      return assertFails((0, _.childrenHavePropXorChildren)(prop), /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null, "b"), /*#__PURE__*/_react["default"].createElement("div", null)), 'abc', 'ComponentName');
    });
    it('fails when there is a mix of children and the prop', function () {
      return assertFails((0, _.childrenHavePropXorChildren)(prop), /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null, "b"), /*#__PURE__*/_react["default"].createElement("div", _defineProperty({}, prop, true))), 'abc', 'ComponentName');
    });
    it('fails when there is a mix of no prop and the prop', function () {
      return assertFails((0, _.childrenHavePropXorChildren)(prop), /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", _defineProperty({}, prop, true))), 'abc', 'ComponentName');
    });
    it('fails when falsy children are present and non-falsy children fails validator', function () {
      return assertFails((0, _.childrenHavePropXorChildren)(prop),
      /*#__PURE__*/

      /* eslint react/jsx-curly-brace-presence: 1 */
      _react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", _defineProperty({}, prop, true)), null, false, ''), 'abc', 'ComponentName');
    });
  });
});
//# sourceMappingURL=childrenHavePropXorChildren.js.map