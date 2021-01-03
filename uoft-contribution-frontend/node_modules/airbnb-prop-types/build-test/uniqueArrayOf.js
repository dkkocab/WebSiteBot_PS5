"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('uniqueArrayOf', function () {
  it('is a function', function () {
    (0, _chai.expect)(_typeof(_.uniqueArrayOf)).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"uniqueArrayOf" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"uniqueArrayOf" test')).to.be.instanceOf(Error);
  }

  function identityMapper(element) {
    return element;
  }

  function constantMapper(element) {
    return Math.pow(element, 0);
  }

  function arrayMapper(element) {
    return element[0];
  }

  it('throws if not given a type function', function () {
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)('');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(NaN);
    }).to["throw"](TypeError);
  });
  it('throws if given multiple mapping functions', function () {
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(function () {}, function () {}, function () {});
    }).to["throw"](TypeError);
  });
  it('throws if given multiple name strings', function () {
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(function () {}, 'test', 'test');
    }).to["throw"](TypeError);
  });
  it('throws if given more than 2 ...rest parameters', function () {
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(function () {}, 'test', 'test', 'test');
    }).to["throw"](TypeError);
  });
  it('throws if ordering of [String, Function]', function () {
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(function () {}, 'test', arrayMapper);
    }).to["throw"](TypeError);
  });
  it('throws if non string or function input', function () {
    (0, _chai.expect)(function () {
      return (0, _.uniqueArrayOf)(function () {}, 4);
    }).to["throw"](TypeError);
  });
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.uniqueArrayOf)(function () {}))).to.equal('function');
  });
  it('requires an array', function () {
    return assertFails((0, _.uniqueArrayOf)(function () {}), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "bar"
    }), 'foo');
  });
  it('is not required by default', function () {
    return assertPasses((0, _.uniqueArrayOf)(function () {}), /*#__PURE__*/_react["default"].createElement("div", {
      foo: "bar"
    }), 'missing');
  });
  it('is required with .isRequired', function () {
    return assertFails((0, _.uniqueArrayOf)(function () {}).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: "bar"
    }), 'missing');
  });
  it('allows custom name', function () {
    return assertPasses((0, _.uniqueArrayOf)(function () {}, 'test').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      foo: [1]
    }), 'foo');
  });
  it('enforces the provided validator', function () {
    assertFails((0, _.uniqueArrayOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [1, 2, '3', 4]
    }), 'foo');
    assertPasses((0, _.uniqueArrayOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [1, 2, 3, 4]
    }), 'foo');
  });
  it('enforces uniqueness', function () {
    assertFails((0, _.uniqueArrayOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [3, 1, 2, 3, 4]
    }), 'foo');
    assertPasses((0, _.uniqueArrayOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [1, 2, 3, 4]
    }), 'foo');
  });
  it('enforces uniqueness of objects too', function () {
    var arr = [1];
    assertFails((0, _.uniqueArrayOf)(_propTypes.array), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [[1], arr, arr]
    }), 'foo');
    assertPasses((0, _.uniqueArrayOf)(_propTypes.array), /*#__PURE__*/_react["default"].createElement("div", {
      foo: [[1], arr, [1]]
    }), 'foo');
  });
  describe('with mapper function', function () {
    it('requires an array', function () {
      return assertFails((0, _.uniqueArrayOf)(function () {}, identityMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: "bar"
      }), 'foo');
    });
    it('is not required by default', function () {
      return assertPasses((0, _.uniqueArrayOf)(function () {}, identityMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2]
      }), 'missing');
    });
    it('is required with .isRequired', function () {
      assertFails((0, _.uniqueArrayOf)(function () {}, identityMapper).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: "bar"
      }), 'missing');
      assertPasses((0, _.uniqueArrayOf)(function () {}, identityMapper).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2, 3, 4]
      }), 'foo');
    });
    it('enforces the provided validator', function () {
      assertFails((0, _.uniqueArrayOf)(_propTypes.number, identityMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2, '3', 4]
      }), 'foo');
      assertPasses((0, _.uniqueArrayOf)(_propTypes.number, identityMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2, 3, 4]
      }), 'foo');
    });
    it('enforces uniqueness', function () {
      assertFails((0, _.uniqueArrayOf)(_propTypes.number, identityMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [3, 1, 2, 3, 4]
      }), 'foo');
      assertPasses((0, _.uniqueArrayOf)(_propTypes.number, identityMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2, 3, 4]
      }), 'foo');
      assertFails((0, _.uniqueArrayOf)(_propTypes.number, constantMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [1, 2, 3, 4]
      }), 'foo');
    });
    it('enforces uniqueness of objects too', function () {
      assertFails((0, _.uniqueArrayOf)(_propTypes.array, arrayMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [[1, 2], [1, 3]]
      }), 'foo');
      assertFails((0, _.uniqueArrayOf)(_propTypes.array, arrayMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [[1, 2], [1, 3]]
      }), 'foo');
      assertPasses((0, _.uniqueArrayOf)(_propTypes.array, arrayMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [[1, 2], [2, 2]]
      }), 'foo');
      assertPasses((0, _.uniqueArrayOf)(_propTypes.array, arrayMapper), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [[1, 2], [2, 2]]
      }), 'foo');
    });
  });
  describe('with mapper function and name', function () {
    it('enforces uniqueness of objects too', function () {
      assertFails((0, _.uniqueArrayOf)(_propTypes.array, arrayMapper, 'test'), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [[1, 2], [1, 3]]
      }), 'foo');
      assertPasses((0, _.uniqueArrayOf)(_propTypes.array, arrayMapper, 'test'), /*#__PURE__*/_react["default"].createElement("div", {
        foo: [[1, 2], [2, 2]]
      }), 'foo');
    });
  });
});
//# sourceMappingURL=uniqueArrayOf.js.map