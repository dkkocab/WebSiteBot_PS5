"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _reflect = _interopRequireDefault(require("reflect.ownkeys"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

describe('forbidExtraProps', function () {
  var specialProperty;
  beforeEach(function () {
    var _ownKeys = (0, _reflect["default"])((0, _.forbidExtraProps)({}));

    var _ownKeys2 = _slicedToArray(_ownKeys, 1);

    specialProperty = _ownKeys2[0];
  });

  function assertPasses(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.equal(null);
  }

  function assertFails(validator, element, propName, componentName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, componentName)).to.be.instanceOf(Error);
  }

  it('throws when the given propTypes is not an object', function () {
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(undefined);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)('');
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(42);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(true);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(false);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(function () {});
    }).to["throw"](TypeError);
  });
  it('throws when the given propTypes has the magic property', function () {
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)(_defineProperty({}, specialProperty, true));
    }).to["throw"](TypeError);
  });
  it('returns an object', function () {
    (0, _chai.expect)(_typeof((0, _.forbidExtraProps)({}))).to.equal('object');
  });
  it('adds one extra key', function () {
    var propTypes = {
      a: 1,
      b: 2,
      c: 3
    };
    var result = (0, _.forbidExtraProps)(propTypes);
    (0, _chai.expect)((0, _reflect["default"])(result)).to.eql((0, _reflect["default"])(propTypes).concat(specialProperty));
  });
  it('allows for merging of propTypes that have been processed', function () {
    (0, _chai.expect)(function () {
      return (0, _.forbidExtraProps)((0, _.forbidExtraProps)({}));
    }).not.to["throw"]();
  });
  describe('forbid()', function () {
    var knownProp = 'a';
    var validator;
    beforeEach(function () {
      validator = (0, _.forbidExtraProps)(_defineProperty({}, knownProp, function () {}))[specialProperty];
    });
    it('adds a function', function () {
      (0, _chai.expect)(_typeof(validator)).to.equal('function');
    });
    it('passes when given no props', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), specialProperty, 'Foo');
    });
    it('passes when given only known props', function () {
      assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", _defineProperty({}, knownProp, true)), specialProperty, 'Foo');
    });
    it('fails when given an unknown prop', function () {
      assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", _extends({
        unknown: true
      }, _defineProperty({}, knownProp, true))), specialProperty, 'Foo');
    });
  });
});
//# sourceMappingURL=forbidExtraProps.js.map