import React, { useState } from "react";
import { Container, Navbar, Nav, Form, Button, Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarComp from "../Components/Navbar";
import "../Styles/SettingProfile.css";
import profileImage from "../assets/user.png";
import { useRef } from "react";

const SettingProfile = () => {
    const [image, setImage] = useState("");
    const hiddenFileInput = useRef(null);
    const [active, setActive] = useState('default');

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    const onSubmit = () => {
        console.log('image', image);

        const data = new FormData();
        data.append = ('image', image);
    }

    return (
        <>
            <NavbarComp />
            <div className="navigasi">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Nav className="sub-nav-prof"
                            activeKey={active}
                            onSelect={(selectedKey) => setActive(selectedKey)}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="default" href="/profile/settingprofile" id="action-profile">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="/profile/settingpassword" id="action-password">Password</Nav.Link>
                            </Nav.Item>
                        </Nav>
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
                                        <img className="css-img-profile" src={profileImage} />
                                    </div>
                                </Col>
                                <Col className="col-md-6 ms-3 mt-1">
                                    <Button className="btn-upload-foto" onClick={handleClick}>
                                        Pilih Foto
                                    </Button>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={""}
                                        style={{ display: 'none' }}
                                    />
                                    <div className="text-info">
                                        <p className="text mt-2 mb-0" >Resolusi Minimal 64 x 64</p>
                                        <p>Max File 1 MB</p>
                                    </div>
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