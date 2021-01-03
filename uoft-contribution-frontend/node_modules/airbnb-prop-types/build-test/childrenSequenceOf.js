"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('childrenSequenceOf', function () {
  it('is a function', function () {
    (0, _chai.expect)(_typeof(_.childrenSequenceOf)).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    var error = (0, _callValidator["default"])(validator, element, propName, '"childrenSequenceOf" passing test');
    (0, _chai.expect)(error).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    var error = (0, _callValidator["default"])(validator, element, propName, '"childrenSequenceOf" failing test');
    (0, _chai.expect)(error).to.be.instanceOf(Error);
  }

  it('throws if not given at least one specifier', function () {
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)();
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)('');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)(NaN);
    }).to["throw"](TypeError);
  });
  it('throws if given an invalid validator', function () {
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: null
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: undefined
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: false
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: []
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: {}
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: ''
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: 3
      });
    }).to["throw"](TypeError);
  });
  it('throws given a non-positive-integer min or max', function () {
    var validator = _propTypes.number;
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: -1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: -1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: -1.4
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: -1.4
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: NaN
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: NaN
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: Infinity
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: Infinity
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: -Infinity
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: -Infinity
      });
    }).to["throw"](TypeError);
  });
  it('throws given inverted "min"/"max"', function () {
    var validator = _propTypes.number;
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: 2,
        max: 1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: 1,
        min: 2
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: 2,
        max: 0
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: 0,
        min: 2
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        min: 1,
        max: 0
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: 0,
        min: 1
      });
    }).to["throw"](TypeError); // "min" defaults to 1

    (0, _chai.expect)(function () {
      return (0, _.childrenSequenceOf)({
        validator: validator,
        max: 0
      });
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.childrenSequenceOf)({
      validator: _propTypes.number
    }))).to.equal('function');
  });
  it('fails on a non-children prop', function () {
    var validator = (0, _.childrenSequenceOf)({
      validator: _propTypes.number
    });
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'cousins');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'cousins');
  });
  it('passes with null/undefined when optional', function () {
    var validator = (0, _.childrenSequenceOf)({
      validator: _propTypes.number
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, null), 'children');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, undefined), 'children');
  });
  it('fails with null/undefined when required', function () {
    var validator = (0, _.childrenSequenceOf)({
      validator: _propTypes.number
    }).isRequired;
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, null), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, undefined), 'children');
  });
  it('works with specifiers without "max"/"min"', function () {
    var validator = (0, _.childrenSequenceOf)({
      validator: _propTypes.number
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, NaN), 'children');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null, NaN), 'children');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, -0), 'children');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null, -0), 'children');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, Infinity), 'children');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null, Infinity), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, null, /*#__PURE__*/_react["default"].createElement("span", null), function () {}), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, "1"), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, "1", 2), 'children');
  });
  it('works with specifiers only providing "min"', function () {
    var optional = (0, _.childrenSequenceOf)({
      validator: _propTypes.number,
      min: 0
    });
    var twoPlus = (0, _.childrenSequenceOf)({
      validator: _propTypes.number,
      min: 2
    });
    assertPasses(optional, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(optional.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertPasses(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(twoPlus.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertPasses(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2), 'children');
    assertPasses(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3), 'children');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null, "1"), 'children');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null, "1", 2), 'children');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", null, 1, "2", 3), 'children');
  });
  it('works with specifiers only providing "max"', function () {
    var optional = (0, _.childrenSequenceOf)({
      validator: _propTypes.number,
      max: 1
    });
    var twoOrLess = (0, _.childrenSequenceOf)({
      validator: _propTypes.number,
      max: 2
    });
    assertPasses(optional, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(optional.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertPasses(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertFails(twoOrLess.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertPasses(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertPasses(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2), 'children');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3), 'children');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null, "1"), 'children');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null, "1", 2), 'children');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", null, 1, "2", 3), 'children');
  });
  it('works with specifiers with both "min" and "max"', function () {
    var twoOrThree = (0, _.childrenSequenceOf)({
      validator: _propTypes.number,
      min: 2,
      max: 3
    });
    var oneOrTwo = (0, _.childrenSequenceOf)({
      validator: _propTypes.number,
      max: 2,
      min: 1
    });
    assertFails(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertPasses(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2), 'children');
    assertPasses(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3), 'children');
    assertFails(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3, 4), 'children');
    assertFails(oneOrTwo.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'children');
    assertPasses(oneOrTwo, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertPasses(oneOrTwo, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2), 'children');
    assertFails(oneOrTwo, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3), 'children');
  });
  it('works with an optional unmet, and a required met, specifier', function () {
    var validator = (0, _.childrenSequenceOf)({
      validator: _propTypes.string,
      min: 0
    }, {
      validator: _propTypes.number
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, "a", 1), 'children');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null, 1), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, "a"), 'children');
    assertFails(validator,
    /*#__PURE__*/

    /* eslint react/jsx-curly-brace-presence: 0 */
    _react["default"].createElement("div", null, "a", 'b'), 'children');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2), 'children');
  });
});
//# sourceMappingURL=childrenSequenceOf.js.map