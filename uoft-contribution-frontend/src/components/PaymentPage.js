import React from "react";
import "../style/style.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {STRIPE_KEY} from "../constants";

const stripePromise = loadStripe(STRIPE_KEY);

const PaymentPage = () => {
    return (
        <div className="App">
            <div className="product">
                {/*<img*/}
                {/*    src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"*/}
                {/*    alt="laptop"*/}
                {/*    style={{ width: "100%", height: "auto" }}*/}
                {/*/>*/}
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;