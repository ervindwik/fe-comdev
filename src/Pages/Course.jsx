import { React, useState } from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/NavbarProfile';
import CarouselComp from '../Components/CourseComp/Carousel';
import DetailCourse from '../Components/CourseComp/DetailCourse';
import "../Styles/Course.css";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import gambar1 from '../assets/img-course.png'

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

                    <CarouselComp />

                    <Row>
                        <h4>Top Kategori</h4>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} height={280} id="img-sec1" />
                            <center><h5>Programming</h5></center>
                        </Col>

                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 2 }}>
                            <img alt='gambar1' src={gambar1} width={250} height={280} id="img-sec1" />
                            <center><h5>Programming</h5></center>
                        </Col>

                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 3 }}>
                            <img alt='gambar1' src={gambar1} width={250} height={280} id="img-sec1" />
                            <center><h5>Programming</h5></center>
                        </Col>

                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 4 }}>
                            <img alt='gambar1' src={gambar1} width={250} height={280} id="img-sec1" />
                            <center><h5>Programming</h5></center>
                        </Col>
                    </Row>

                    <Row>
                        <h4>Semua Course</h4>

                        <DetailCourse />
                    </Row>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default Course