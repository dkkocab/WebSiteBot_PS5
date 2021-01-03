"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function SFC() {}

var Component = /*#__PURE__*/function (_React$Component) {
  _inherits(Component, _React$Component);

  var _super = _createSuper(Component);

  function Component() {
    _classCallCheck(this, Component);

    return _super.apply(this, arguments);
  }

  return Component;
}(_react["default"].Component); // eslint-disable-line react/prefer-stateless-function


describe('elementType', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.elementType)(''))).to.equal('function');
  });
  it('throws on an invalid type', function () {
    (0, _chai.expect)(function () {
      return (0, _.elementType)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.elementType)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.elementType)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.elementType)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.elementType)(true);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.elementType)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.elementType)({});
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.equal(null);
  }

  function assertFails(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.be.instanceOf(Error);
  }

  describe('a single child', function () {
    it('passes with a DOM element', function () {
      return assertPasses((0, _.elementType)('span'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null)), 'children', 'span!');
    });
    it('passes with an SFC', function () {
      return assertPasses((0, _.elementType)(SFC), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children', 'SFC!');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.elementType)(Component), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children', 'Component!');
    });
    it('fails expecting a DOM element', function () {
      return assertFails((0, _.elementType)('span'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children', 'span!');
    });
    it('fails expecting an SFC', function () {
      return assertFails((0, _.elementType)(SFC), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children', 'SFC!');
    });
    it('fails expecting a Component', function () {
      return assertFails((0, _.elementType)(Component), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children', 'Component!');
    });
  });
  describe('a prop', function () {
    it('passes expecting a DOM element', function () {
      return assertPasses((0, _.elementType)('span'), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement("span", null)
      }), 'a', 'span!');
    });
    it('passes expecting an SFC', function () {
      return assertPasses((0, _.elementType)(SFC), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement(SFC, null)
      }), 'a', 'SFC!');
    });
    it('passes expecting a Component', function () {
      return assertPasses((0, _.elementType)(Component), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement(Component, null)
      }), 'a', 'Component!');
    });
    it('fails expecting a DOM element', function () {
      return assertFails((0, _.elementType)('span'), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement("section", null, "No way.")
      }), 'a', 'span!');
    });
    it('fails expecting an SFC', function () {
      return assertFails((0, _.elementType)(SFC), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement("section", null, "No way.")
      }), 'a', 'SFC!');
    });
    it('fails expecting a Component', function () {
      return assertFails((0, _.elementType)(Component), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement("section", null, "No way.")
      }), 'a', 'Component!');
    });
  });
  describe('*', function () {
    it('allows a DOM element as a child', function () {
      return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null)), 'children', 'span!');
    });
    it('allows a DOM element as a prop', function () {
      return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement("span", null)
      }), 'a', 'span!');
    });
    it('allows a Component as a child', function () {
      return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, null)), 'children', 'Component!');
    });
    it('allows a Component as a prop', function () {
      return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement(Component, null)
      }), 'a', 'Component!');
    });
    it('allows an SFC as a child', function () {
      return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, null)), 'children', 'SFC!');
    });
    it('allows an SFC as a prop', function () {
      return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement(SFC, null)
      }), 'a', 'SFC!');
    });
    describe('with a nonelement child', function () {
      it('fails with a string', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, "foo"), 'children', 'string');
      });
      it('fails with a number', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, 3), 'children', 'number');
      });
      it('fails with true', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, true), 'children', 'true');
      });
      it('fails with false', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, false), 'children', 'false');
      });
      it('fails with an array', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", null, []), 'children', 'array');
      });
    });
    describe('with a nonelement prop', function () {
      it('passes with undefined', function () {
        return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: undefined
        }), 'a', 'undefined');
      });
      it('fails with undefined when required', function () {
        return assertFails((0, _.elementType)('*').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
          a: undefined
        }), 'a', 'undefined required');
      });
      it('passes with null', function () {
        assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: null
        }), 'a', 'null *');
        assertPasses((0, _.elementType)('span'), /*#__PURE__*/_react["default"].createElement("div", {
          a: null
        }), 'a', 'null span');
      });
      it('fails with null when required', function () {
        assertFails((0, _.elementType)('*').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
          a: null
        }), 'a', 'null required *');
        assertFails((0, _.elementType)('span').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
          a: null
        }), 'a', 'null required span');
      });
      it('fails with a string', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: "foo"
        }), 'a', 'string');
      });
      it('fails with a number', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: 3
        }), 'a', 'number');
      });
      it('fails with true', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: true
        }), 'a', 'true');
      });
      it('fails with false', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: false
        }), 'a', 'false');
      });
      it('fails with an array', function () {
        return assertFails((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: []
        }), 'a', 'array');
      });
    });
    (_react["default"].forwardRef ? describe : describe.skip)('React.forwardRef', function () {
      var MyForwardRef = _react["default"].forwardRef && /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          ref: ref
        });
      });

      it('passes with * and a forwardRef', function () {
        return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(MyForwardRef, null)
        }), 'a', '* + forwardRef');
      });
      it('passes with matching forwardRef', function () {
        return assertPasses((0, _.elementType)(MyForwardRef), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(MyForwardRef, null)
        }), 'a', 'forwardRef + forwardRef');
      });
      it('fails with a string and a forwardRef', function () {
        return assertFails((0, _.elementType)('div'), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(MyForwardRef, null)
        }), 'a', 'div + forwardRef');
      });
    });
    (_react["default"].createContext ? describe : describe.skip)('React.createContext', function () {
      var _ref = _react["default"].createContext ? /*#__PURE__*/_react["default"].createContext('test') : {},
          Provider = _ref.Provider,
          Consumer = _ref.Consumer;

      it('passes with * and a Provider', function () {
        return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(Provider, null)
        }), 'a', '* + Provider');
      });
      it('passes with * and a Consumer', function () {
        return assertPasses((0, _.elementType)('*'), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(Consumer, null)
        }), 'a', '* + Consumer');
      });
      it('passes with matching Provider', function () {
        return assertPasses((0, _.elementType)(Provider), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(Provider, null)
        }), 'a', 'Provider + Provider');
      });
      it('passes with matching Consumer', function () {
        return assertPasses((0, _.elementType)(Consumer), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(Consumer, null)
        }), 'a', 'Consumer + Consumer');
      });
      it('fails with a string and a Provider', function () {
        return assertFails((0, _.elementType)('div'), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(Provider, null)
        }), 'a', 'div + Provider');
      });
      it('fails with a string and a Consumer', function () {
        return assertFails((0, _.elementType)('div'), /*#__PURE__*/_react["default"].createElement("div", {
          a: /*#__PURE__*/_react["default"].createElement(Consumer, null)
        }), 'a', 'div + Consumer');
      });
    });
  });
});
//# sourceMappingURL=elementType.js.map