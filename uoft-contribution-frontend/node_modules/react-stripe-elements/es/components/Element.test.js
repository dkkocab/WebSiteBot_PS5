'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Element', function () {
  var elementMock = void 0;
  var elementsMock = void 0;
  var context = void 0;
  beforeEach(function () {
    elementMock = {
      mount: jest.fn(),
      destroy: jest.fn(),
      on: jest.fn(function (event, cb) {
        if (event === 'ready') {
          cb();
        }
      }),
      update: jest.fn()
    };
    elementsMock = {
      create: jest.fn().mockReturnValue(elementMock)
    };
    context = {
      addElementsLoadListener: function addElementsLoadListener(fn) {
        return fn(elementsMock);
      },
      registerElement: jest.fn(),
      unregisterElement: jest.fn()
    };
  });

  it('should pass id to the DOM element', function () {
    var id = 'my-id';
    var CardElement = (0, _Element2.default)('card', {
      impliedTokenType: 'card',
      impliedSourceType: 'card',
      impliedPaymentMethodType: 'card'
    });
    var element = (0, _enzyme.shallow)(_react2.default.createElement(CardElement, { id: id }), { context: context });
    expect(element.find('#my-id').length).toBe(1);
  });

  it('should pass className to the DOM element', function () {
    var className = 'my-class';
    var CardElement = (0, _Element2.default)('card', {
      impliedTokenType: 'card',
      impliedSourceType: 'card',
      impliedPaymentMethodType: 'card'
    });
    var element = (0, _enzyme.shallow)(_react2.default.createElement(CardElement, { className: className }), { context: context });
    expect(element.first().hasClass(className)).toBeTruthy();
  });

  it('should call the right hooks for a registered Element', function () {
    var TestElement = (0, _Element2.default)('test', {
      impliedTokenType: 'foo',
      impliedSourceType: 'bar',
      impliedPaymentMethodType: 'baz'
    });
    var element = (0, _enzyme.mount)(_react2.default.createElement(TestElement, { onChange: jest.fn() }), { context: context });

    expect(context.registerElement).toHaveBeenCalledTimes(1);
    expect(context.registerElement).toHaveBeenCalledWith(elementMock, 'foo', 'bar', 'baz');

    element.unmount();
    expect(elementMock.destroy).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledWith(elementMock);
  });

  it('should call the right hooks for a non-auto-detected Element', function () {
    var TestElement = (0, _Element2.default)('test');
    var element = (0, _enzyme.mount)(_react2.default.createElement(TestElement, { onChange: jest.fn() }), { context: context });

    expect(context.registerElement).toHaveBeenCalledTimes(1);
    expect(context.registerElement).toHaveBeenCalledWith(elementMock, undefined, undefined, undefined);

    element.unmount();
    expect(elementMock.destroy).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledWith(elementMock);
  });

  it('should call onReady', function () {
    var CardElement = (0, _Element2.default)('card', {
      impliedTokenType: 'card',
      impliedSourceType: 'card',
      impliedPaymentMethodType: 'card'
    });
    var onReadyMock = jest.fn();

    (0, _enzyme.mount)(_react2.default.createElement(CardElement, { onReady: onReadyMock }), {
      context: context
    });

    expect(elementMock.on.mock.calls[0][0]).toBe('ready');
    expect(onReadyMock).toHaveBeenCalledWith(elementMock);
  });

  it('should update the Element when props change', function () {
    var style = {
      base: {
        fontSize: '16px'
      }
    };
    var TestElement = (0, _Element2.default)('test', {
      impliedTokenType: 'foo',
      impliedSourceType: 'bar',
      impliedPaymentMethodType: 'card'
    });
    var element = (0, _enzyme.mount)(_react2.default.createElement(TestElement, { onChange: jest.fn(), style: style }), {
      context: context
    });

    expect(elementMock.update).toHaveBeenCalledTimes(0);
    element.setProps({ style: style, onChange: jest.fn() });
    expect(elementMock.update).toHaveBeenCalledTimes(0);

    element.setProps({
      style: { base: { fontSize: '20px' } },
      onChange: jest.fn()
    });
    expect(elementMock.update).toHaveBeenCalledTimes(1);
    expect(elementMock.update).toHaveBeenCalledWith({
      style: { base: { fontSize: '20px' } }
    });
  });

  it("re-rendering with new props should still work if addElementsLoadListener hasn't fired yet", function () {
    // no-op function so that any registered listeners are never woken up
    context.addElementsLoadListener = function () {};

    var placeholder = 'hello';
    var CardElement = (0, _Element2.default)('card', {
      impliedTokenType: 'card',
      impliedSourceType: 'card',
      impliedPaymentMethodType: 'card'
    });
    var element = (0, _enzyme.shallow)(_react2.default.createElement(CardElement, { placeholder: placeholder }), {
      context: context
    });

    expect(function () {
      return element.setProps({ placeholder: 'placeholder' });
    }).not.toThrow();
  });

  it('should have a displayName based on the type argument', function () {
    var TestElement = (0, _Element2.default)('test');
    expect(TestElement.displayName).toEqual('TestElement');
  });

  it('Do not create element if component is not mounted', function () {
    var listeners = [];
    context.addElementsLoadListener = function (fn) {
      return listeners.push(fn);
    };

    var CardElement = (0, _Element2.default)('card', {
      impliedTokenType: 'card',
      impliedSourceType: 'card',
      impliedPaymentMethodType: 'card'
    });
    var element = (0, _enzyme.mount)(_react2.default.createElement(CardElement, null), { context: context });
    element.unmount();

    // ensure listener was called on mount
    expect(listeners).toHaveLength(1);
    // simulate load complete after unmount
    listeners[0](elementsMock);
    // listener should do nothing since it's unmounted
    expect(elementsMock.create).toHaveBeenCalledTimes(0);
  });
}); // @noflow