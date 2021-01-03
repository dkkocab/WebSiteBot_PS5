import React, {Component} from 'react';
import ps5 from '../PS5.jpg'
import xbox from '../XBOX.jpg'

import {Container, Row, Col, Alert, Image} from "react-bootstrap";


class Home extends Component {
    handlexbox = event => {
        window.localStorage.setItem('console', 'xbox');
        //alert(window.localStorage.getItem('console'));
    };

    handleps5 = event => {
        window.localStorage.setItem('console', 'PS5');
        //alert(window.localStorage.getItem('console'));
    };

    render() {
        function handlePS5 (e){
            //window.localStorage.setItem('console', 'PS5');
            console.log('hey');
            //console.log(window.localStorage.key('console'));
        }

        function handleXbox(e) {

        }

        const imageClick = () => {
            console.log('Click');
        }

        return (
            <div>
                <Alert variant="warning">
                    <Alert.Heading>Hello Gamer!</Alert.Heading>
                    <p>
                        Welcome to WebSiteBot where you can buy a PS5 or Xbox X. Just click on either a
                        PS5 or Xbox below and get forwarded to the available suppliers!
                    </p>
                    <hr />
                    <p className="mb-0">
                        This project is being maintained by Alex Kocab
                    </p>
                </Alert>

                <br />

                <Container>
                    <a href = '/suppliers'><Image onClick={this.handleps5} src={ps5} width="500"  rounded/></a>
                    {' '}
                    <a href = '/suppliers'><Image onClick={this.handlexbox} src={xbox} width="500" rounded/></a>

                </Container>



            </div>
        );
    }
}

export default Home;