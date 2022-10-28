import { React, useState } from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/NavbarProfile';
import DetailCourse from '../Components/CourseComp/DetailCourse';
import "../Styles/Course.css";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";

const CourseDetail = () => {
    const [active, setActive] = useState('default');

    return (
        <>
            <NavbarComp />

            <div className="nav-course">
                <Container>
                    <h4>Programming Course</h4>
                    <Navbar bg="white" expand="lg">
                        <Nav className="sub-nav-prof"
                            activeKey={active}
                            onSelect={(selectedKey) => setActive(selectedKey)}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="default" href="#" id="action-profile">Web Developer</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#" id="action-password">Frontend</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#" id="action-password">Backend</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#" id="action-password">IOS</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#" id="action-password">UI/UX</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#" id="action-password">Flutter</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>  
                                <Nav.Link eventKey="link-1" href="#" id="action-password">Android Developer</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
            </div>

            <div className='body-course'>
                <Container>
                    <p id="detail-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <hr id='line-course' />

                    <DetailCourse />
                </Container>
            </div>

            <Footer />
        </>
    )
}

export default CourseDetail