import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gambar1 from '../assets/dashboard-sec1.png'
import gambar2 from '../assets/dashboard-sec2.png'
import gambar3 from '../assets/dashboard-sec22.png'
import gambar4 from '../assets/dashboard-sec3.png'
import gambar5 from '../assets/prev.png'
import gambar6 from '../assets/next.png'
import gambar7 from '../assets/rating.png'
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
                        <Card className="bg-dark text-white">
                            <Card.Img src={gambar2} alt="Card image" />
                            <Card.ImgOverlay>
                                <h2 id='title-card'>Web Developer Courses</h2>
                                <p id='text-card'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, molestiae eos porro iste voluptas vitae, <br /> sed optio molestias nostrum debitis at cum odio quaerat.</p>
                                <button type='submit' id='btn-card'>Mulai Belajar</button>
                            </Card.ImgOverlay>
                        </Card>

                        <hr id='line' />

                        <div class='card-group'>
                            <Card style={{ width: '18rem' }} id='card-courses'>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p class='mb-1'>Complete 2022 Web Development Bootcamp</p>
                                    <img src={gambar7} width={135} />
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} id='card-courses'>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p class='mb-1'>Complete 2022 Web Development Bootcamp</p>
                                    <img src={gambar7} width={135} />
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} id='card-courses'>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p class='mb-1'>Complete 2022 Web Development Bootcamp</p>
                                    <img src={gambar7} width={135} />
                                    <Card.Text>Rp 150.000</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={gambar3} />
                                <Card.Body>
                                    <p class='mb-1'>Complete 2022 Web Development Bootcamp</p>
                                    <img src={gambar7} width={135} />
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

                <Card id='testimoni'>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={gambar4} class="img-fluid rounded-start" width={335} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-text">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore 
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat”
                                </p><br />

                                <p class="card-title">Michael Zaenal Ahmad</p>
                                <p class="card-title">Web Developer at <b>PT Petik Emas Consulting</b></p>
                            </div>
                        </div>
                    </div>
                </Card>
                
                <div id='btn-testi'>
                    <Link class='me-2'><img src={gambar5} width={30} /></Link>
                    <Link><img src={gambar6} width={30} /></Link>
                </div>
            </Container>
        </div>
        </>
    )
}

export default ContentDashboard