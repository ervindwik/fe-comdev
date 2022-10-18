import { React, useState } from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/NavbarProfile';
import "../Styles/Course.css";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import gambar1 from '../assets/img-course.png'
import gambar2 from '../assets/rating.png'
import gambar3 from '../assets/folderIcon.png'

const Course = () => {
    const [active, setActive] = useState('default');

    return (
        <>
            <NavbarComp />

            <div className="nav-course">
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Nav className="sub-nav-prof"
                            activeKey={active}
                            onSelect={(selectedKey) => setActive(selectedKey)}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="default" href="#" id="action-profile">Terpopuler</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#" id="action-password">Baru</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <Container>
                <div className='body-course'>
                    <hr id='line-course' />

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                            <h5>Complete 2022 Web Development Bootcamp</h5>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <h5>Rp 300.000</h5>
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 3, order: 2 }} >
                            <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                            <h5>Complete 2022 Web Development Bootcamp</h5>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <h5>Rp 300.000</h5>
                        </Col>

                        <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                            <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                            <h5>Complete 2022 Web Development Bootcamp</h5>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <h5>Rp 300.000</h5>
                        </Col>

                        <Col xs={{ span: 12, order: 4 }} md={{ span: 3, order: 4 }}>
                            <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                            <h5>Complete 2022 Web Development Bootcamp</h5>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <h5>Rp 300.000</h5>
                        </Col>
                    </Row>

                    <Row>
                        <h4>Top Kategori</h4>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={350} />
                            <h5>Complete 2022 Web Development Bootcamp</h5>
                            <h6>By: Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={200} /> <br />
                            <span>Rp 150.000</span>
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