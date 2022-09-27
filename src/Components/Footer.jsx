import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Logo from "../assets/logoNav.png";
import "../Styles/Footer.css";
import instagram from "../assets/ig.png";
import twitter from "../assets/tw.png";
import linkedin from "../assets/in.png";
import youtube from "../assets/yt.png";
import facebook from "../assets/fb.png";
import gplay from "../assets/gplay.png";

const Footer = () => {
    return (
        <React.Fragment>
            <hr className='line-horizontal'></hr>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col xs="auto">
                            <img src={Logo} className="logo-footer" />
                        </Col>
                        <Col xs={4}>
                            <h5>Comdev Institute</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6">
                            <br />
                            <Table className="table-content table-borderless">
                                <tr>
                                    <td>
                                        <ul>
                                            <li><a href="" className="text-black">Tentang Kami</a></li>
                                            <li><a href="" className="text-black">Bantuan</a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <Row>
                                        <Col className="col-md-2">
                                            <a href="#facebook"><img alt="instagram" src={instagram} width="40" height="35" /></a>
                                        </Col>
                                        <Col className="col-md-2">
                                            <a href="#facebook"><img alt="twitter" src={twitter} width="40" height="35" /></a>
                                        </Col>
                                        <Col className="col-md-2">
                                            <a href="#facebook"><img alt="linkedin" src={linkedin} width="40" height="35" /></a>
                                        </Col>
                                        <Col className="col-md-2">
                                            <a href="#facebook"><img alt="youtube" src={youtube} width="60" height="35" /></a>
                                        </Col>
                                        <Col className="col-md-2">
                                            <a href="#facebook"><img alt="facebook" src={facebook} width="20" height="35" /></a>
                                        </Col>
                                    </Row>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        &#169; 2022 Comdev Institute. All Rights Reserved
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col className="col-md-6">
                            <Table className="table-content table-borderless">
                                <tr>
                                    <td scope="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, molestiae eos porro iste voluptas vitae, sed optio molestias nostrum debitis at cum odio quaerat eveniet voluptatibus quasi voluptatum officiis. Ipsa!</td>
                                </tr>
                                <br />
                                <tr>
                                    <td scope="row">Cooming Soon</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img alt="gplay" src={gplay} width="200" height="62" />
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Footer;