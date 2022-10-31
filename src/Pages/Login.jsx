import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import btnGoogle from "../assets/btn-google.png";
import "../Styles/Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [state, setState] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleBtnPass = () => {
        setState(prevState => !prevState);
    }

    const handleUsername = (e) => {
        const value = e.target.value
        setUsername(value);
        setError('')
    }

    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value);
        setError('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const dataUser = {
            username: username,
            password: password
        }
        console.log(dataUser)
    }

    // google login and logout
    const clientId = "423260667106-t7b16v2h97leg890clqnkltdt20l8amt.apps.googleusercontent.com";
    const [showLoginBtn, setShowLoginBtn] = useState(true);
    const [showLogoutBtn, setShowLogoutBtn] = useState(false);

    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const onLoginSuccess = (res) => {
        console.log('Login Success', res.profileObj);
        setShowLoginBtn(false);
        setShowLogoutBtn(true);
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    }

    const onSignoutSuccess = () => {
        alert("Kamu berhasil logout");
        setShowLoginBtn(true);
        setShowLogoutBtn(false);
    }
    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col md="6">
                        <figure className="bg1">
                            <figcaption>
                                <img className="style-img" src={logo} alt="logo" width={-20} />
                            </figcaption>
                        </figure>
                    </Col>
                    <Col md="6">
                        <div className="d-flex justify-content-center login-body">
                            <Form onSubmit={handleSubmit}>
                                <h3>Login</h3>
                                <Form.Group className="mb-3" controlId="formInputUsername">
                                    <Form.Control type="text" placeholder="Username..."
                                        value={username}
                                        onChange={handleUsername} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formInputPass">
                                    <Row>
                                        <Col className="md-10">
                                            <Form.Control type={state ? "text" : "password"}
                                                placeholder="Password..."
                                                value={password}
                                                onChange={handlePassword} />
                                        </Col>
                                        <Col className="md-2">
                                            <Button id="btn-pass" onClick={handleBtnPass}>
                                                {
                                                    state ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                                }
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formCheckbox">
                                    <Row>
                                        <Col>
                                            <Form.Check type="checkbox" label="Rememeber me" />
                                        </Col>
                                        <Col>
                                            <Link className="lupa-pass">Forgot Password ?</Link>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Button id="button-masuk" type="submit">
                                    Login
                                </Button>
                                <p className="text-or"><b>Or</b></p>
                                <div id="google-login">
                                    <GoogleLogin
                                        clientId={clientId}
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                                style={{
                                                    backgroundColor: "transparent",
                                                    borderStyle: "none",
                                                    padding: 4,
                                                    marginLeft: -5,
                                                    width: 330,
                                                    fontSize: 17,
                                                }}>
                                                <img src={btnGoogle}
                                                    style={{
                                                        width: 20,
                                                        marginRight: 10,
                                                    }} ></img>

                                                Continue With Google
                                            </button>
                                        )}
                                        buttonText="Continue With Google"
                                        onSuccess={onLoginSuccess}
                                        onFailure={onLoginFailure}
                                        cookiePolicy={'single_host_origin'}
                                    />

                                    {/* <GoogleLogout
                                        clientId={clientId}
                                        buttonText="Logout"
                                        onLogoutSuccess={onSignoutSuccess}
                                    >
                                    </GoogleLogout> */}

                                </div>
                                <p className="text-login">
                                    <center>
                                        <b>Don't have account ? <Link to={"/regis"}>Sign Up</Link>{" "}</b>
                                    </center>
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default Login;
