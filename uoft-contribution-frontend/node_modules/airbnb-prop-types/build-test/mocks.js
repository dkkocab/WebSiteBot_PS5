"use strict";

var _chai = require("chai");

var _object = _interopRequireDefault(require("object.entries"));

var _object2 = _interopRequireDefault(require("object.values"));

var _mocks = _interopRequireDefault(require("../build/mocks"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('mocks', function () {
  it('has the same keys', function () {
    (0, _chai.expect)(Object.keys(_mocks["default"])).to.eql(Object.keys(_["default"]));
  });
  it('matches the types', function () {
    var mockTypes = (0, _object2["default"])(_mocks["default"]).map(function (x) {
      return _typeof(x);
    });
    var implementationTypes = (0, _object2["default"])(_["default"]).map(function (x) {
      return _typeof(x);
    });
    (0, _chai.expect)(mockTypes).to.eql(implementationTypes);
  });
  it('provides a thunk for a validator function', function () {
    (0, _object["default"])(_mocks["default"]).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          mock = _ref2[1];

      var validator = mock();
      var isSpecialCase = name === 'forbidExtraProps' || name === 'nonNegativeInteger';
      var expectedType = isSpecialCase ? 'object' : 'function';
      (0, _chai.expect)([name, _typeof(validator)]).to.eql([name, expectedType]);

      if (!isSpecialCase) {
        (0, _chai.expect)(validator).not.to["throw"]();
      }
    });
  });
  it('provides a validator with isRequired', function () {
    (0, _object["default"])(_mocks["default"]).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          mock = _ref4[1];

      if (name === 'forbidExtraProps') return;
      var validator = name === 'nonNegativeInteger' ? mock : mock();
      (0, _chai.expect)([name, _typeof(validator.isRequired)]).to.eql([name, 'function']);
    });
  });
});
//# sourceMappingURL=mocks.js.map