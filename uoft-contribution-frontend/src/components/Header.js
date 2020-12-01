import React from 'react';
import { Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {ID, TOKEN_KEY} from '../constants';

class Header extends React.Component {
    handleLogin = () => {
        this.props.showLoginForm(true);
        this.props.showRegisterForm(false);
    };

    handleRegister = () => {
        this.props.showRegisterForm(true);
        this.props.showLoginForm(false);
    };

    handleLogOut = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(ID);
        this.props.loggedOut();
    }




    showMenu = () => {
        //if user is logged in, then show logged out
        if (localStorage.getItem(ID)) {
            return <div>
                <Dropdown.Item className="dropdown-item" type="button" onClick={this.handleLogOut}>
                    Log out
                </Dropdown.Item>
                <Dropdown.Divider />

            </div>
        }
        else {
            // if use did not logged in, then user can register account ot login in with account
            return <div>
                <Dropdown.Item className="dropdown-item" type="button" onClick={this.handleLogin}>Log in</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item" type="button" onClick={this.handleRegister}>Register</Dropdown.Item>
                <Dropdown.Divider />
            </div>
        }
    }

    customToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href="/"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    render() {
        return (
            <div className="app-header">
                <Link to="/" className="logo">
                    Header
                </Link>
                <div className="DropDown">
                    <Dropdown>
                        <Dropdown.Toggle as={this.customToggle} id="dropdown-custom-components">
                            {this.props.isLoggedIn?
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle avatar-LoggedIn" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                </svg>
                                :
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle avatar" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                </svg>
                            }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.showMenu()}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default Header;
