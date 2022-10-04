import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/logo.svg";
import "../Styles/Login.css";

const Login = () => {
    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col md="6">
                        <figure className="bg1">
                            <figcaption>
                                <img className="style-img" src={background} alt="logo" />
                            </figcaption>
                        </figure>
                    </Col>
                    <Col md="6">
                        <div className="d-flex justify-content-center login-body">
                            <Form>
                                <h3>Masuk</h3>
                                <Form.Group className="mb-3" controlId="formInput">
                                    <Form.Control type="username" placeholder="Username..." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formInput">
                                    <Form.Control type="password" placeholder="Password..." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formCheckbox">
                                    <Row>
                                        <Col>
                                            <Form.Check type="checkbox" label="Ingat Saya" />
                                        </Col>
                                        <Col>
                                            <Link>Lupa Password</Link>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Button id="button-masuk" type="submit">
                                    Login
                                </Button>
                                <p><b>Atau</b></p>
                                <Button className="button-google" type="submit">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                                        alt=""
                                        width={20}
                                    />
                                    Masuk dengan Google
                                </Button>
                                <p>
                                    <b>Tidak punya akun? Yuk <Link to={"/register"}>Daftar</Link>{" "}</b>
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
