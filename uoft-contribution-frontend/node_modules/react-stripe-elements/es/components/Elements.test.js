'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Elements = require('./Elements');

var _Elements2 = _interopRequireDefault(_Elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Elements', function () {
  var stripeMock = void 0;
  var elementsMock = {};

  beforeEach(function () {
    stripeMock = {
      elements: jest.fn(function () {
        throw new Error('elements() should not be called twice in this test.');
      }).mockReturnValueOnce(elementsMock),
      createToken: jest.fn(),
      createSource: jest.fn(),
      createPaymentMethod: jest.fn()
    };
  });

  it('creates the context', function () {
    var syncContext = {
      tag: 'sync',
      stripe: stripeMock
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Elements2.default,
      null,
      _react2.default.createElement('div', null)
    ), { context: syncContext });
    var childContext = wrapper.instance().getChildContext();
    expect(Object.keys(childContext)).toEqual(['addElementsLoadListener', 'registerElement', 'unregisterElement', 'getRegisteredElements', 'elements']);
  });

  it('with sync context: addElementsLoadListener returns the same elements instance ', function () {
    var syncContext = {
      tag: 'sync',
      stripe: stripeMock
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Elements2.default,
      null,
      _react2.default.createElement('div', null)
    ), { context: syncContext });
    var childContext = wrapper.instance().getChildContext();

    var mockCallback = jest.fn();
    childContext.addElementsLoadListener(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenLastCalledWith(elementsMock);
    childContext.addElementsLoadListener(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith(elementsMock);
  });

  it('with sync context, elements is instantiated right away', function () {
    var syncContext = {
      tag: 'sync',
      stripe: stripeMock
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Elements2.default,
      null,
      _react2.default.createElement('div', null)
    ), { context: syncContext });
    var childContext = wrapper.instance().getChildContext();

    expect(childContext.elements).not.toBe(null);
  });

  it('with async context: addElementsLoadListener returns the same elements instance ', function () {
    var asyncContext = {
      tag: 'async',
      addStripeLoadListener: jest.fn(function (callback) {
        return setTimeout(function () {
          return callback(stripeMock);
        }, 0);
      })
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Elements2.default,
      null,
      _react2.default.createElement('div', null)
    ), { context: asyncContext });
    var childContext = wrapper.instance().getChildContext();

    expect(childContext.elements).toBe(null);

    var a = new Promise(function (resolve) {
      return childContext.addElementsLoadListener(function (first) {
        expect(first).toEqual(elementsMock);
        resolve();
      });
    });
    var b = new Promise(function (resolve) {
      return childContext.addElementsLoadListener(function (second) {
        expect(second).toEqual(elementsMock);
        resolve();
      });
    });
    return Promise.all([a, b]);
  });
}); // @noflow