import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Footer from "../Components/Footer";
import NavbarComp from "../Components/Navbar";
import "../Styles/PengaturanProfile.css";

const SettingProfile = () => {
    return (
        <>
            <NavbarComp />
            <div className="section1">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#profile" id="isi-nav">Profile</Nav.Link>
                                <Nav.Link href="#password" id="isi-nav">Password</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <hr className="line-style" />
        </>

    )
}

export default SettingProfile;