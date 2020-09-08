import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expanded="xl">
                <Navbar.Brand href="#home"><img src="https://images.milled.com/2017-07-18/K8Nx5AIGTmvTxf5v/R6lqJCdq_waw.png" width="150" height="40" className="d-inline-block align-top" alt="Brand logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-success">TRY IT FREE</Button>
                        </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;