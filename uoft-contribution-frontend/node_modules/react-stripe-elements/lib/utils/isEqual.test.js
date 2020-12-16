'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // @noflow


var _isEqual = require('./isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isEqual', function () {
  [['a', 'a'], [100, 100], [false, false], [undefined, undefined], [null, null], [{}, {}], [{ a: 10 }, { a: 10 }], [{ a: null }, { a: null }], [{ a: undefined }, { a: undefined }], [[], []], [['a', 'b', 'c'], ['a', 'b', 'c']], [['a', { inner: [12] }, 'c'], ['a', { inner: [12] }, 'c']], [{ a: { nested: { more: [1, 2, 3] } } }, { a: { nested: { more: [1, 2, 3] } } }]].forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        left = _ref2[0],
        right = _ref2[1];

    it('should should return true for isEqual(' + JSON.stringify(left) + ', ' + JSON.stringify(right) + ')', function () {
      expect((0, _isEqual2.default)(left, right)).toBe(true);
      expect((0, _isEqual2.default)(right, left)).toBe(true);
    });
  });

  [['a', 'b'], ['0', 0], [new Date(1), {}], [false, ''], [false, true], [null, undefined], [{}, []], [/foo/, /foo/], [new Date(1), new Date(1)], [{ a: 10 }, { a: 11 }], [['a', 'b', 'c'], ['a', 'b', 'c', 'd']], [['a', 'b', 'c', 'd'], ['a', 'b', 'c']], [['a', { inner: [12] }, 'c'], ['a', { inner: [null] }, 'c']], [{ a: { nested: { more: [1, 2, 3] } } }, { b: { nested: { more: [1, 2, 3] } } }]].forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        left = _ref4[0],
        right = _ref4[1];

    it('should should return false for isEqual(' + JSON.stringify(left) + ', ' + JSON.stringify(right) + ')', function () {
      expect((0, _isEqual2.default)(left, right)).toBe(false);
      expect((0, _isEqual2.default)(right, left)).toBe(false);
    });
  });
});