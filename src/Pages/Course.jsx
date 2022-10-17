import React from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/NavbarProfile';
import "../Styles/Course.css";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import gambar1 from '../assets/img-course.png'
import gambar2 from '../assets/rating.png'
import gambar3 from '../assets/folderIcon.png'

const Course = () => {
    return (
        <>
            <NavbarComp />

            <div className="nav-course">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav defaultActiveKey="#">
                                <Nav.Link href="#" id="btn-profile" style={{
                                margin :"0",
                                padding:"2",
                                width:"150px"
                            }}>Web Developer</Nav.Link>
                                <Nav.Link href="" id="btn-password">Front End</Nav.Link>
                                <Nav.Link href="" id="btn-password">Back End</Nav.Link>
                                <Nav.Link href="" id="btn-password">IOS</Nav.Link>
                                <Nav.Link href="" id="btn-password">Android</Nav.Link>
                                <Nav.Link href="" id="btn-password">Cloud</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Container>
                <div className='body-course'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <hr id='line-course' />

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={350} />
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <h6>By: Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={200} /> <br />
                            <img src={gambar3} width={15} /> 10 Modul <span>Rp 150.000</span>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 2 }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <button type='submit'>Introduction</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={350} />
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <h6>By: Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={200} /> <br />
                            <img src={gambar3} width={15} /> 10 Modul <span>Rp 150.000</span>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 2 }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <button type='submit'>Introduction</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={350} />
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <h6>By: Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={200} /> <br />
                            <img src={gambar3} width={15} /> 10 Modul <span>Rp 150.000</span>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 2 }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <button type='submit'>Introduction</button>
                        </Col>
                    </Row>
                </div>
            </Container>
            

            <Footer />
        </>

    )
}

export default Course