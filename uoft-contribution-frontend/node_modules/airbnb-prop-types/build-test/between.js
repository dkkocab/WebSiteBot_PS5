"use strict";

var _chai = require("chai");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _callValidator = _interopRequireDefault(require("./_callValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('between', function () {
  it('returns a function', function () {
    (0, _chai.expect)(_typeof((0, _.between)({
      gt: 0,
      lt: 1
    }))).to.equal('function');
  });
  it('throws with non-number values', function () {
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gt: 'foo'
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lt: 'foo'
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gte: 'foo'
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lte: 'foo'
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gt: true
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lt: true
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gte: true
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lte: true
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gt: []
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lt: []
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gte: []
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lte: []
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gt: {}
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lt: {}
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        gte: {}
      });
    }).to["throw"](TypeError);
    (0, _chai.expect)(function () {
      return (0, _.between)({
        lte: {}
      });
    }).to["throw"](TypeError);
  });

  function assertPasses(validator, element, propName) {
    var error = (0, _callValidator["default"])(validator, element, propName, '"between" test');
    (0, _chai.expect)(error).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    var error = (0, _callValidator["default"])(validator, element, propName, '"between" test');
    (0, _chai.expect)(error).to.be.instanceOf(Error);
  }

  it('fails when the prop value is not a number', function () {
    assertFails((0, _.between)({
      gte: 1,
      lte: 3
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: "1"
    }), 'a');
    assertFails((0, _.between)({
      gte: 1,
      lte: 3
    }).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      a: "1"
    }), 'a');
  });
  it('passes when inside the range', function () {
    assertPasses((0, _.between)({
      gte: -1,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertPasses((0, _.between)({
      gte: -1
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertPasses((0, _.between)({
      gte: -1,
      lte: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 2
    }), 'a');
    assertPasses((0, _.between)({
      lte: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 2
    }), 'a');
    assertPasses((0, _.between)({
      gt: -1,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: -0
    }), 'a');
    assertPasses((0, _.between)({
      gt: -1,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 0
    }), 'a');
    assertPasses((0, _.between)({
      gt: -1,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
  });
  it('fails when outside the range', function () {
    assertFails((0, _.between)({
      gt: -1,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertFails((0, _.between)({
      gt: -1
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: -1
    }), 'a');
    assertFails((0, _.between)({
      gt: 1,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 2
    }), 'a');
    assertFails((0, _.between)({
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 2
    }), 'a');
    assertFails((0, _.between)({
      gt: 0,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: -0
    }), 'a');
    assertFails((0, _.between)({
      gt: 0,
      lt: 2
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 0
    }), 'a');
    assertFails((0, _.between)({
      gt: -1,
      lt: 1
    }), /*#__PURE__*/_react["default"].createElement("div", {
      a: 1
    }), 'a');
  });
  it('fails with thunks that return non-numbers', function () {
    assertFails((0, _.between)({
      gt: function gt() {
        return false;
      },
      lt: function lt() {
        return [];
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      value: 3
    }), 'value');
    assertFails((0, _.between)({
      gt: function gt() {
        return false;
      },
      lt: function lt() {
        return [];
      }
    }).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      value: 3
    }), 'value');
  });
  it('works with functions', function () {
    assertPasses((0, _.between)({
      gt: function gt(_ref) {
        var min = _ref.min;
        return min;
      },
      lt: function lt(_ref2) {
        var max = _ref2.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 2
    }), 'value');
    assertPasses((0, _.between)({
      gt: function gt(_ref3) {
        var min = _ref3.min;
        return min;
      },
      lt: function lt(_ref4) {
        var max = _ref4.max;
        return max;
      }
    }).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 2
    }), 'value');
    assertPasses((0, _.between)({
      gte: function gte(_ref5) {
        var min = _ref5.min;
        return min;
      },
      lte: function lte(_ref6) {
        var max = _ref6.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 2
    }), 'value');
    assertPasses((0, _.between)({
      gte: function gte(_ref7) {
        var min = _ref7.min;
        return min;
      },
      lte: function lte(_ref8) {
        var max = _ref8.max;
        return max;
      }
    }).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 2
    }), 'value');
    assertPasses((0, _.between)({
      gte: 1,
      lte: function lte(_ref9) {
        var max = _ref9.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      max: 3,
      value: 2
    }), 'value');
    assertFails((0, _.between)({
      gte: function gte(_ref10) {
        var min = _ref10.min;
        return min;
      },
      lte: function lte(_ref11) {
        var max = _ref11.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 0
    }), 'value');
    assertFails((0, _.between)({
      gte: function gte(_ref12) {
        var min = _ref12.min;
        return min;
      },
      lte: function lte(_ref13) {
        var max = _ref13.max;
        return max;
      }
    }).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 0
    }), 'value');
    assertFails((0, _.between)({
      gte: function gte(_ref14) {
        var min = _ref14.min;
        return min;
      },
      lte: function lte(_ref15) {
        var max = _ref15.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 4
    }), 'value');
    assertFails((0, _.between)({
      gte: function gte(_ref16) {
        var min = _ref16.min;
        return min;
      },
      lte: function lte(_ref17) {
        var max = _ref17.max;
        return max;
      }
    }).isRequired, /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 4
    }), 'value');
    assertFails((0, _.between)({
      gt: function gt(_ref18) {
        var min = _ref18.min;
        return min;
      },
      lt: function lt(_ref19) {
        var max = _ref19.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 1
    }), 'value');
    assertFails((0, _.between)({
      gt: function gt(_ref20) {
        var min = _ref20.min;
        return min;
      },
      lt: function lt(_ref21) {
        var max = _ref21.max;
        return max;
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      min: 1,
      max: 3,
      value: 3
    }), 'value');
  });
});
//# sourceMappingURL=between.js.map