import React from "react";
import { Container, Navbar, Nav, Form, Button, Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarComp from "../Components/Navbar";
import "../Styles/SettingProfile.css";

const SettingPassword = () => {
    return (
        <>
            <NavbarComp />

            <div className="navigasi">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" variant="pills" defaultActiveKey="/profile/settingprofile">
                                <Nav.Link href="/profile/settingprofile" id="btn-profile">Profile</Nav.Link>
                                <Nav.Link href="/profile/settingpassword" id="btn-password">Password</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default SettingPassword