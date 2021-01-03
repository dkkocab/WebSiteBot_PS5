"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('stringEndsWith', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.stringEndsWith)(' '))).to.equal('function');
  });
  it('throws when given a non-string', function () {
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)();
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)(null);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)(true);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)(false);
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)({});
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)([]);
    }).to["throw"](TypeError);
  });
  it('throws when given an empty string', function () {
    (0, _chai.expect)(function () {
      return (0, _.stringEndsWith)('');
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"stringEndsWith" test')).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    (0, _chai.expect)((0, _callValidator["default"])(validator, element, propName, '"stringEndsWith" test')).to.be.instanceOf(Error);
  }

  it('behaves when absent', function () {
    var validator = (0, _.stringEndsWith)('.png');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", null), 'a');
  });
  it('fails when not a string', function () {
    var validator = (0, _.stringEndsWith)('.png');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: true
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: false
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: 42
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: []
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: {}
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: function a() {}
    }), 'a');
  });
  it('passes when the string ends with the requested substring', function () {
    var validator = (0, _.stringEndsWith)('foo');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "afoo"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "barfoo"
    }), 'a');
    assertPasses(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "bar foo"
    }), 'a');
  });
  it('fails when the string does not end with the requested substring', function () {
    var validator = (0, _.stringEndsWith)('.png');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "IMAGE.PNG"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "png.PNG"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: "image.jpg"
    }), 'a');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ".pn"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "IMAGE.PNG"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "png.PNG"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "image.jpg"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: ".pn"
    }), 'a');
  });
  it('fails when the string matches the requested substring', function () {
    var validator = (0, _.stringEndsWith)('.png');
    assertFails(validator, /*#__PURE__*/_react["default"].createElement("div", {
      a: ".png"
    }), 'a');
    assertFails(validator.isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: ".png"
    }), 'a');
  });
});
//# sourceMappingURL=stringEndsWith.js.map