import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../../hook/useFirebase';

const Navigation = () => {

    const { logOut, user, signinWithGoogle } = useFirebase();
    // console.log(user);
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



                        {
                            user?.email ? <Nav.Link onClick={logOut}>LogOut</Nav.Link>
                                :
                                <Nav.Link onClick={signinWithGoogle}>Login</Nav.Link>

                        }



                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            <h6>{user?.displayName}</h6>
                        </Navbar.Text>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;