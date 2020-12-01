"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('and', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.and)([_propTypes.number, _.nonNegativeInteger]))).to.equal('function');
  });
  it('throws on non-array input', function () {
    (0, _chai.expect)(function () {
      return (0, _.and)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)(function () {});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)(true);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.and)('');
    }).to["throw"](TypeError);
  });
  it('requires at least 2 validators', function () {
    (0, _chai.expect)(function () {
      return (0, _.and)([]);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.and)([function () {}]);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.and)([function () {}, function () {}]);
    }).not.to["throw"]();
  });

  function assertPasses(validator, element, propName) {
    var result = (0, _callValidator["default"])(validator, element, propName, '"and" test');
    (0, _chai.expect)(result).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    var result = (0, _callValidator["default"])(validator, element, propName, '"and" test');
    (0, _chai.expect)(result).to.be.instanceOf(Error);
  }

  describe('validates both propTypes', function () {
    it('passes when expected', function () {
      var validatorNumber = (0, _.and)([_propTypes.number, _.nonNegativeInteger]);
      var validatorNonNegative = (0, _.and)([_.nonNegativeInteger, _propTypes.number]);
      assertPasses(validatorNumber, /*#__PURE__*/_react["default"].createElement("div", {
        a: 1
      }), 'a');
      assertPasses(validatorNonNegative, /*#__PURE__*/_react["default"].createElement("div", {
        a: 1
      }), 'a');
    });
    it('fails when expected', function () {
      var validatorNumber = (0, _.and)([_propTypes.number, _.nonNegativeInteger]);
      var validatorNonNegative = (0, _.and)([_.nonNegativeInteger, _propTypes.number]);

      var invalidElement = /*#__PURE__*/_react["default"].createElement("div", {
        a: -2
      });

      var prop = 'a';
      assertFails(validatorNumber, invalidElement, prop);
      assertFails(validatorNonNegative, invalidElement, prop);
    });
    it('fails in the right order', function () {
      var invalidElement = /*#__PURE__*/_react["default"].createElement("div", {
        a: "b"
      });

      var prop = 'a';
      var location = 'testing "and"';
      (0, _chai.expect)((0, _callValidator["default"])((0, _.and)([_propTypes.number, _.nonNegativeInteger]), invalidElement, prop, location)).to.eql((0, _callValidator["default"])(_propTypes.number, invalidElement, prop, location));
      var actual = (0, _callValidator["default"])((0, _.and)([_.nonNegativeInteger, _propTypes.number]), invalidElement, prop, location);
      var expected = (0, _callValidator["default"])(_.nonNegativeInteger, invalidElement, prop, location);
      (0, _chai.expect)(_typeof(actual)).to.equal(_typeof(expected));
      (0, _chai.expect)(actual.name).to.equal(expected.name);
      (0, _chai.expect)(actual.message).to.equal(expected.message);
    });
  });
  describe('isRequired', function () {
    it('passes if not required', function () {
      var validatorNumber = (0, _.and)([_propTypes.number, _.nonNegativeInteger]);
      assertPasses(validatorNumber, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    });
    it('fails if overarching one is required', function () {
      var validatorNumber = (0, _.and)([_propTypes.number, _.nonNegativeInteger]).isRequired;
      assertFails(validatorNumber, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    });
    it('fails if an individual validator is required', function () {
      var validatorNumber = (0, _.and)([_propTypes.number, _.nonNegativeInteger.isRequired]);
      assertFails(validatorNumber, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    });
  });
});
//# sourceMappingURL=and.js.map