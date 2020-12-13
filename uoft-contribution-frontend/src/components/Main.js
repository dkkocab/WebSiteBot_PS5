import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";

class Main extends Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>


                </Switch>
            </div>
        );
    }
}

export default Main;