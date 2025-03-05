import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ciphers } from '../cipher-list';

function Header() {
  return (
    
    <Navbar expand="md" fixed="top" className="header" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/the-cipher-codex" className="headerText"> The Cipher Codex </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {ciphers.map((item, index) => (
              <Nav.Link as={Link} to={URLText(item.cipher)} key={index} className="bodyText"> {item.cipher} </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Adds '/', converts text to lowercase, and removes spaces for use in a URL
function URLText(item) {
  return "/" + (item === "Vigenère" ? "vigenere" : item.toLowerCase().replace(/\s+/g, ''));
}

export default Header;