import { React, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../Styles/Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


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
                                <p className="text-login"><b><center>Or</center></b></p>
                                <Button className="btn-google" type="submit">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                                        alt=""
                                        width={20}
                                    />
                                    Continue with Google
                                </Button>
                                <p className="text-login">
                                    <center>
                                        <b>Don't have account ? <Link to={"/regis"}>Sign Up</Link>{" "}</b>
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
