import React from 'react';
import "../../Styles/Course.css";
import { Container, Col, Row } from "react-bootstrap";
import gambar1 from '../../assets/img-course.png'
import gambar2 from '../../assets/rating.png'
import Pagination from 'react-bootstrap/Pagination';

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

                    <Pagination id="numbering">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
            </Container>
        </>

    )
}

export default DetailCourse