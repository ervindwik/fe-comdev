import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import gambar3 from "../../assets/dashboard-sec22.png";
import gambar7 from "../../assets/rating.png";
import add from "../../assets/add.png";
import folder from "../../assets/folderIcon.png"
import { Link } from "react-router-dom";
const CoursesList = () => {
    return (
        <Container>
            <Row>
                {/* Add Course */}
                <Col md={{ span: 3 }}>
                    <Card style={{
                        width: "15rem",
                        borderWidth: 5,
                        borderStyle: 'dashed',
                    }}
                        id="card-courses">
                        <Card.Body>
                            <Card.Text>
                                <div
                                    style={{
                                        padding: "5px 5px 5px 5px",
                                        borderWidth: '5',
                                        borderStyle: 'dashed',
                                        textAlign: 'center',
                                        width: '5rem',
                                        margin: 'auto',
                                        marginTop: "95px",
                                        marginLeft: "60px",
                                        opacity: '0.5',
                                        borderRadius: '50%'
                                    }}
                                >
                                    <Link to="/profile/mycourse/addcourse">
                                        <img src={add} width={40} style={{
                                            paddingTop: "10px",
                                            paddingBottom: "10px"
                                        }} />
                                    </Link>

                                </div>
                                <span>
                                    <h2 className="text-center" style={{
                                        opacity: '0.5',
                                        marginBottom: '35px',
                                        marginTop: '10px',
                                        marginLeft: '40px'
                                    }}>Add Course</h2>
                                </span>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* end add course */}
                <Col md={{ span: 3 }}>
                    <Card style={{ width: "15rem", }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1 fw-bolder fs-5">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-2 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-1 me-2 ps-1">HAPUS</a>
                            <a href="#" className="btn btn-info pe-1 ps-1 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col ma={{ span: 3 }}>
                    <Card style={{ width: "15rem", }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1 fw-bolder fs-5">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-2 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-1 me-2 ps-1">HAPUS</a>
                            <a href="#" className="btn btn-info pe-1 ps-1 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 3 }}>
                    <Card style={{ width: "15rem", }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1 fw-bolder fs-5">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-2 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-1 me-2 ps-1">HAPUS</a>
                            <a href="#" className="btn btn-info pe-1 ps-1 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 3 }}>
                    <Card style={{ width: "15rem", }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1 fw-bolder fs-5">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-2 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-1 me-2 ps-1">HAPUS</a>
                            <a href="#" className="btn btn-info pe-1 ps-1 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 3 }}>
                    <Card style={{ width: "15rem", }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1 fw-bolder fs-5">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-2 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-1 me-2 ps-1">HAPUS</a>
                            <a href="#" className="btn btn-info pe-1 ps-1 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CoursesList;
