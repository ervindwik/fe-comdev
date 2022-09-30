import React, { useState } from "react";
import { Container, Navbar, Nav, Form, Button, Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarComp from "../Components/Navbar";
import "../Styles/SettingProfile.css";
import profileImage from "../assets/profile.png";
import { useRef } from "react";

const SettingProfile = () => {
    const [profile, setProfile] = useState(profileImage);
    const hiddenFileInput = useRef(null);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    const handleChange = (e) => {
    };

    const handleImage = (e) => {

    }

    return (
        <>
            <NavbarComp />
            <div className="navigasi">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" defaultActiveKey="/profile/settingprofile">
                                <Nav.Link href="/profile/settingprofile" id="btn-profile">Profile</Nav.Link>
                                <Nav.Link href="/profile/settingpassword" id="btn-password">Password</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <hr className="line-style" />
            <div className="form-input-profile">
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Foto Diri</Form.Label>
                            <Row>
                                <Col className="col-md-2 me-5">
                                    <div className="img-profile">
                                        <img src={profile} alt="profile" className="" width={200} />
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <Button className="btn-upload-foto" onClick={handleClick}>
                                        Pilih Foto
                                    </Button>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChange}
                                        style={{ display: 'none' }}
                                    />
                                    <p className="text mt-2" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam assumenda laboriosam quod atque officiis, enim tempore autem debitis sunt. Dolore alias cumque reprehenderit iusto at quasi ipsam ad. Ipsa, rerum!</p>
                                </Col>
                            </Row>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Nama Lengkap</Form.Label>
                            <Form.Control type="text" placeholder="Nama Lengkap...." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Username</Form.Label>
                            <Form.Control type="text" placeholder="Username...." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control type="email" placeholder="Email...." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Position</Form.Label>
                            <Form.Control type="text" placeholder="Ex. Marketing at PT Petik Emas Consulting" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Tentang Saya</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tentang Saya...." />
                        </Form.Group>
                        <Button className="btn-submit" type="submit">
                            Simpan
                        </Button>
                    </Form>
                </Container>
            </div>
            <Footer />
        </>

    )
}

export default SettingProfile;