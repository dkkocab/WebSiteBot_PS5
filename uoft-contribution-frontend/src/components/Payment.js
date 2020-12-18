import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {Link} from "react-router-dom";
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import {ITEM_PRICE, ITEM_NAME, SUPPLIER} from "../constants";

class Payment extends Component {
    // onToken = (token, addresses) => {
    //     // TODO: Send the token information and any other
    //     // relevant information to your payment process
    //     // server, wait for the response, and update the UI
    //     // accordingly. How this is done is up to you. Using
    //     // XHR, fetch, or a GraphQL mutation is typical.
    // };
    //
    //
    // render() {
    //     return (
    //         <div>
    //
    //             <div>
    //                 <StripeCheckout
    //                     amount="500"
    //                     billingAddress
    //                     description="Awesome Product"
    //                     image="https://yourdomain.tld/images/logo.svg"
    //                     locale="auto"
    //                     name="YourDomain.tld"
    //                     stripeKey={STRIPE_KEY}
    //                     token={this.onToken}
    //                     zipCode
    //                 />
    //             </div>
    //         </div>
    //     )
    // }
    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.SaveContent = this.saveContent.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    //This is to send payment confirm to the backend. TODO
    handlePaymentConfirm(event) {
        console.log('Confirm Payment', event);
    }

    saveContent=()=> {
        console.log('save');
    }

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return (
            <Container maxWidth="md">
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Payment Information
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Item_Price"
                                name="Item_Price"
                                label="Console Price $"
                                value= {localStorage.getItem(ITEM_PRICE)}

                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Item_Name"
                                name="Item_Name"
                                label="Console Name"
                                value={localStorage.getItem(ITEM_NAME)}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Supplier_Name"
                                name="Supplier_Name"
                                label="Supplier Name"
                                value={localStorage.getItem(SUPPLIER)}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="CardNumber"
                                name="CardNumber"
                                label="Card Number"
                                value={this.state.CardNumber}
                                onChange={this.handleInputChange}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="CVVnumber"
                                name="CVVnumber"
                                label="CVV Number"
                                onChange={this.handleInputChange}
                                fullWidth
                                autoComplete="family-name"
                                value={this.state.CVVnumber}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="ExpireDate"
                                label="Expire Date"
                                name="ExpireDate"
                                type="date"
                                defaultValue=""
                                format='MM/YYYY'
                                onChange={this.handleInputChange}
                                value={this.state.ExpireDate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid Grid item xs={12} >
                            <button className="btn btn-primary" onClick={this.handlePaymentConfirm}>
                                Payment Confirm
                            </button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </Container>
        );
    };

}

export default Payment;