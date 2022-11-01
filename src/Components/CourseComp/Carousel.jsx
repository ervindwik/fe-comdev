import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import gambar1 from '../../assets/img-course.png';
import gambar2 from '../../assets/rating.png';
import "../../Styles/Course.css";

function Slider() {
  return (
    <Carousel id="carousel-section">
        <Carousel.Item interval={3000} id="slide">
            <Container>
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
            </Container>
        </Carousel.Item>

        <Carousel.Item interval={3000} id="slide">
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                        <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                        <h5>Front End Engineering Bootcamp with Petik Emas Consulting</h5>
                        <h6>Nisa Alivia</h6>
                        <img src={gambar2} width={130} /> <br />
                        <h5>Rp 500.000</h5>
                    </Col>

                    <Col xs={{ span: 12, order: 2 }} md={{ span: 3, order: 2 }} >
                        <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                        <h5>Front End Engineering Bootcamp with Petik Emas Consulting</h5>
                        <h6>Nisa Alivia</h6>
                        <img src={gambar2} width={130} /> <br />
                        <h5>Rp 500.000</h5>
                    </Col>

                    <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                        <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                        <h5>Front End Engineering Bootcamp with Petik Emas Consulting</h5>
                        <h6>Nisa Alivia</h6>
                        <img src={gambar2} width={130} /> <br />
                        <h5>Rp 500.000</h5>
                    </Col>

                    <Col xs={{ span: 12, order: 4 }} md={{ span: 3, order: 4 }}>
                        <img alt='gambar1' src={gambar1} width={250} id="img-sec1" />
                        <h5>Front End Engineering Bootcamp with Petik Emas Consulting</h5>
                        <h6>Nisa Alivia</h6>
                        <img src={gambar2} width={130} /> <br />
                        <h5>Rp 500.000</h5>
                    </Col>
                </Row>
            </Container>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;