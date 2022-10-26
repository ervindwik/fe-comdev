import React from 'react';
import "../../Styles/Course.css";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import gambar1 from '../../assets/img-course.png'
import gambar2 from '../../assets/rating.png'
import gambar3 from '../../assets/folderIcon.png'

const DetailCourse = () => {
    return (
        <>
            <Container>
                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} />
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <p>Lorem Ipsum dit colot sir amet panjahitan (deskripsi course)</p>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <button type='submit'>Introduction</button>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                            <h4 id="price">Rp 300.000</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} />
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <p>Lorem Ipsum dit colot sir amet panjahitan (deskripsi course)</p>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <button type='submit'>Introduction</button>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                            <h4 id="price">Rp 300.000</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} />
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <p>Lorem Ipsum dit colot sir amet panjahitan (deskripsi course)</p>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <button type='submit'>Introduction</button>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                            <h4 id="price">Rp 300.000</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} />
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <p>Lorem Ipsum dit colot sir amet panjahitan (deskripsi course)</p>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <button type='submit'>Introduction</button>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                            <h4 id="price">Rp 300.000</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                            <img alt='gambar1' src={gambar1} width={250} />
                        </Col>

                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                            <h4>Complete 2022 Web Development Bootcamp</h4>
                            <p>Lorem Ipsum dit colot sir amet panjahitan (deskripsi course)</p>
                            <h6>Ervin Dwi Kurniawan</h6>
                            <img src={gambar2} width={130} /> <br />
                            <button type='submit'>Introduction</button>
                            <button type='submit' id='btn-course'>Belajar Sekarang</button>
                        </Col>

                        <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 3 }}>
                            <h4 id="price">Rp 300.000</h4>
                        </Col>
                    </Row>
            </Container>
        </>

    )
}

export default DetailCourse