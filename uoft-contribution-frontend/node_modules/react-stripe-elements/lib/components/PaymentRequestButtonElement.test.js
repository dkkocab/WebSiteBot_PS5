'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _PaymentRequestButtonElement = require('./PaymentRequestButtonElement');

var _PaymentRequestButtonElement2 = _interopRequireDefault(_PaymentRequestButtonElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PaymentRequestButtonElement', function () {
  var elementMock = void 0;
  var elementsMock = void 0;
  var context = void 0;
  var paymentRequestMock = void 0;
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
    paymentRequestMock = {
      canMakePayment: jest.fn(),
      on: jest.fn(),
      show: jest.fn()
    };
  });

  it('should pass the id to the DOM element', function () {
    var id = 'my-id';
    var element = (0, _enzyme.shallow)(_react2.default.createElement(_PaymentRequestButtonElement2.default, {
      id: id,
      paymentRequest: paymentRequestMock
    }), { context: context });
    expect(element.find('#' + id)).toBeTruthy();
  });

  it('should pass the className to the DOM element', function () {
    var className = 'my-class';
    var element = (0, _enzyme.shallow)(_react2.default.createElement(_PaymentRequestButtonElement2.default, {
      className: className,
      paymentRequest: paymentRequestMock
    }), { context: context });
    expect(element.first().hasClass(className)).toBeTruthy();
  });

  it('should call onReady', function () {
    var onReadyMock = jest.fn();

    (0, _enzyme.mount)(_react2.default.createElement(_PaymentRequestButtonElement2.default, {
      onReady: onReadyMock,
      paymentRequest: paymentRequestMock
    }), { context: context });

    expect(elementMock.on.mock.calls[0][0]).toBe('ready');
    expect(onReadyMock).toHaveBeenCalledWith(elementMock);
  });

  it('should not register the Element', function () {
    var element = (0, _enzyme.mount)(_react2.default.createElement(_PaymentRequestButtonElement2.default, { paymentRequest: paymentRequestMock }), { context: context });

    expect(context.registerElement).toHaveBeenCalledTimes(0);

    element.unmount();
    expect(elementMock.destroy).toHaveBeenCalledTimes(1);
    expect(context.unregisterElement).toHaveBeenCalledTimes(0);
  });

  it('should update the Element when props change', function () {
    var style = {
      paymentRequestButton: {
        theme: 'dark',
        height: '64px',
        type: 'donate'
      }
    };
    var element = (0, _enzyme.mount)(_react2.default.createElement(_PaymentRequestButtonElement2.default, {
      paymentRequest: paymentRequestMock,
      style: style
    }), { context: context });

    expect(elementMock.update).toHaveBeenCalledTimes(0);
    element.setProps({ style: style });
    expect(elementMock.update).toHaveBeenCalledTimes(0);

    element.setProps({
      style: { paymentRequestButton: { height: '64px' } }
    });
    expect(elementMock.update).toHaveBeenCalledTimes(1);
    expect(elementMock.update).toHaveBeenCalledWith({
      style: { paymentRequestButton: { height: '64px' } }
    });
  });

  it('should warn that the paymentRequest prop can not be changed', function () {
    var style = {
      paymentRequestButton: {
        theme: 'dark',
        height: '64px',
        type: 'donate'
      }
    };
    var element = (0, _enzyme.mount)(_react2.default.createElement(_PaymentRequestButtonElement2.default, {
      paymentRequest: paymentRequestMock,
      style: style
    }), { context: context });

    expect(elementMock.update).toHaveBeenCalledTimes(0);

    var originalConsoleWarn = global.console.warn;
    var mockConsoleWarn = jest.fn();
    global.console.warn = mockConsoleWarn;

    element.setProps({
      paymentRequest: {
        canMakePayment: jest.fn(),
        on: jest.fn(),
        show: jest.fn()
      }
    });
    expect(elementMock.update).toHaveBeenCalledTimes(0);
    expect(mockConsoleWarn).toHaveBeenCalledWith('Unsupported prop change: paymentRequest is not a customizable property.');

    global.console.warn = originalConsoleWarn;
  });
}); // @noflow