import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/logo.svg";
import "../Styles/Login.css";

const Regis = () => {
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
                    <h3>Daftar</h3>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control type="email" placeholder="Email..." />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control type="text" placeholder="First Name..." />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control type="text" placeholder="Last Name..." />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control type="username" placeholder="Username..." />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control type="password" placeholder="Password..." />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control type="password" placeholder="Confirm Password..." />
                    </Form.Group>
    
                    <p className="text-regis"><b><center>By signing up, you agree to our Terms, Privacy, Policy and Cookie Policy</center></b></p>
    
                    <Button id="button-masuk" type="submit">
                        Sign Up
                    </Button>

                    <p className="text-login">
                        <center>
                            <b>Sudah ada akun? <Link to={"/login"}>Masuk</Link>{" "}</b>
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
  
export default Regis;  