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
                            <Nav className="me-auto" defaultActiveKey="/profile/settingpassword">
                                <Nav.Link href="/profile/settingprofile" id="btn-profile">Profile</Nav.Link>
                                <Nav.Link href="/profile/settingpassword" id="btn-password">Password</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <hr className="line-style" />

            <div className="change-password">
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Password</Form.Label>
                            <Form.Control type="text" placeholder="Password..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Password Baru</Form.Label>
                            <Form.Control type="text" placeholder="Password Baru..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Konfirmasi Password</Form.Label>
                            <Form.Control type="text" placeholder="Konfirmasi Password..." />
                        </Form.Group>
                    </Form>

                    <Button className="btn-submit" type="submit">
                        Simpan
                    </Button>
                </Container>
            </div>

            <Footer />
        </>
    )
}

export default SettingPassword