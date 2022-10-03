import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import comdev from "../assets/comdev.png";
import "../Styles/Footer.css";
import instagram from "../assets/ig.png";
import twitter from "../assets/tw.png";
import linkedin from "../assets/in.png";
import youtube from "../assets/yt.png";
import facebook from "../assets/fb.png";
import gplay from "../assets/gplay.png";
import loc from "../assets/loc.png";

const Footer = () => {
    return (
        <React.Fragment>
            <hr className='line-horizontal'></hr>
            <div className='footer-section'>
                <Container>
                    <Row>
                        <Col>
                            <img src={comdev} className="comdev" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6">
                            <ul className="list-item">
                                <li><a href="#tentangkami" className="text-black">Tentang Kami</a></li>
                                <li><a href="#bantuan" className="text-black">Bantuan</a></li>
                            </ul>
                        </Col>
                        <Col className="col-md-6">
                            <div className="column-1">
                                <Row>
                                    <Col className="ikon-lok  d-flex">
                                        <img alt="lokasi" src={loc} width="25" height="30" />
                                        <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></span> 
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6">
                            <div className="column-2">
                                <Row>
                                    <Col className="col-md-2">
                                        <a href="#instagram"><img alt="instagram" src={instagram} width="40" height="35" /></a>
                                    </Col>
                                    <Col className="col-md-2 ms-1">
                                        <a href="#twitter"><img alt="twitter" src={twitter} width="40" height="35" /></a>
                                    </Col>
                                    <Col className="col-md-2 ms-1">
                                        <a href="#linkedin"><img alt="linkedin" src={linkedin} width="40" height="35" /></a>
                                    </Col>
                                    <Col className="col-md-2 ms-1">
                                        <a href="#youtube"><img alt="youtube" src={youtube} width="43" height="35" /></a>
                                    </Col>
                                    <Col className="col-md-2 ms-1">
                                        <a href="#facebook"><img alt="facebook" src={facebook} width="20" height="35" /></a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col-md-6">
                            <div className="column-3">
                                <h5>Cooming Soon</h5>
                                <a href="#gplay"><img alt="gplay" src={gplay} width="150" height="30" /></a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="copyright col-md-8">
                            &#169; 2022 Comdev Institute. All Rights Reserved
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    )
}

export default Footer;