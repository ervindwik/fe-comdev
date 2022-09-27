import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gambar1 from '../assets/dashboard-sec1.png'
import gambar2 from '../assets/dashboard-sec2.png'
import gambar3 from '../assets/dashboard-sec22.png'
import "../Styles/Dashboard.css";

function ContentDashboard() {
    return (
        <>
        <div className='section1'>
            <Container>
                <Row>
                    <Col className='col-md-6'>
                        <h1>Bangun Careermu bersama Comdev Institute Sebagai Developer Profesional</h1>
                        <p>Mulailah perjalananmu sebagai developer profesional</p>
                        <button type='submit' id='btn-mulai'>Belajar Sekarang</button>
                    </Col>

                    <Col className='col-md-6'>
                        <img alt='gambar1' src={gambar1} height='270' />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='section2'>
            <Container>
                <Row>
                    <Col className='col-md-3'>
                        <p>Select Your Courses</p>
                        <hr />
                        <ul class="list-group">
                            <li><Link>Web Developer</Link></li>
                            <li><Link>Front End Developer</Link> </li>
                            <li><Link>Back End Developer</Link></li>
                            <li><Link>Android Developer</Link></li>
                            <li><Link>IOS Developer</Link></li>
                            <li><Link>Flutter Developer</Link></li>
                            <li><Link>UI / UX</Link></li>
                        </ul>
                    </Col>

                    <Col className='col-md-9'>
                        <img alt='gambar2' src={gambar2} width='830' />
                        <hr id='line' />

                        <div class='card-group'>
                            <Card style={{ width: '18rem' }} id='card-courses'>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p>Complete 2022 Web Development Bootcamp</p>
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} id='card-courses'>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p>Complete 2022 Web Development Bootcamp</p>
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} id='card-courses'>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p>Complete 2022 Web Development Bootcamp</p>
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p>Complete 2022 Web Development Bootcamp</p>
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='section3'>
            <Container>
                <h3>Apa Kata Mereka?</h3>

                
            </Container>
        </div>
        </>
    )
}

export default ContentDashboard