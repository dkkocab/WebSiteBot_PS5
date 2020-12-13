"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ifReact = _interopRequireDefault(require("enzyme-adapter-react-helper/build/ifReact"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var itIfReact = function itIfReact(version) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (0, _ifReact["default"])(version, function () {
    return it.apply(void 0, args);
  }, function () {
    var _it;

    return (_it = it).skip.apply(_it, args);
  });
};

describe('ref', function () {
  it('is a function', function () {
    (0, _chai.expect)(_typeof(_.ref)).to.equal('function');
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"ref" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"ref" test')).to.be.instanceOf(Error);
  }

  describe('not required', function () {
    var validator = (0, _.ref)();
    it('passes on null or undefined', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: undefined
      }), 'someRef');
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: null
      }), 'someRef');
    });
    it('passes when not present', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'someRef');
    });
    it('passes with callback refs', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: function someRef() {}
      }), 'someRef');
    });
    itIfReact('>= 16.3', 'passes with ref objects', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: /*#__PURE__*/_react["default"].createRef()
      }), 'someRef');
    });
    it('fails with React components', function () {
      var A = /*#__PURE__*/function (_React$Component) {
        _inherits(A, _React$Component);

        var _super = _createSuper(A);

        function A(props) {
          var _this;

          _classCallCheck(this, A);

          return _possibleConstructorReturn(_this);
        } // eslint-disable-line


        return A;
      }(_react["default"].Component);

      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: A
      }), 'someRef');
    });
    itIfReact('>= 15.2', 'fails with React pure components', function () {
      var B = /*#__PURE__*/function (_React$PureComponent) {
        _inherits(B, _React$PureComponent);

        var _super2 = _createSuper(B);

        function B(props) {
          var _this2;

          _classCallCheck(this, B);

          return _possibleConstructorReturn(_this2);
        } // eslint-disable-line


        return B;
      }(_react["default"].PureComponent);

      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: B
      }), 'someRef');
    });
    it('fails with other non-refs', function () {
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: 666
      }), 'someRef');
    });
  });
  describe('required', function () {
    var validator = (0, _.ref)().isRequired;
    it('fails on null or undefined', function () {
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: undefined
      }), 'someRef');
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: null
      }), 'someRef');
    });
    it('fails when not present', function () {
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'someRef');
    });
    it('passes with callback refs', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: function someRef() {}
      }), 'someRef');
    });
    itIfReact('>= 16.3', 'passes with ref objects', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: /*#__PURE__*/_react["default"].createRef()
      }), 'someRef');
    });
    it('fails with React components', function () {
      var A = /*#__PURE__*/function (_React$Component2) {
        _inherits(A, _React$Component2);

        var _super3 = _createSuper(A);

        function A(props) {
          var _this3;

          _classCallCheck(this, A);

          return _possibleConstructorReturn(_this3);
        } // eslint-disable-line


        return A;
      }(_react["default"].Component);

      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: A
      }), 'someRef');
    });
    itIfReact('>= 15.2', 'fails with React pure components', function () {
      var B = /*#__PURE__*/function (_React$PureComponent2) {
        _inherits(B, _React$PureComponent2);

        var _super4 = _createSuper(B);

        function B(props) {
          var _this4;

          _classCallCheck(this, B);

          return _possibleConstructorReturn(_this4);
        } // eslint-disable-line


        return B;
      }(_react["default"].PureComponent);

      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: B
      }), 'someRef');
    });
    it('fails with other non-refs', function () {
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
        someRef: 666
      }), 'someRef');
    });
  });
});
//# sourceMappingURL=ref.js.map