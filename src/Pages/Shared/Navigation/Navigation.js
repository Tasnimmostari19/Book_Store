import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Geyanpipasha</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Profile</Nav.Link>
                        <Nav.Link href="#pricing">PlaceOrder</Nav.Link>
                        <Nav.Link href="#admin">Admin</Nav.Link>

                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <Nav.Link eventKey={2} href="#memes">
                            LogOut
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;