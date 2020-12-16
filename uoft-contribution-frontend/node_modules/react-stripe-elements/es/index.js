'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuBankAccountElement = exports.FpxBankElement = exports.IdealBankElement = exports.IbanElement = exports.PaymentRequestButtonElement = exports.CardCVCElement = exports.CardCvcElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = undefined;

var _Provider = require('./components/Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _inject = require('./components/inject');

var _inject2 = _interopRequireDefault(_inject);

var _Elements = require('./components/Elements');

var _Elements2 = _interopRequireDefault(_Elements);

var _Element = require('./components/Element');

var _Element2 = _interopRequireDefault(_Element);

var _PaymentRequestButtonElement = require('./components/PaymentRequestButtonElement');

var _PaymentRequestButtonElement2 = _interopRequireDefault(_PaymentRequestButtonElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define Elements, and register their implied token / source types for
// automatic token / source creation.

// Card
var CardElement = (0, _Element2.default)('card', {
  impliedTokenType: 'card',
  impliedSourceType: 'card',
  impliedPaymentMethodType: 'card'
});

// Split Fields
// Note: we only register the CardNumberElement for split fields so that we have
// a unique Element to infer when calling `wrappedCreateToken` or `wrappedCreateSource`.

var CardNumberElement = (0, _Element2.default)('cardNumber', {
  impliedTokenType: 'card',
  impliedSourceType: 'card',
  impliedPaymentMethodType: 'card'
});
var CardExpiryElement = (0, _Element2.default)('cardExpiry');
var CardCvcElement = (0, _Element2.default)('cardCvc');
var CardCVCElement = CardCvcElement; // deprecated in favor of CardCvcElement which better matches Elements API

// IBAN
var IbanElement = (0, _Element2.default)('iban', {
  impliedTokenType: 'bank_account',
  impliedSourceType: 'sepa_debit'
});

// iDEAL Bank
var IdealBankElement = (0, _Element2.default)('idealBank', { impliedSourceType: 'ideal' });

// fpx Bank
var FpxBankElement = (0, _Element2.default)('fpxBank');

// auBankAccount
// Requires beta access. Contact Stripe support for more information:
// https://support.stripe.com
var AuBankAccountElement = (0, _Element2.default)('auBankAccount');

exports.StripeProvider = _Provider2.default;
exports.injectStripe = _inject2.default;
exports.Elements = _Elements2.default;
exports.CardElement = CardElement;
exports.CardNumberElement = CardNumberElement;
exports.CardExpiryElement = CardExpiryElement;
exports.CardCvcElement = CardCvcElement;
exports.CardCVCElement = CardCVCElement;
exports.PaymentRequestButtonElement = _PaymentRequestButtonElement2.default;
exports.IbanElement = IbanElement;
exports.IdealBankElement = IdealBankElement;
exports.FpxBankElement = FpxBankElement;
exports.AuBankAccountElement = AuBankAccountElement;