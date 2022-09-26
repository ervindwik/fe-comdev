import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/esm/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logoNav.png'

const NavbarComp = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt="logoNav" width="20%" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                    <Nav className="m-4">
                        <Nav.NavDropdown href="/">CourSE</Nav.NavDropdown>
                        <Nav.Link href="/about">Langganan</Nav.Link>
                        <Nav.Link href="/detail">Lainya</Nav.Link>
                        <Nav.Link className="btn btn-transprant me-2">Masuk</Nav.Link>
                        <Nav.Link className="btn btn-success text-white">Daftar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp