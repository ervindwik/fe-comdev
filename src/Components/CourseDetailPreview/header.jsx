import React, { Component, useState, useRef } from "react";

import { Navbar, Nav, Row, Col } from "react-bootstrap";
import "../../Styles/CourseDetailPreview.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
    const [active, setActive] = useState("default");
    const [category, setCategory] = useState({
        webdev: {
            title: "WEB DEVELOPER",
            desc: "Web developer adalah peran yang memungkinkan untuk membuat sebuah situs. Mereka tahu bagaimana cara membuat situs dari nol, menulis kode apabila dibutuhkan, dan memastikan apa yang diinginkan pengguna di dalam situs dapat dilakukan",
        },
        frontend: {
            title: "FRONTEND DEVELOPER",
            desc: "front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging.",
        },
        backend: {
            title: "BACKEND DEVELOPER",
            desc: "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see",
        },
        mobile: {
            title: "MOBILE DEVELOPER",
            desc: "mobile developer ditujukan pada mereka yang punya spesialiasi dalam teknologi mobile. Hal itu meliputi membuat aplikasi untuk Android Google, iOs Apple, dan platform ponsel Windows.",
        },
        ui: {
            title: "UI UX",
            desc: "A UI, UX, and front-end web developer is responsible for applying interactive and visual design principles on websites and web applications for a positive and cohesive user experience. These developers use HTML, CSS, and other design tools to achieve responsive designs.",
        },
    });

    return (
        <>
            <div className="navigasi">
                <h1>Progamming</h1>
                <Navbar bg="white" expand="lg">
                    <Nav
                        className="sub-nav-prof"
                        activeKey={active}
                        onSelect={(selectedKey) => setActive(selectedKey)}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="link-0" href="#web" className="dtcNav-scroll">
                                Web Developer
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link-1"
                                href="#frontend"
                                className="dtcNav-scroll"
                            >
                                FrontEnd
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link-2"
                                href="#backend"
                                className="dtcNav-scroll"
                            >
                                Backend
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="link-3"
                                href="#mobile"
                                className="dtcNav-scroll"
                            >
                                Mobile Developer
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4" href="#ui" className="dtcNav-scroll">
                                UI/UX
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
            
            <div className="course-info container">
                <div id="web" className="description" style={{'paddingTop':'200px', 'marginTop':'-200px' }}>
                    <Row>
                        <h3>{category.webdev.title}</h3>
                        <Col md="10">
                            <p>{category.webdev.desc}</p>
                        </Col>
                        <Col md="2">
                            <button
                                className="float-end btn fw-bolder text-white"
                                style={{ backgroundColor: "#38A5AD" }}
                            >
                                List Peserta
                            </button>
                        </Col>
                    </Row>
                </div>
                <div id="frontend" className="description" style={{'paddingTop':'200px', 'marginTop':'-200px' }}>
                    <Row>
                        <h3>{category.frontend.title}</h3>
                        <Col md="10">
                            <p>{category.frontend.desc}</p>
                        </Col>
                        <Col md="2">
                            <button
                                className="float-end btn fw-bolder text-white"
                                style={{ backgroundColor: "#38A5AD" }}
                            >
                                List Peserta
                            </button>
                        </Col>
                    </Row>
                </div>
                <div id="backend" className="description" style={{'paddingTop':'200px', 'marginTop':'-200px' }}>
                    <Row>
                        <h3>{category.backend.title}</h3>
                        <Col md="10">
                            <p>{category.backend.desc}</p>
                        </Col>
                        <Col md="2">
                            <button
                                className="float-end btn fw-bolder text-white"
                                style={{ backgroundColor: "#38A5AD" }}
                            >
                                List Peserta
                            </button>
                        </Col>
                    </Row>
                </div>
                <div id="mobile" className="description" style={{'paddingTop':'200px', 'marginTop':'-200px' }}>
                    <Row>
                        <h3>{category.mobile.title}</h3>
                        <Col md="10">
                            <p>{category.mobile.desc}</p>
                        </Col>
                        <Col md="2">
                            <button
                                className="float-end btn fw-bolder text-white"
                                style={{ backgroundColor: "#38A5AD" }}
                            >
                                List Peserta
                            </button>
                        </Col>
                    </Row>
                </div>
                <div id="ui" className="description" style={{'paddingTop':'200px', 'marginTop':'-200px' }}>
                    <Row>
                        <h3>{category.ui.title}</h3>
                        <Col md="10">
                            <p>{category.ui.desc}</p>
                        </Col>
                        <Col md="2">
                            <button
                                className="float-end btn fw-bolder text-white"
                                style={{ backgroundColor: "#38A5AD" }}
                            >
                                List Peserta
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Header;
