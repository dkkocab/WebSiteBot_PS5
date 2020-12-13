"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('sequenceOf', function () {
  it('is a function', function () {
    (0, _chai.expect)(_typeof(_.sequenceOf)).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"sequenceOf" passing test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"sequenceOf" failing test')).to.be.instanceOf(Error);
  }

  it('throws if not given at least one specifier', function () {
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)();
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)('');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)(NaN);
    }).to["throw"](TypeError);
  });
  it('throws if given an invalid validator', function () {
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: null
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: undefined
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: false
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: []
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: {}
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: ''
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: 3
      });
    }).to["throw"](TypeError);
  });
  it('throws given a non-positive-integer min or max', function () {
    var validator = _propTypes.number;
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: -1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: -1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: -1.4
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: -1.4
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: NaN
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: NaN
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: Infinity
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: Infinity
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: -Infinity
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: -Infinity
      });
    }).to["throw"](TypeError);
  });
  it('throws given inverted "min"/"max"', function () {
    var validator = _propTypes.number;
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: 2,
        max: 1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: 1,
        min: 2
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: 2,
        max: 0
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: 0,
        min: 2
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        min: 1,
        max: 0
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: 0,
        min: 1
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.sequenceOf)({
        validator: validator,
        max: 0
      });
    }).to["throw"](TypeError); // "min" defaults to 1
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.sequenceOf)({
      validator: _propTypes.number
    }))).to.equal('function');
  });
  it('passes with null/undefined when optional', function () {
    var validator = (0, _.sequenceOf)({
      validator: _propTypes.number
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: null
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: undefined
    }), 'a');
  });
  it('fails with null/undefined when required', function () {
    var validator = (0, _.sequenceOf)({
      validator: _propTypes.number
    });
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: null
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: undefined
    }), 'a');
  });
  it('fails with non-arrays', function () {
    var validator = (0, _.sequenceOf)({
      validator: _propTypes.number
    });
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 42
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ""
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: {}
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: function a() {}
    }), 'a');
  });
  it('works with specifiers without "max"/"min"', function () {
    var validator = (0, _.sequenceOf)({
      validator: _propTypes.number
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1]
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [NaN]
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [-0]
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [Infinity]
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2, null, /*#__PURE__*/_react["default"].createElement("span", null), {}, function () {}]
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['1']
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['1', '2']
    }), 'a');
  });
  it('works with specifiers only providing "min"', function () {
    var optional = (0, _.sequenceOf)({
      validator: _propTypes.number,
      min: 0
    });
    var twoPlus = (0, _.sequenceOf)({
      validator: _propTypes.number,
      min: 2
    });
    assertPasses(optional, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1]
    }), 'a');
    assertPasses(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2]
    }), 'a');
    assertPasses(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2, 3]
    }), 'a');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['1']
    }), 'a');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['1', 2]
    }), 'a');
    assertFails(twoPlus, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, '2', 3]
    }), 'a');
  });
  it('works with specifiers only providing "max"', function () {
    var optional = (0, _.sequenceOf)({
      validator: _propTypes.number,
      max: 1
    });
    var twoOrLess = (0, _.sequenceOf)({
      validator: _propTypes.number,
      max: 2
    });
    assertFails(optional, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertPasses(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1]
    }), 'a');
    assertPasses(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2]
    }), 'a');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2, 3]
    }), 'a');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['1']
    }), 'a');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['1', 2]
    }), 'a');
    assertFails(twoOrLess, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, '2', 3]
    }), 'a');
  });
  it('works with specifiers with both "min" and "max"', function () {
    var twoOrThree = (0, _.sequenceOf)({
      validator: _propTypes.number,
      min: 2,
      max: 3
    });
    var oneOrTwo = (0, _.sequenceOf)({
      validator: _propTypes.number,
      max: 2,
      min: 1
    });
    assertFails(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1]
    }), 'a');
    assertPasses(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2]
    }), 'a');
    assertPasses(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2, 3]
    }), 'a');
    assertFails(twoOrThree, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2, 3, 4]
    }), 'a');
    assertFails(oneOrTwo.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertPasses(oneOrTwo, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1]
    }), 'a');
    assertPasses(oneOrTwo, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2]
    }), 'a');
    assertFails(oneOrTwo, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2, 3]
    }), 'a');
  });
  it('works with an optional unmet, and a required met, specifier', function () {
    var validator = (0, _.sequenceOf)({
      validator: _propTypes.string,
      min: 0
    }, {
      validator: _propTypes.number
    });
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['a', 1]
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1]
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['a']
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['a', 'b']
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: [1, 2]
    }), 'a');
  });
});
//# sourceMappingURL=sequenceOf.js.map