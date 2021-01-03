import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from "@material-ui/core/Container";
import { FormControl, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

class UserProfile extends Component {
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
                        Personal Information
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                onChange={this.handleInputChange}
                                fullWidth
                                autoComplete="family-name"
                                value={this.state.lastName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                name="email"
                                value={this.state.email}
                                fullWidth
                                onChange={this.handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup row aria-label="gender" name="gender1" value={this.state.gender} onChange={this.handleInputChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="date"
                                label="Birthday"
                                name="birthday"
                                type="date"
                                defaultValue=""
                                onChange={this.handleInputChange}
                                value={this.state.birthday}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                value={this.state.address1}
                                autoComplete="shipping address-line1"
                                onChange={this.handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                                onChange={this.handleInputChange}
                                value={this.state.address2}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                onChange={this.handleInputChange}
                                value={this.state.city}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth
                                       onChange={this.handleInputChange}
                                       value={this.state.state}/>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                                onChange={this.handleInputChange}
                                value={this.state.zip}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                onChange={this.handleInputChange}
                                value={this.state.country}
                            />

                        </Grid>
                        <Grid Grid item xs={12} >
                            <Link to="/payment" className="btn btn-primary">
                                SAVE
                            </Link>

                        </Grid>

                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                        </Grid> */}
                    </Grid>
                </React.Fragment>
            </Container>
        );
    };
}

export default UserProfile;