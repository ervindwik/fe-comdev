import { React, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/logo.svg";
import "../Styles/Regis.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Regis() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        confirm_pass: ""
    });

    function registration(e){ 
        e.preventDefault()
        if(data.password === data.confirm_pass) {
            delete data.confirm_pass
            axios.post(`https://636047c43e8f65f283c6d66d.mockapi.io/api/lms/users`, data)
            .then((res) => {
                console.log(res)
                setData({
                    email: "",
                    first_name: "",
                    last_name: "",
                    username: "",
                    password: "",
                    confirm_pass: ""
                })
                navigate("/login")
            })
            .catch((e) => {
                console.log(e)
            })
        } else {
            alert('Password tidak sesuai')
        }
    }

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
                <div className="d-flex justify-content-center regis-body" id="regis-section">
                    <Form method='post' onSubmit={registration}>
                    <h3>Register</h3>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control 
                            onChange={e => {
                                setData({...data,email:e.target.value})
                            }}
                            type="email"
                            className="mail text-black"
                            placeholder="Email..."
                            value={data.email}
                        />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control 
                            onChange={e => {
                                setData({...data,first_name:e.target.value})
                            }}
                            type="text"
                            className="name text-black"
                            placeholder="First Name..."
                            value={data.first_name}
                        />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control 
                            onChange={e => {
                                setData({...data,last_name:e.target.value})
                            }}
                            type="text"
                            className="name text-black"
                            placeholder="Last Name..."
                            value={data.last_name}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control 
                            onChange={e => {
                                setData({...data,username:e.target.value})
                            }}
                            type="username"
                            className="user text-black"
                            placeholder="Username..."
                            value={data.username}
                        />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control 
                            onChange={e => {
                                setData({...data,password:e.target.value})
                            }}
                            type="password"
                            className="password text-black"
                            placeholder="Password..."
                            value={data.password}
                        />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formInput">
                        <Form.Control
                            onChange={e => {
                                setData({...data,confirm_pass:e.target.value})
                            }}
                            type="password"
                            className="password text-black"
                            placeholder="Confirm Password..."
                            value={data.confirm_pass}
                        />
                    </Form.Group>
    
                    <p className="text-regis"><b><center>By signing up, you agree to our Terms, Privacy, Policy and Cookie Policy</center></b></p>
    
                    <Button id="button-masuk" type="submit">
                        Sign Up
                    </Button>

                    <p className="text-regis2">
                        <center>
                            <b>Have account ? <Link to={"/login"}>Login</Link>{" "}</b>
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
  
export default Regis  