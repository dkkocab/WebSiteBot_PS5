import { FunctionComponent, ReactNode } from "react";
import * as stripeJs from "@stripe/stripe-js";
interface ElementProps {
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    id?: string;
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    className?: string;
    /**
     * Triggered when the Element loses focus.
     */
    onBlur?: () => any;
    /**
     * Triggered when the Element receives focus.
     */
    onFocus?: () => any;
}
interface AuBankAccountElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=auBankAccount).
     */
    options?: stripeJs.StripeAuBankAccountElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=auBankAccountElement).
     */
    onChange?: (event: stripeJs.StripeAuBankAccountElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeAuBankAccountElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type AuBankAccountElementComponent = FunctionComponent<AuBankAccountElementProps>;
interface CardElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=card).
     */
    options?: stripeJs.StripeCardElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardElement).
     */
    onChange?: (event: stripeJs.StripeCardElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type CardElementComponent = FunctionComponent<CardElementProps>;
interface CardNumberElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardNumber).
     */
    options?: stripeJs.StripeCardNumberElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardNumberElement).
     */
    onChange?: (event: stripeJs.StripeCardNumberElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardNumberElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type CardNumberElementComponent = FunctionComponent<CardNumberElementProps>;
interface CardExpiryElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardExpiry).
     */
    options?: stripeJs.StripeCardExpiryElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardExpiryElement).
     */
    onChange?: (event: stripeJs.StripeCardExpiryElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardExpiryElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type CardExpiryElementComponent = FunctionComponent<CardExpiryElementProps>;
interface CardCvcElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardCvc).
     */
    options?: stripeJs.StripeCardCvcElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardCvcElement).
     */
    onChange?: (event: stripeJs.StripeCardCvcElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardCvcElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type CardCvcElementComponent = FunctionComponent<CardCvcElementProps>;
interface FpxBankElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=fpxBank).
     */
    options?: stripeJs.StripeFpxBankElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=fpxBankElement).
     */
    onChange?: (event: stripeJs.StripeFpxBankElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeFpxBankElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type FpxBankElementComponent = FunctionComponent<FpxBankElementProps>;
interface IbanElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=iban).
     */
    options?: stripeJs.StripeIbanElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=ibanElement).
     */
    onChange?: (event: stripeJs.StripeIbanElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeIbanElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type IbanElementComponent = FunctionComponent<IbanElementProps>;
interface IdealBankElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=idealBank).
     */
    options?: stripeJs.StripeIdealBankElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=idealBankElement).
     */
    onChange?: (event: stripeJs.StripeIdealBankElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeIdealBankElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type IdealBankElementComponent = FunctionComponent<IdealBankElementProps>;
interface PaymentRequestButtonElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=paymentRequestButton).
     */
    options?: stripeJs.StripePaymentRequestButtonElementOptions;
    /**
     * Triggered when the Element is clicked.
     */
    onClick?: (event: stripeJs.StripePaymentRequestButtonElementClickEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripePaymentRequestButtonElement) => any;
}
type PaymentRequestButtonElementComponent = FunctionComponent<PaymentRequestButtonElementProps>;
declare module "@stripe/stripe-js" {
    interface StripeElements {
        /**
         * Requires beta access:
         * Contact [Stripe support](https://support.stripe.com/) for more information.
         *
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=auBankAccount) for the `AuBankAccountElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `AuBankAccountElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: AuBankAccountElementComponent): stripeJs.StripeAuBankAccountElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardElementComponent): stripeJs.StripeCardElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardNumberElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardNumberElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardNumberElementComponent): stripeJs.StripeCardNumberElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardCvcElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardCvcElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardCvcElementComponent): stripeJs.StripeCardCvcElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardExpiryElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardExpiryElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardExpiryElementComponent): stripeJs.StripeCardExpiryElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=fpxBank) for the `FpxBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `FpxBankElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: FpxBankElementComponent): stripeJs.StripeFpxBankElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `IbanElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `IbanElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: IbanElementComponent): stripeJs.StripeIbanElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `IdealBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `IdealBankElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: IdealBankElementComponent): stripeJs.StripeIdealBankElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `PaymentRequestButtonElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `PaymentRequestButtonElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: PaymentRequestButtonElementComponent): stripeJs.StripePaymentRequestButtonElement | null;
    }
}
interface ElementsContextValue {
    elements: stripeJs.StripeElements | null;
    stripe: stripeJs.Stripe | null;
}
interface ElementsProps {
    /**
     * A [Stripe object](https://stripe.com/docs/js/initializing) or a `Promise` resolving to a `Stripe` object.
     * The easiest way to initialize a `Stripe` object is with the the [Stripe.js wrapper module](https://github.com/stripe/stripe-js/blob/master/README.md#readme).
     * Once this prop has been set, it can not be changed.
     *
     * You can also pass in `null` or a `Promise` resolving to `null` if you are performing an initial server-side render or when generating a static site.
     */
    stripe: PromiseLike<stripeJs.Stripe | null> | stripeJs.Stripe | null;
    /**
     * Optional [Elements configuration options](https://stripe.com/docs/js/elements_object/create).
     * Once the stripe prop has been set, these options cannot be changed.
     */
    options?: stripeJs.StripeElementsOptions;
}
/**
 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
 *
 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
 * Pass the returned `Promise` to `Elements`.
 *
 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
 */
declare const Elements: FunctionComponent<ElementsProps>;
/**
 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
 */
declare const useElements: () => stripeJs.StripeElements | null; /**
 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
 */
/**
 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
 */
declare const useStripe: () => stripeJs.Stripe | null;
interface ElementsConsumerProps {
    children: (props: ElementsContextValue) => ReactNode;
} /**
 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
 */
/**
 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
 */
declare const ElementsConsumer: FunctionComponent<ElementsConsumerProps>;
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const AuBankAccountElement: AuBankAccountElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardElement: CardElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardNumberElement: CardNumberElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardExpiryElement: CardExpiryElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardCvcElement: CardCvcElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const FpxBankElement: FpxBankElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const IbanElement: IbanElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const IdealBankElement: IdealBankElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const PaymentRequestButtonElement: PaymentRequestButtonElementComponent;
export { ElementProps, AuBankAccountElementProps, AuBankAccountElementComponent, CardElementProps, CardElementComponent, CardNumberElementProps, CardNumberElementComponent, CardExpiryElementProps, CardExpiryElementComponent, CardCvcElementProps, CardCvcElementComponent, FpxBankElementProps, FpxBankElementComponent, IbanElementProps, IbanElementComponent, IdealBankElementProps, IdealBankElementComponent, PaymentRequestButtonElementProps, PaymentRequestButtonElementComponent, useElements, useStripe, Elements, ElementsConsumer, AuBankAccountElement, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, FpxBankElement, IbanElement, IdealBankElement, PaymentRequestButtonElement };
