"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

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

function SFCwithName() {}

SFCwithName.displayName = 'SFC with a display name!';

var Component = /*#__PURE__*/function (_React$Component) {
  _inherits(Component, _React$Component);

  var _super = _createSuper(Component);

  function Component() {
    _classCallCheck(this, Component);

    return _super.apply(this, arguments);
  }

  return Component;
}(_react["default"].Component);

var ComponentWithName = /*#__PURE__*/function (_React$Component2) {
  _inherits(ComponentWithName, _React$Component2);

  var _super2 = _createSuper(ComponentWithName);

  function ComponentWithName() {
    _classCallCheck(this, ComponentWithName);

    return _super2.apply(this, arguments);
  }

  return ComponentWithName;
}(_react["default"].Component);

ComponentWithName.displayName = 'Component with a display name!';

var ComponentWithHOCs = /*#__PURE__*/function (_React$Component3) {
  _inherits(ComponentWithHOCs, _React$Component3);

  var _super3 = _createSuper(ComponentWithHOCs);

  function ComponentWithHOCs() {
    _classCallCheck(this, ComponentWithHOCs);

    return _super3.apply(this, arguments);
  }

  return ComponentWithHOCs;
}(_react["default"].Component);

ComponentWithHOCs.displayName = 'withA(withB(withC(Connect(X))))';
var describeIfForwardRefs = _react["default"].forwardRef ? describe : describe.skip;
describe('componentWithName', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.componentWithName)('name'))).to.equal('function');
  });
  it('throws when not given a string or a regex', function () {
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)(true);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)(false);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)(NaN);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)([]);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)({});
    }).to["throw"](TypeError);
  });
  it('throws when given unknown options', function () {
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)('Foo', {});
    }).not.to["throw"]();
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)('Foo', {
        stripHOCS: 'typo in the last "s"'
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)('Foo', {
        stripHOCs: [],
        extra: true
      });
    }).to["throw"](TypeError);
  });
  it('throws when given names of HOCs to strip that are not strings', function () {
    var notStrings = [null, undefined, true, false, 42, NaN, [], {}, function () {}];
    notStrings.forEach(function (notString) {
      (0, _chai.expect)(function () {
        return (0, _.componentWithName)('Foo', {
          stripHOCs: [notString]
        });
      }).to["throw"](TypeError);
    });
  });
  it('throws when given names of HOCs to strip that have parens', function () {
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)('Foo', {
        stripHOCs: ['with()Foo']
      });
    }).to["throw"](TypeError);
  });
  it('throws when given names of HOCs to strip that are not in camelCase', function () {
    (0, _chai.expect)(function () {
      return (0, _.componentWithName)('Foo', {
        stripHOCs: ['with_foo']
      });
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName)).to.be.instanceOf(Error);
  }

  describe('with a single child of the specified name', function () {
    it('passes with an SFC', function () {
      return assertPasses((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with an SFC + displayName', function () {
      return assertPasses((0, _.componentWithName)(SFCwithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.componentWithName)('Component'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a Component + displayName', function () {
      return assertPasses((0, _.componentWithName)(ComponentWithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a component with HOCs', function () {
      assertPasses((0, _.componentWithName)('X', {
        stripHOCs: ['withA', 'withB', 'withC', 'Connect']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertPasses((0, _.componentWithName)('withC(Connect(X))', {
        stripHOCs: ['withA', 'withB']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertPasses((0, _.componentWithName)('withB(withC(Connect(X)))', {
        stripHOCs: ['withA', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
    });
  });
  describe('with multiple children of the specified name', function () {
    it('passes with an SFC', function () {
      return assertPasses((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with an SFC + displayName', function () {
      return assertPasses((0, _.componentWithName)(SFCwithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.componentWithName)('Component'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a Component + displayName', function () {
      return assertPasses((0, _.componentWithName)(ComponentWithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a component with HOCs', function () {
      assertPasses((0, _.componentWithName)('X', {
        stripHOCs: ['withA', 'withB', 'withC', 'Connect']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertPasses((0, _.componentWithName)('withC(Connect(X))', {
        stripHOCs: ['withA', 'withB']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertPasses((0, _.componentWithName)('withB(withC(Connect(X)))', {
        stripHOCs: ['withA', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
    });
  });
  describe('with children of the specified names passed as an array', function () {
    it('passes with an SFC', function () {
      return assertPasses((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(SFC, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        key: "three",
        "default": "Foo"
      })]), 'children');
    });
    it('passes with an SFC + displayName', function () {
      return assertPasses((0, _.componentWithName)(SFCwithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(SFCwithName, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        key: "three",
        "default": "Foo"
      })]), 'children');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.componentWithName)('Component'), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(Component, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        key: "three",
        "default": "Foo"
      })]), 'children');
    });
    it('passes with a Component + displayName', function () {
      return assertPasses((0, _.componentWithName)(ComponentWithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        key: "three",
        "default": "Foo"
      })]), 'children');
    });
    it('passes with a component with HOCs', function () {
      assertPasses((0, _.componentWithName)('X', {
        stripHOCs: ['withA', 'withB', 'withC', 'Connect']
      }), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "three",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "four",
        "default": "Foo"
      })]), 'children');
      assertPasses((0, _.componentWithName)('withC(Connect(X))', {
        stripHOCs: ['withA', 'withB']
      }), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "three",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "four",
        "default": "Foo"
      })]), 'children');
      assertPasses((0, _.componentWithName)('withB(withC(Connect(X)))', {
        stripHOCs: ['withA', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "three",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        key: "four",
        "default": "Foo"
      })]), 'children');
    });
  });
  describe('when an unspecified name is provided as a child', function () {
    it('fails with an SFC', function () {
      return assertFails((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
    });
    it('fails with an SFC + displayName', function () {
      return assertFails((0, _.componentWithName)(SFCwithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
    });
    it('fails with a Component', function () {
      return assertFails((0, _.componentWithName)('Component'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
    });
    it('fails with a Component + displayName', function () {
      return assertFails((0, _.componentWithName)(ComponentWithName.displayName), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
    });
    it('fails with a component with HOCs', function () {
      assertFails((0, _.componentWithName)('X', {
        stripHOCs: ['withA', 'withB', 'withC', 'Connect']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
      assertFails((0, _.componentWithName)('withC(Connect(X))', {
        stripHOCs: ['withA', 'withB']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
      assertFails((0, _.componentWithName)('withB(withC(Connect(X)))', {
        stripHOCs: ['withA', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children');
    });
  });
  describe('when a regex value is provided instead of a string', function () {
    it('passes with an SFC', function () {
      return assertPasses((0, _.componentWithName)(/FC$/), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with an SFC + displayName', function () {
      return assertPasses((0, _.componentWithName)(/display name/), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFCwithName, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.componentWithName)(/^Comp/), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a Component + displayName', function () {
      return assertPasses((0, _.componentWithName)(/display name/), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithName, {
        "default": "Foo"
      })), 'children');
    });
    it('passes with a component with HOCs', function () {
      assertPasses((0, _.componentWithName)(/^X$/, {
        stripHOCs: ['withA', 'withB', 'withC', 'Connect']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertPasses((0, _.componentWithName)(/^withC\(Connect\(X\)\)$/, {
        stripHOCs: ['withA', 'withB']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertPasses((0, _.componentWithName)(/^withB\(withC\(Connect\(X\)\)\)$/, {
        stripHOCs: ['withA', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
    });
    it('fails when SFC name does not match the regex provided', function () {
      return assertFails((0, _.componentWithName)(/foobar/), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children');
    });
    it('fails when Component name does not match the regex provided', function () {
      return assertFails((0, _.componentWithName)(/foobar/), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children');
    });
    it('fails with a component with HOCs that does not match the regex', function () {
      assertFails((0, _.componentWithName)(/^zX$/, {
        stripHOCs: ['withA', 'withB', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertFails((0, _.componentWithName)(/^zwithC\(X\)$/, {
        stripHOCs: ['withA', 'withB']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
      assertFails((0, _.componentWithName)(/^zwithB\(withC\(X\)\)$/, {
        stripHOCs: ['withA', 'withC']
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(ComponentWithHOCs, {
        "default": "Foo"
      })), 'children');
    });
  });
  it('fails when the provided prop is not a component', function () {
    return assertFails((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", null, "Blah blah blah."), 'children');
  });
  it('passes when the prop is null', function () {
    return assertPasses((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", {
      a: null
    }), 'a');
  });
  it('passes when the prop is absent', function () {
    return assertPasses((0, _.componentWithName)('SFC'), /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  describe('when the prop is required', function () {
    it('fails when the prop is null', function () {
      return assertFails((0, _.componentWithName)('SFC').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: null
      }), 'a');
    });
    it('passes when the prop is the right component', function () {
      return assertPasses((0, _.componentWithName)('SFC').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement(SFC, null)
      }), 'a');
    });
  });
  describeIfForwardRefs('Forward Refs', function () {
    it('passes on a forward ref', function () {
      var Reffy = /*#__PURE__*/_react["default"].forwardRef(function () {
        return /*#__PURE__*/_react["default"].createElement("main", null);
      });

      Reffy.displayName = 'Reffy Name';
      assertPasses((0, _.componentWithName)('Reffy Name').isRequired, /*#__PURE__*/_react["default"].createElement("div", {
        a: /*#__PURE__*/_react["default"].createElement(Reffy, null)
      }), 'a');
    });
  });
});
//# sourceMappingURL=componentWithName.js.map