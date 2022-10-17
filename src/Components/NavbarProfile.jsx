import React from "react";
import '../Styles/NavbarProfile.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from "../assets/logoNav.png";
import searchBar from "../assets/searchButtonIcon.png";
import menu from "../assets/user.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import user from "../assets/usr.png";
import course from "../assets/crs.png";
import setting from "../assets/set.png";
import out from "../assets/out.png";

function NavbarProfile(){
    const logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return(
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
                        <Nav.Link href="#action2">Lainnya</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Dropdown>
                    <Dropdown.Toggle className="d-block" id="drop">
                        <img src={menu} class="menu-burger" alt=""/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Link to="/profil" style={{textDecoration: 'none', color:'black'}}> <img src={user} alt="" width={22} style={{marginRight: '10px'}} /> Profile </Link>
                       </Dropdown.Item>
                       <Dropdown.Item>
                            <Link to="/profil" style={{textDecoration: 'none', color:'black'}}> <img src={course} alt="" width={22} style={{marginRight: '10px'}} /> My Course </Link>
                       </Dropdown.Item>
                       <Dropdown.Item>
                            <Link to="/profil" style={{textDecoration: 'none', color:'black'}}> <img src={setting} alt="" width={22} style={{marginRight: '10px'}} /> Pengaturan </Link>
                       </Dropdown.Item>
                       <Dropdown.Item onClick={logout} style={{color:'red'}}><img src={out} alt="" width={22} style={{marginRight: '10px'}} /> Logout</Dropdown.Item>
                   </Dropdown.Menu>
               </Dropdown>
                               
            </Container>
        </Navbar>               
        // <nav id="navbar">
        //     <Link to="/" className="logo">
        //         <img src={logo2} alt=""/>
        //     </Link>
        //     <p></p>
        //     <Dropdown>
        //         <Dropdown.Toggle className="d-block" id="dropdown">
        //             <img src={menu} class="menu-burger" alt=""/>
        //         </Dropdown.Toggle>
        //         <Dropdown.Menu>
        //             <Dropdown.Item>
        //             <Link to="/profil" style={{textDecoration: 'none', color:'black'}}> My Account </Link>
        //                 </Dropdown.Item>
        //             <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        //         </Dropdown.Menu>
        //     </Dropdown>
        // </nav>
    )
}

export default NavbarProfile;