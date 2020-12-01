"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('or', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.or)([_propTypes.string, _propTypes.bool]))).to.equal('function');
  });
  it('throws if given a non-array', function () {
    (0, _chai.expect)(function () {
      return (0, _.or)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.or)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.or)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.or)({});
    }).to["throw"](TypeError);
  });
  it('throws if given an array of zero or one items', function () {
    (0, _chai.expect)(function () {
      return (0, _.or)([]);
    }).to["throw"](RangeError);
    (0, _chai.expect)(function () {
      return (0, _.or)([_propTypes.string]);
    }).to["throw"](RangeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"or" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"or" test')).to.be.instanceOf(Error);
  }

  it('allows composing propTypes', function () {
    var validator = (0, _.or)([_propTypes.bool, _propTypes.number, (0, _propTypes.arrayOf)(_propTypes.string)]);
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['b', 'c']
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['b', 1]
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "b"
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertPasses(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['b', 'c']
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: ['b', 1]
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "b"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  describe('works with explicitNull', function () {
    it('works when outer and inner are optional', function () {
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]), /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]), /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]), /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]), /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
    });
    it('works when outer is optional, inner is required', function () {
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]), /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
    });
    it('works when outer is required, inner is optional', function () {
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertFails((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]).isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertFails((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertFails((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)()]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
      assertFails((0, _.or)([(0, _.explicitNull)(), _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
    });
    it('works when outer is required, inner is required', function () {
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: true
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: false
      }), 'a');
      assertPasses((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertPasses((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
      assertFails((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertFails((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
      assertFails((0, _.or)([_propTypes.bool.isRequired, (0, _.explicitNull)().isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
      assertFails((0, _.or)([(0, _.explicitNull)().isRequired, _propTypes.bool.isRequired]).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: undefined
      }), 'a');
    });
  });
});
//# sourceMappingURL=or.js.map