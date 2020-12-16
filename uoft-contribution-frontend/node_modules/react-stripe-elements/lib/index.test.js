'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @noflow


var PureWrapper = function (_React$PureComponent) {
  _inherits(PureWrapper, _React$PureComponent);

  function PureWrapper() {
    _classCallCheck(this, PureWrapper);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  PureWrapper.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.children
    );
  };

  return PureWrapper;
}(_react2.default.PureComponent);

describe('index', function () {
  var elementMock = void 0;
  var elementsMock = void 0;
  var stripeMock = void 0;
  var rawElementMock = void 0;

  beforeEach(function () {
    elementMock = {
      mount: jest.fn(),
      destroy: jest.fn(),
      on: jest.fn(),
      update: jest.fn()
    };
    elementsMock = {
      create: jest.fn().mockReturnValue(elementMock)
    };
    rawElementMock = {
      _frame: {
        id: 'id'
      },
      _componentName: 'name'
    };
    stripeMock = {
      elements: jest.fn().mockReturnValue(elementsMock),
      createToken: jest.fn(),
      createSource: jest.fn(),
      createPaymentMethod: jest.fn(),
      handleCardPayment: jest.fn(),
      handleCardSetup: jest.fn()
    };

    // jest.spyOn(console, 'error');
    // console.error.mockImplementation(() => {});

    window.Stripe = jest.fn().mockReturnValue(stripeMock);
  });

  afterEach(function () {
    // console.error.mockRestore();
  });

  var WrappedCheckout = function WrappedCheckout(_onSubmit) {
    var MyCheckout = function MyCheckout(props) {
      return _react2.default.createElement(
        'form',
        {
          onSubmit: function onSubmit(ev) {
            ev.preventDefault();
            _onSubmit(props);
          }
        },
        props.children,
        _react2.default.createElement(
          'button',
          null,
          'Pay'
        )
      );
    };
    return (0, _index.injectStripe)(MyCheckout);
  };

  it('smoke test', function () {
    var Checkout = WrappedCheckout(function (props) {
      return props.stripe.createToken();
    });
    var app = (0, _enzyme.mount)(_react2.default.createElement(
      _index.StripeProvider,
      { apiKey: 'pk_test_xxx' },
      _react2.default.createElement(
        _index.Elements,
        null,
        _react2.default.createElement(
          Checkout,
          null,
          'Hello world',
          _react2.default.createElement(_index.CardElement, null)
        )
      )
    ));
    expect(app.text()).toMatch(/Hello world/);
  });

  it("shouldn't choke on pure components", function () {
    var Checkout = WrappedCheckout(function (props) {
      return props.stripe.createToken();
    });
    var app = (0, _enzyme.mount)(_react2.default.createElement(
      _index.StripeProvider,
      { apiKey: 'pk_test_xxx' },
      _react2.default.createElement(
        _index.Elements,
        null,
        _react2.default.createElement(
          PureWrapper,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      )
    ));

    // Prevent the console.errors to keep the test output clean
    jest.spyOn(console, 'error');
    console.error.mockImplementation(function () {});

    expect(function () {
      return app.find('form').simulate('submit');
    }).not.toThrow();

    console.error.mockRestore();
  });

  describe('createToken', function () {
    it('should be called when set up properly', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createToken();
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createToken).toHaveBeenCalledTimes(1);
      expect(stripeMock.createToken).toHaveBeenCalledWith(elementMock, {});
    });

    it('should be called when set up properly (split)', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createToken();
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardNumberElement, null),
            _react2.default.createElement(_index.CardExpiryElement, null),
            _react2.default.createElement(_index.CardCVCElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createToken).toHaveBeenCalledTimes(1);
      expect(stripeMock.createToken).toHaveBeenCalledWith(elementMock, {});
    });

    it('should be callable for other token types', function () {
      var Checkout = WrappedCheckout(function (props) {
        props.stripe.createToken('bank_account', { some: 'data' });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world'
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createToken).toHaveBeenCalledTimes(1);
      expect(stripeMock.createToken).toHaveBeenCalledWith('bank_account', {
        some: 'data'
      });
    });
  });

  describe('createSource', function () {
    it('should be called when set up properly', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createSource({ type: 'card' });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createSource).toHaveBeenCalledTimes(1);
      expect(stripeMock.createSource).toHaveBeenCalledWith(elementMock, {
        type: 'card'
      });
    });

    it('should take additional parameters', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createSource({
          type: 'card',
          owner: { name: 'Michelle' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createSource).toHaveBeenCalledTimes(1);
      expect(stripeMock.createSource).toHaveBeenCalledWith(elementMock, {
        type: 'card',
        owner: { name: 'Michelle' }
      });
    });

    it('should be callable when no Element is found', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createSource({
          type: 'card',
          token: 'tok_xxx'
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world'
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createSource).toHaveBeenCalledTimes(1);
      expect(stripeMock.createSource).toHaveBeenCalledWith({
        type: 'card',
        token: 'tok_xxx'
      });
    });

    it('should be callable for other source types', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createSource({
          type: 'three_d_secure',
          three_d_secure: { foo: 'bar' }
        });
      });

      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world'
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createSource).toHaveBeenCalledTimes(1);
      expect(stripeMock.createSource).toHaveBeenCalledWith({
        type: 'three_d_secure',
        three_d_secure: { foo: 'bar' }
      });
    });
  });

  describe('createPaymentMethod', function () {
    it('should be called when set up properly', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createPaymentMethod('card');
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledTimes(1);
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledWith('card', elementMock);
    });

    it('should take additional parameters', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createPaymentMethod('card', {
          billing_details: { name: 'Michelle' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledTimes(1);
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledWith('card', elementMock, {
        billing_details: { name: 'Michelle' }
      });
    });

    it('should be callable when no Element is found', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createPaymentMethod('card', {
          token: 'tok_xxx'
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world'
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledTimes(1);
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledWith('card', {
        token: 'tok_xxx'
      });
    });

    it('should be callable when an Element is passed in', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.createPaymentMethod('card', rawElementMock, {
          billing_details: { name: 'David' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledTimes(1);
      expect(stripeMock.createPaymentMethod).toHaveBeenCalledWith('card', rawElementMock, {
        billing_details: { name: 'David' }
      });
    });
  });

  describe('handleCardPayment', function () {
    it('should be called when set up properly', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardPayment('client_secret');
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardPayment).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardPayment).toHaveBeenCalledWith('client_secret', elementMock);
    });

    it('should take additional parameters', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardPayment('client_secret', {
          billing_details: { name: 'Michelle' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardPayment).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardPayment).toHaveBeenCalledWith('client_secret', elementMock, {
        billing_details: { name: 'Michelle' }
      });
    });

    it('should be callable when no Element is found', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardPayment('client_secret', {
          payment_method: 'pm_xxx'
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world'
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardPayment).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardPayment).toHaveBeenCalledWith('client_secret', {
        payment_method: 'pm_xxx'
      });
    });

    it('should be callable when an Element is passed in', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardPayment('client_secret', rawElementMock, {
          billing_details: { name: 'David' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardPayment).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardPayment).toHaveBeenCalledWith('client_secret', rawElementMock, {
        billing_details: { name: 'David' }
      });
    });
  });

  describe('handleCardSetup', function () {
    it('should be called when set up properly', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardSetup('client_secret');
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardSetup).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardSetup).toHaveBeenCalledWith('client_secret', elementMock);
    });

    it('should take additional parameters', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardSetup('client_secret', {
          billing_details: { name: 'Michelle' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardSetup).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardSetup).toHaveBeenCalledWith('client_secret', elementMock, {
        billing_details: { name: 'Michelle' }
      });
    });

    it('should be callable when no Element is found', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardSetup('client_secret', {
          payment_method: 'pm_xxx'
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world'
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardSetup).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardSetup).toHaveBeenCalledWith('client_secret', {
        payment_method: 'pm_xxx'
      });
    });

    it('should be callable when an Element is passed in', function () {
      var Checkout = WrappedCheckout(function (props) {
        return props.stripe.handleCardSetup('client_secret', rawElementMock, {
          billing_details: { name: 'David' }
        });
      });
      var app = (0, _enzyme.mount)(_react2.default.createElement(
        _index.StripeProvider,
        { apiKey: 'pk_test_xxx' },
        _react2.default.createElement(
          _index.Elements,
          null,
          _react2.default.createElement(
            Checkout,
            null,
            'Hello world',
            _react2.default.createElement(_index.CardElement, null)
          )
        )
      ));
      app.find('form').simulate('submit');
      expect(stripeMock.handleCardSetup).toHaveBeenCalledTimes(1);
      expect(stripeMock.handleCardSetup).toHaveBeenCalledWith('client_secret', rawElementMock, {
        billing_details: { name: 'David' }
      });
    });
  });

  describe('errors', function () {
    beforeEach(function () {
      // Prevent the console.error to keep the test output clean
      jest.spyOn(console, 'error');
      console.error.mockImplementation(function () {});
    });

    afterEach(function () {
      console.error.mockRestore();
    });

    describe('createSource', function () {
      it('should throw if no source type is specified', function () {
        var Checkout = WrappedCheckout(function (props) {
          return props.stripe.createSource({});
        });
        var app = (0, _enzyme.mount)(_react2.default.createElement(
          _index.StripeProvider,
          { apiKey: 'pk_test_xxx' },
          _react2.default.createElement(
            _index.Elements,
            null,
            _react2.default.createElement(
              Checkout,
              null,
              'Hello world',
              _react2.default.createElement(_index.CardElement, null)
            )
          )
        ));
        expect(function () {
          return app.find('form').simulate('submit');
        }).toThrowError(/Invalid Source type/);
      });
    });

    describe('createPaymentMethod', function () {
      it('should throw if no PaymentMethod type is specified', function () {
        var Checkout = WrappedCheckout(function (props) {
          return props.stripe.createPaymentMethod();
        });
        var app = (0, _enzyme.mount)(_react2.default.createElement(
          _index.StripeProvider,
          { apiKey: 'pk_test_xxx' },
          _react2.default.createElement(
            _index.Elements,
            null,
            _react2.default.createElement(
              Checkout,
              null,
              'Hello world',
              _react2.default.createElement(_index.CardElement, null)
            )
          )
        ));
        expect(function () {
          return app.find('form').simulate('submit');
        }).toThrowError(/Invalid PaymentMethod type/);
      });

      it('should throw if no element corresponding to Payment Method type is found', function () {
        var Checkout = WrappedCheckout(function (props) {
          return props.stripe.createPaymentMethod('card');
        });
        var app = (0, _enzyme.mount)(_react2.default.createElement(
          _index.StripeProvider,
          { apiKey: 'pk_test_xxx' },
          _react2.default.createElement(
            _index.Elements,
            null,
            _react2.default.createElement(
              Checkout,
              null,
              'Hello world',
              _react2.default.createElement(_index.IbanElement, null)
            )
          )
        ));
        expect(function () {
          return app.find('form').simulate('submit');
        }).toThrowError(/Could not find an Element/);
      });
    });

    describe('handleCardPayment', function () {
      it('should throw if no client secret is specified', function () {
        var Checkout = WrappedCheckout(function (props) {
          return props.stripe.handleCardPayment();
        });
        var app = (0, _enzyme.mount)(_react2.default.createElement(
          _index.StripeProvider,
          { apiKey: 'pk_test_xxx' },
          _react2.default.createElement(
            _index.Elements,
            null,
            _react2.default.createElement(
              Checkout,
              null,
              'Hello world',
              _react2.default.createElement(_index.CardElement, null)
            )
          )
        ));
        expect(function () {
          return app.find('form').simulate('submit');
        }).toThrowError(/Invalid PaymentIntent client secret/);
      });
    });

    describe('createToken', function () {
      it('should throw when not in Elements', function () {
        // Prevent the expected console.error from react to keep the test output clean
        var originalConsoleError = global.console.error;
        global.console.error = function (msg) {
          if (!msg.startsWith('Warning: Failed context type: The context `getRegisteredElements` is marked as required')) {
            originalConsoleError(msg);
          }
        };

        var Checkout = WrappedCheckout(function (props) {
          return props.stripe.createToken();
        });
        expect(function () {
          return (0, _enzyme.mount)(_react2.default.createElement(
            _index.StripeProvider,
            { apiKey: 'pk_test_xxx' },
            _react2.default.createElement(
              Checkout,
              null,
              _react2.default.createElement(
                _index.Elements,
                null,
                _react2.default.createElement(_index.CardElement, null)
              )
            )
          ));
        }).toThrowError('Elements context');

        global.console.error = originalConsoleError;
      });

      it('should throw when no Element found', function () {
        var Checkout = WrappedCheckout(function (props) {
          return props.stripe.createToken();
        });
        var app = (0, _enzyme.mount)(_react2.default.createElement(
          _index.StripeProvider,
          { apiKey: 'pk_test_xxx' },
          _react2.default.createElement(
            _index.Elements,
            null,
            _react2.default.createElement(
              Checkout,
              null,
              'Hello world'
            )
          )
        ));
        expect(function () {
          return app.find('form').simulate('submit');
        }).toThrowError(/did not specify/);
      });
    });
  });
});