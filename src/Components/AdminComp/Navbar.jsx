import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logoNav.png";

function NavbarAdmin() {
  return (
    <Navbar className="navbar-admin">
      <Container>
      <img src={Logo} className="logo" />
        <Navbar.Brand href="#home" className="text-white fw-bolder">Comdev Insitute</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Rifki Alamsyah</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
