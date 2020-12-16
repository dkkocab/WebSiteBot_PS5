'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Provider = require('./Provider');

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StripeProvider', function () {
  var stripeMockFn = void 0;
  var stripeMockResult = void 0;

  beforeEach(function () {
    stripeMockResult = {
      elements: jest.fn(),
      createToken: jest.fn(),
      createSource: jest.fn(),
      createPaymentMethod: jest.fn(),
      handleCardPayment: jest.fn()
    };
    stripeMockFn = jest.fn().mockReturnValue(stripeMockResult);
    window.Stripe = stripeMockFn;
  });

  it('requires apiKey or stripe prop', function () {
    expect(function () {
      (0, _enzyme.shallow)(_react2.default.createElement(
        _Provider2.default,
        null,
        _react2.default.createElement('div', null)
      ));
    }).toThrow(/Please pass either 'apiKey' or 'stripe' to StripeProvider./);
  });

  it('throws without stripe.js loaded if using apiKey', function () {
    window.Stripe = null;
    expect(function () {
      return (0, _enzyme.shallow)(_react2.default.createElement(_Provider2.default, { apiKey: 'made_up_key' }));
    }).toThrow('Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements.');
  });

  it('requires not both apiKey and stripe prop', function () {
    expect(function () {
      (0, _enzyme.shallow)(_react2.default.createElement(
        _Provider2.default,
        { apiKey: 'made_up_key', stripe: stripeMockResult },
        _react2.default.createElement('div', null)
      ));
    }).toThrow(/Please pass either 'apiKey' or 'stripe' to StripeProvider, not both./);
  });

  it('throws without children', function () {
    expect(function () {
      return (0, _enzyme.shallow)(_react2.default.createElement(_Provider2.default, { apiKey: 'made_up_key' }));
    }).toThrow('React.Children.only expected to receive a single React element child');
  });

  it('throws with more than one children', function () {
    expect(function () {
      return (0, _enzyme.shallow)(_react2.default.createElement(
        _Provider2.default,
        { apiKey: 'made_up_key' },
        _react2.default.createElement('div', null),
        _react2.default.createElement('div', null)
      ));
    }).toThrow('React.Children.only expected to receive a single React element child');
  });

  it('renders its single child', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'made_up_key' },
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement('input', null)
      )
    ));

    expect(wrapper.html()).toBe('<form><input/></form>');
  });

  it('initializes Stripe with apiKey and empty options', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'made_up_key' },
      _react2.default.createElement('form', null)
    ));
    expect(stripeMockFn).toHaveBeenCalledWith('made_up_key', {});
  });

  it('initializes Stripe with apiKey and arbitrary props as options', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'made_up_key', foo: 'bar' },
      _react2.default.createElement('form', null)
    ));
    expect(stripeMockFn).toHaveBeenCalledWith('made_up_key', { foo: 'bar' });
  });

  it('provides sync context.stripe if using apiKey', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'made_up_key' },
      _react2.default.createElement('form', null)
    ));
    var childContext = wrapper.instance().getChildContext();
    expect(childContext).toEqual({ stripe: stripeMockResult, tag: 'sync' });
  });

  it('if stripe prop non-null *at mount*, provides sync context', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { stripe: stripeMockResult },
      _react2.default.createElement('form', null)
    ));
    var childContext = wrapper.instance().getChildContext();
    expect(childContext).toEqual({ stripe: stripeMockResult, tag: 'sync' });
  });

  it('if stripe prop null *at mount*, provides async context', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { stripe: null },
      _react2.default.createElement('form', null)
    ));
    var childContext = wrapper.instance().getChildContext();
    expect(childContext).toHaveProperty('addStripeLoadListener');
    expect(childContext).toHaveProperty('tag', 'async');
  });

  it('addStripeLoadListener is called when stripe goes from null -> non-null', function (done) {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { stripe: null },
      _react2.default.createElement('form', null)
    ));

    var childContext = wrapper.instance().getChildContext();
    childContext.addStripeLoadListener(function (stripe) {
      expect(stripe).toEqual(stripeMockResult);
      done();
    });

    wrapper.setProps({ stripe: stripeMockResult });
  });

  it('does not create a new Stripe instance if one exists for the same key', function () {
    window.Stripe = jest.fn(function () {
      return {};
    });

    // First, create the first instance.
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'key_one' },
      _react2.default.createElement('form', null)
    ));
    var childContext = wrapper.instance().getChildContext();
    var keyOneInstance = childContext.stripe;
    expect(keyOneInstance).toBeTruthy();

    // Create another!
    wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'key_one' },
      _react2.default.createElement('form', null)
    ));
    childContext = wrapper.instance().getChildContext();
    expect(childContext.stripe).toBe(keyOneInstance);

    // Create another, but with a different key!
    wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'key_two' },
      _react2.default.createElement('form', null)
    ));
    childContext = wrapper.instance().getChildContext();
    expect(childContext.stripe).not.toBe(keyOneInstance);
  });

  it('warns when trying to change the API key', function () {
    var originalConsoleError = global.console.error;
    var mockConsoleError = jest.fn();
    global.console.error = mockConsoleError;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Provider2.default,
      { apiKey: 'made_up_key' },
      _react2.default.createElement('form', null)
    ));
    wrapper.setProps({ apiKey: 'a_new_key' });
    expect(mockConsoleError).toHaveBeenCalledWith('StripeProvider does not support changing the apiKey parameter.');
    global.console.error = originalConsoleError;
  });
}); // @noflow