"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

var _ifReact = _interopRequireDefault(require("enzyme-adapter-react-helper/build/ifReact"));

var _getComponentName = _interopRequireDefault(require("../../build/helpers/getComponentName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

describe('getComponentName', function () {
  it('given a string, returns the string', function () {
    (0, _chai.expect)((0, _getComponentName["default"])('foo')).to.equal('foo');
  });
  it('given a function, returns displayName or name', function () {
    function Foo() {}

    (0, _chai.expect)((0, _getComponentName["default"])(Foo)).to.equal(Foo.name);
    Foo.displayName = 'Bar';
    (0, _chai.expect)((0, _getComponentName["default"])(Foo)).to.equal(Foo.displayName);
  });
  itIfReact('>= 16.6', 'given a memo, returns the name or displayName', function () {
    function Foo() {}

    var FooMemo = /*#__PURE__*/_react["default"].memo(Foo);

    (0, _chai.expect)((0, _getComponentName["default"])(FooMemo)).to.equal('Foo');
    Foo.displayName = 'Bar';

    var NamedFooMemo = /*#__PURE__*/_react["default"].memo(Foo);

    (0, _chai.expect)((0, _getComponentName["default"])(NamedFooMemo)).to.equal('Bar');

    var AnonymousFoo = function AnonymousFoo() {};

    var AnonymousFooMemo = /*#__PURE__*/_react["default"].memo(AnonymousFoo);

    (0, _chai.expect)((0, _getComponentName["default"])(AnonymousFooMemo)).to.equal('AnonymousFoo');
  });
  it('given anything else, returns null', function () {
    (0, _chai.expect)((0, _getComponentName["default"])()).to.equal(null);
    (0, _chai.expect)((0, _getComponentName["default"])(null)).to.equal(null);
    (0, _chai.expect)((0, _getComponentName["default"])(undefined)).to.equal(null);
    (0, _chai.expect)((0, _getComponentName["default"])([])).to.equal(null);
    (0, _chai.expect)((0, _getComponentName["default"])({})).to.equal(null);
    (0, _chai.expect)((0, _getComponentName["default"])(42)).to.equal(null);
    (0, _chai.expect)((0, _getComponentName["default"])(true)).to.equal(null);
  });
});
//# sourceMappingURL=getComponentName.js.map