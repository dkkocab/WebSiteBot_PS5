'use strict';

var _shallowEqual = require('./shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('shallowEqual', function () {
  it('should work', function () {
    expect((0, _shallowEqual2.default)({}, {})).toBe(true);
    expect((0, _shallowEqual2.default)({ a: 1 }, { a: 1 })).toBe(true);

    expect((0, _shallowEqual2.default)({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect((0, _shallowEqual2.default)({ a: {} }, { a: {} })).toBe(false);
    expect((0, _shallowEqual2.default)({ a: undefined }, { b: undefined })).toBe(false);
  });
}); // @noflow