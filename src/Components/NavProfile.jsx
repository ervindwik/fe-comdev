import React, { useState } from "react";
import '../Styles/NavProfile.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logoNav.png";
import searchBar from "../assets/searchButtonIcon.png"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavbarBrand } from "react-bootstrap";
import user from "../assets/user.png";
import profile from "../assets/profile.png";
import course from "../assets/course.png";
import setting from "../assets/setting.png";
import logout from "../assets/logout.png";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const NavbarProfile = () => {
    const [open, setOpen] = useState(false);
    return (
        <Navbar bg="white" expand="lg" fixed="top" className="fw-bolder">
            <Container>
                <img src={Logo} className="logo" />
                <Navbar.Brand>
                    <Form className="form">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="searchBar"
                            aria-label="Search"
                        />
                        <Button type="submit" className="buttonSearch"><img src={searchBar} alt="" width="30px" /></Button>
                    </Form>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav"
                        navbarScroll
                    >
                        <NavDropdown title="Courses" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1">Langganan</Nav.Link>
                        <Nav.Link href="#action2">Lainya</Nav.Link>

                        <div className="profile" onClick={() => { setOpen(!open) }}>
                            <img src={user} className="user" width={45}></img>
                        </div>
                        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                            <ul>
                                <DropdownItem img={profile} text={"My Profile"} />
                                <DropdownItem img={course} text={"My Course"} />
                                <DropdownItem img={setting} text={"Pengaturan"} />
                                <DropdownItem img={logout} text={"Logout"} />
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const DropdownItem = (props) => {
    return (
        <Container>
            <li className="dropdown-item" >
                <img src={props.img}></img>
                <a>{props.text}</a>
            </li >
        </Container>
    );
};

export default NavbarProfile;
