import React, {Component} from 'react';
import '../style/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Login from "./Login";

import {TOKEN_KEY} from '../constants';

class App extends Component {
    state = { //states used to activated login or register form.
        showLoginForm: false,
        showRegisterForm: false,
        isLoggedIn: localStorage.getItem(TOKEN_KEY) !== null,
    }

    //This is the call back function that is to update the parameters by passing to the child
    showLoginForm = (show) => {
        this.setState({
            showLoginForm: show
        });
    }

    //This is the call back function that is to update the parameters by passing to the child
    showRegisterForm = (show) => {
        this.setState({
            showRegisterForm: show
        });
    }

    //This is the call back function that is to update the parameters by passing to the child
    loggedIn = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    //This is the call back function that is to update the parameters by passing to the child
    loggedOut = () => {
        this.setState({
            isLoggedIn : false
        });
    }

    render() {
        //This is the root components for all the rest components, App is a parent components for the all subcomponents, including header, Login, Main
        // and footer

        //need to pass the login flag variable to the child components.
        return (
            <div className="App">
                <Header showLoginForm={this.showLoginForm}
                        showRegisterForm={this.showRegisterForm}
                        isLoggedIn={this.state.isLoggedIn}
                        loggedOut={this.loggedOut}
                />

                <Login isLoginForm={this.state.showLoginForm}
                       isRegisterForm={this.state.showRegisterForm}
                       showLoginForm = {this.showLoginForm}
                       showRegisterForm={this.showRegisterForm}
                       loggedIn={this.loggedIn}
                />

                <Main isLoggedIn={this.state.isLoggedIn}/>

                <Footer />
            </div>
        );
    }
}

export default App;