import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class Supplier extends Component {
    handleClick(name){
        window.location.href="/payment"
        localStorage.setItem("supplier",name)
        // For now we store the supplier that users chose in the local cache, with the key as "supplier"
        // When the user clicks on a supplier, the name of that supplier will be passed into here.
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col className="SupplierCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.wave3.com/resizer/1HurzaEJTU8tvKDbB4cxUYvVFUM=/1200x600/cloudfront-us-east-1.images.arcpublishing.com/raycom/RSJIE4RZUVFWFGC55BVQAKZ5S4.jpg" />
                            <Card.Body>
                                <Card.Title>Walmart</Card.Title>
                                <Button variant="primary"
                                        onClick={(ev) => {this.handleClick("Walmart")}}
                                >Go payment</Button>
                                {/*<button onClick={(ev) => {this.handle(ev, "Walmart")}}/>*/}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="SupplierCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/wiXtq4NPpGbNf6PEHTT4hg-1024-80.jpg.webp" />
                            <Card.Body>
                                <Card.Title>Amazon</Card.Title>
                                <Button variant="primary"
                                        onClick={(ev) => {this.handleClick("Amazon")}}
                                >Go payment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="SupplierCard">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.rhtc.com.au/Upload/RouseHillTownCentre/Media/Store-Logo/logo-target.jpg?width=250&height=161" />
                            <Card.Body>
                                <Card.Title>Target</Card.Title>
                                <Button variant="primary"
                                        onClick={(ev) => {this.handleClick("Target")}}
                                >Go payment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        )
    }
}

export default Supplier;