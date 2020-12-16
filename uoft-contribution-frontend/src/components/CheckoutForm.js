import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import {ITEM_NAME, ITEM_PRICE} from "../constants";

import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
    handleSubmit = async event => {
        event.preventDefault();

        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
        }
    };

    render() {
        return (
            <div>
                <div class="product-info">
                    {/*<h3 className="product-title">{localStorage.getItem(ITEM_NAME)}</h3>*/}
                    {/*<h4 className="product-price">{localStorage.getItem(ITEM_PRICE)}</h4>*/}
                    <h3 className="product-title">ITEM_NAME</h3>
                    <h4 className="product-price">ITEM_PRICE</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <CardSection />
                    <button disabled={!this.props.stripe} className="btn-pay">
                        Buy Now
                    </button>
                </form>
            </div>
        );
    }
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}