import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import gambar3 from "../../assets/dashboard-sec22.png";
import gambar7 from "../../assets/rating.png";
import folder from "../../assets/folderIcon.png"

const CoursesList = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4 }}>
                <a target="_blank" href="#">
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                            <img src={folder} width={40}/><span> 10 Modul</span> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
                <Col md={{ span: 4 }}>
                <a target="_blank" href="#">
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                            <img src={folder} width={40}/><span> 10 Modul</span> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
                <Col ma={{ span: 4 }}>
                <a target="_blank" href="#">
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                            <img src={folder} width={40}/><span> 10 Modul</span> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4 }}>
                <a target="_blank" href="#">
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                            <img src={folder} width={40}/><span> 10 Modul</span> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
                <Col md={{ span: 4 }}>
                <a target="_blank" href="#">
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                            <img src={folder} width={40}/><span> 10 Modul</span> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
                <Col md={{ span: 4 }}>
                <a target="_blank" href="#">
                    <Card style={{ width: "18rem" }} id="card-courses">
                        <Card.Img variant="top" src={gambar3} />
                        <Card.Body>
                            <p class="mb-1">Complete 2022 Web Development Bootcamp</p>
                            <Card.Text>
                            <img src={folder} width={40}/><span> 10 Modul</span> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default CoursesList;
