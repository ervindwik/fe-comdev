import { React, useState } from "react";
import { Container, Navbar, Nav, Form, Button, Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarComp from "../Components/Navbar";
import "../Styles/SettingProfile.css";

const SettingPassword = () => {
    const [active, setActive] = useState('default');
    return (
        <>
            <NavbarComp />
            <div className="navigasi">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Nav className="sub-nav-pass"
                            activeKey={active}
                            onSelect={(selectedKey) => setActive(selectedKey)}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="/profile/settingprofile">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="default" href="/profile/settingpassword">Password</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <hr className="line-style" />
            <div className="change-password">
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Password Baru</Form.Label>
                            <Form.Control type="password" placeholder="Password Baru..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Konfirmasi Password</Form.Label>
                            <Form.Control type="password" placeholder="Konfirmasi Password..." />
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