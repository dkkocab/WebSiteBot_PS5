"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('withShape', function () {
  it('is a function', function () {
    (0, _chai.expect)(_typeof(_.withShape)).to.equal('function');
  });
  describe('errors', function () {
    it('throws if not given a function', function () {
      (0, _chai.expect)(function () {
        return (0, _.withShape)();
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(undefined);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(null);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)([]);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)({});
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)('');
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(42);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(NaN);
      }).to["throw"](TypeError);
    });
    it('throws if not given a shape object', function () {
      var f = function f() {};

      (0, _chai.expect)(function () {
        return (0, _.withShape)(f);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(f, undefined);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(f, null);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(f, []);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(f, '');
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(f, 42);
      }).to["throw"](TypeError);
      (0, _chai.expect)(function () {
        return (0, _.withShape)(f, NaN);
      }).to["throw"](TypeError);
    });
  });
  describe('validator', function () {
    it('returns a function', function () {
      (0, _chai.expect)(_typeof((0, _.withShape)(function () {}, {}))).to.equal('function');
    });

    function assertPasses(validator, element, propName) {
      (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"withShape" test')).to.equal(null);
    }

    function assertFails(validator, element, propName) {
      (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"withShape" test')).to.be.instanceOf(Error);
    }

    it('enforces the provided type', function () {
      assertPasses((0, _.withShape)(_propTypes.number, {}), /*#__PURE__*/_react["default"].createElement("div", {
        foo: 3
      }), 'foo');
      assertFails((0, _.withShape)(_propTypes.number, {}), /*#__PURE__*/_react["default"].createElement("div", {
        foo: "3"
      }), 'foo');
    });
    it('enforces the provided shape', function () {
      assertPasses((0, _.withShape)(_propTypes.array, {
        length: (0, _propTypes.oneOf)([2])
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
      assertPasses((0, _.withShape)(_propTypes.array, {
        length: (0, _.range)(1, 4)
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
      assertFails((0, _.withShape)(_propTypes.array, {
        length: (0, _propTypes.oneOf)([2]),
        missing: _propTypes.number.isRequired
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
      assertFails((0, _.withShape)(_propTypes.array, {
        length: (0, _propTypes.oneOf)([1])
      }), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'foo');
    });
  });
});
//# sourceMappingURL=withShape.js.map