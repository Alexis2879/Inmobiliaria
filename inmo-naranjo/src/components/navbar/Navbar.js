import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
      <Container>
      
        <Navbar.Brand as={Link} to={"/"}>
          <img src='./logo-nav-2.png' 
           alt='logo'
           height= '100px'
           />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/noticias"}>Noticias</Nav.Link>
            <NavDropdown title="Propiedades" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/lurin"}>Lurin</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/puntahermosa"}>
                Punta Hermosa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/puntanegra"}>
                Punta Negra</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/sanbartolo"}>
                San Bartolo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/BuscarPropiedades"}>Buscar Propiedades</Nav.Link>
            <Nav.Link as={Link} to={"/Ofreceuninmueble"}>
              ¿Ofrece un inmueble?
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to={"/contactanos"}>Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
