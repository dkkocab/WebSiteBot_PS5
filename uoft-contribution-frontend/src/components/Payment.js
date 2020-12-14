import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_KEY} from "../constants";

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
        )
    }
}

export default Payment;