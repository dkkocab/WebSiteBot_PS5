import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_KEY} from "../constants";
import Elements, {StripeProvider} from 'react-stripe-elements';
import StripeScriptLoader from 'react-stripe-script-loader'
import {CardElement} from 'react-stripe-elements';
import {CardNumberElement} from "@stripe/react-stripe-js";
// import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

class Payment extends Component {
    onToken = (token, addresses) => {
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
    };


    render() {
        return (
            <div>
                {/*<div>*/}
                {/*    <StripeScriptLoader*/}
                {/*        uniqueId="myUniqueId"*/}
                {/*        script="https://js.stripe.com/v3/"*/}
                {/*        loader="Loading..."*/}
                {/*    >*/}
                {/*        <StripeProvider apiKey="stripeApiKey">*/}
                {/*            <Elements>*/}
                {/*                <CardNumberElement />*/}
                {/*            </Elements>*/}
                {/*        </StripeProvider>*/}
                {/*    </StripeScriptLoader>*/}
                {/*</div>*/}

                <div>
                    <StripeCheckout
                        amount="500"
                        billingAddress
                        description="Awesome Product"
                        image="https://yourdomain.tld/images/logo.svg"
                        locale="auto"
                        name="YourDomain.tld"
                        stripeKey={STRIPE_KEY}
                        token={this.onToken}
                        zipCode
                    />
                </div>


                {/*<StripeProvider apiKey="pk_test_12345">*/}
            </div>
        )
    }
}

export default Payment;