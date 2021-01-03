"use strict";

var _chai = require("chai");

var _mockEnv = require("mock-env");

var _mocks = _interopRequireDefault(require("../build/mocks"));

var _build = _interopRequireDefault(require("../build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function requireOnce(path) {
  var mod = require(path); // eslint-disable-line import/no-dynamic-require, global-require


  delete require.cache[require.resolve(path)];
  return mod;
}

describe('"main" entry point', function () {
  it('requires implementations in non-production', function () {
    ['', 'development', 'test'].forEach(function (NODE_ENV) {
      var main = (0, _mockEnv.morph)(function () {
        return requireOnce('..');
      }, {
        NODE_ENV: NODE_ENV
      });
      (0, _chai.expect)(main).to.equal(_build["default"]);
    });
  });
  it('requires mocks in production', function () {
    var main = (0, _mockEnv.morph)(function () {
      return requireOnce('..');
    }, {
      NODE_ENV: 'production'
    });
    (0, _chai.expect)(main).to.equal(_mocks["default"]);
  });
});
//# sourceMappingURL=index.js.map