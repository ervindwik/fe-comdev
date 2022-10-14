import React from "react";
import "../Styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logoNav.png";
import searchBar from "../assets/searchButtonIcon.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComp = (props) => {
  let token = localStorage.getItem("token");

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
            <Button type="submit" className="buttonSearch">
              <img src={searchBar} alt="" width="30px" />
            </Button>
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {token && token.length ? (
            <Nav className="me-auto my-2 my-lg-0 nav" navbarScroll>
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
              <Nav.Link href="/" className="btn btn-outline-dark px-4"
              onClick={() => localStorage.removeItem("token")}>
                Logout
              </Nav.Link>
              
            </Nav>
          ) : (
            <Nav className="me-auto my-2 my-lg-0 nav" navbarScroll>
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

              <Nav.Link href="/login" className="btn btn-outline-dark px-4">
                Masuk
              </Nav.Link>
              <Nav.Link href="/regis" className="btn oldGreen text-white px-4">
                Daftar
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
