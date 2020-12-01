"use strict";

var _chai = require("chai");

var _propTypes = require("prop-types");

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


describe('childrenOf', function () {
  function assertPasses(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.equal(null);
  }

  function assertFails(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.be.instanceOf(Error);
  }

  it('fails on a non-children prop', function () {
    var validator = (0, _.childrenOf)(_propTypes.node);
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'foo', 'non-children optional');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'foo', 'non-children optional');
  });
  describe('with no children', function () {
    it('passes when optional', function () {
      assertPasses((0, _.childrenOf)(_propTypes.node), /*#__PURE__*/_react["default"].createElement("div", null), 'children', 'optional empty');
      assertPasses((0, _.childrenOf)(_propTypes.node), /*#__PURE__*/_react["default"].createElement("div", null, []), 'children', 'optional empty array');
    });
    it('fails when required', function () {
      return assertFails((0, _.childrenOf)(_propTypes.node).isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'children', 'optional empty');
    });
  });
  describe('with non-element children', function () {
    it('passes with multiple numbers', function () {
      return assertPasses((0, _.childrenOf)(_propTypes.number), /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3), 'children', 'numbers');
    });
    it('passes with multiple numbers when required', function () {
      return assertPasses((0, _.childrenOf)(_propTypes.number).isRequired, /*#__PURE__*/_react["default"].createElement("div", null, 1, 2, 3), 'children', 'numbers');
    });
    it('passes with multiple strings', function () {
      return assertPasses((0, _.childrenOf)(_propTypes.string), /*#__PURE__*/_react["default"].createElement("div", null, "a b c"), 'children', 'strings');
    });
    it('passes with multiple strings when required', function () {
      return assertPasses((0, _.childrenOf)(_propTypes.string).isRequired, /*#__PURE__*/_react["default"].createElement("div", null, "a b c"), 'children', 'strings');
    });
    it('passes with strings and numbers', function () {
      return assertPasses((0, _.childrenOf)((0, _.or)([_propTypes.string, _propTypes.number])), /*#__PURE__*/_react["default"].createElement("div", null, "a b c", 1, 2, 3), 'children', 'strings + numbers');
    });
    it('passes with strings and numbers when required', function () {
      return assertPasses((0, _.childrenOf)((0, _.or)([_propTypes.string, _propTypes.number])).isRequired, /*#__PURE__*/_react["default"].createElement("div", null, "a b c", 1, 2, 3), 'children', 'strings + numbers');
    });
  });
  describe('with a single child of the specified type', function () {
    it('passes with a DOM element', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)('span')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null)), 'children', 'span!');
    });
    it('passes with an SFC', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)(SFC)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children', 'SFC!');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)(Component)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children', 'Component!');
    });
  });
  describe('with multiple children of the specified type', function () {
    it('passes with a DOM element', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)('span')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null), /*#__PURE__*/_react["default"].createElement("span", null), /*#__PURE__*/_react["default"].createElement("span", null), /*#__PURE__*/_react["default"].createElement("span", null)), 'children', 'span!');
    });
    it('passes with an SFC', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)(SFC)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      })), 'children', 'SFC!');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)(Component)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      })), 'children', 'Component!');
    });
  });
  describe('with children of the specified types passed as an array', function () {
    it('passes with a DOM element', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)('span')), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement("span", {
        key: "one"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        key: "two"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        key: "three"
      })]), 'children', 'span!');
    });
    it('passes with an SFC', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)(SFC)), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(SFC, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(SFC, {
        key: "three",
        "default": "Foo"
      })]), 'children', 'SFC!');
    });
    it('passes with a Component', function () {
      return assertPasses((0, _.childrenOf)((0, _.elementType)(Component)), /*#__PURE__*/_react["default"].createElement("div", null, [/*#__PURE__*/_react["default"].createElement(Component, {
        key: "one",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        key: "two",
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement(Component, {
        key: "three",
        "default": "Foo"
      })]), 'children', 'Component!');
    });
  });
  describe('when an unspecified type is provided as a child', function () {
    it('fails expecting a DOM element', function () {
      return assertFails((0, _.childrenOf)((0, _.elementType)('span')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children', 'span!');
    });
    it('fails expecting an SFC', function () {
      return assertFails((0, _.childrenOf)((0, _.elementType)(SFC)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SFC, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children', 'SFC!');
    });
    it('fails expecting a Component', function () {
      return assertFails((0, _.childrenOf)((0, _.elementType)(Component)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Component, {
        "default": "Foo"
      }), /*#__PURE__*/_react["default"].createElement("section", null, "No way.")), 'children', 'Component!');
    });
  });
});
//# sourceMappingURL=childrenOf.js.map