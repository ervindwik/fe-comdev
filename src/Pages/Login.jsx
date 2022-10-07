import { React, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/logo.svg";
import "../Styles/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-regular-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

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
                                    <Form.Control type="text" placeholder="Username..." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formInput">
                                    <Form.Control placeholder="Password..." name="password" />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}> </i>
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
                                <p className="text-login"><b><center>Atau</center></b></p>
                                <Button className="btn-google" type="submit">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                                        alt=""
                                        width={20}
                                    />
                                    Masuk dengan Google
                                </Button>
                                <p className="text-login">
                                    <center>
                                        <b>Tidak punya akun? <Link to={"/regis"}>Daftar</Link>{" "}</b>
                                    </center>
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
