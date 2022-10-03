import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import gambar3 from "../../assets/dashboard-sec22.png";
import gambar7 from "../../assets/rating.png";
import add from "../../assets/add.png";
import folder from "../../assets/folderIcon.png"
const CoursesList = () => {
    return (
        <Container>
            <Row>
                {/* Add Course */}
                <Col md={{ span: 4 }}>
                    <Card style={{
                        width: "18rem",
                        borderWidth: 5,
                        borderStyle: 'dashed',
                    }}
                        id="card-courses">
                        <Card.Body>
                            <Card.Text>
                                <div
                                style={{ 
                                    padding:"5px 5px 5px 5px",
                                    borderWidth :'5',
                                    borderStyle:'dashed',
                                    textAlign:'center',
                                    width:'5rem',
                                    margin:'auto',
                                    marginTop:"130px",
                                    opacity:'0.5',
                                    borderRadius:'50%'
                                 }}
                                >
                                    <a href="#">
                                    <img src={add} width={40} style={{ 
                                        paddingTop:"10px",
                                        paddingBottom:"10px"
                                     }} />
                                    </a>
                                 
                                </div>
                                <span>
                                    <h1 className="text-center" style={{ 
                                        opacity :'0.5',
                                        marginBottom:'95px',
                                        marginTop:'10px'
                                     }}>Add Course</h1>
                                </span>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* end add course */}
                <Col md={{ span: 4 }}>
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-3 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-2 me-2 ps-2">HAPUS</a>
                            <a href="#" className="btn btn-info pe-2 ps-2 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col ma={{ span: 4 }}>
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-3 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-2 me-2 ps-2">HAPUS</a>
                            <a href="#" className="btn btn-info pe-2 ps-2 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 4 }}>
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-3 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-2 me-2 ps-2">HAPUS</a>
                            <a href="#" className="btn btn-info pe-2 ps-2 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 4 }}>
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-3 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-2 me-2 ps-2">HAPUS</a>
                            <a href="#" className="btn btn-info pe-2 ps-2 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 4 }}>
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                                <img src={folder} width={40} /><span> 10 Modul</span>
                            </Card.Text>
                            <a href="#" className="btn btn-success pe-3 me-2 ps-2">EDIT</a>
                            <a href="#" className="btn btn-danger pe-2 me-2 ps-2">HAPUS</a>
                            <a href="#" className="btn btn-info pe-2 ps-2 text-white">DETAIL</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CoursesList;
