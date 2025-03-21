import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ciphers } from '../cipher-list';

function Header() {
  const location = useLocation();
  return (
    
    <Navbar expand="lg" collapseOnSelect fixed="top" className="header" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/" className="headerFont"> The Cipher Codex </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {ciphers.map((item, index) => (
              <Nav.Link as={Link} to={URLText(item.cipher)} key={index} eventKey={index} 
                className={`headerFooterText ${location.pathname === URLText(item.cipher) ? 'active' : ''}`}> 
                {item.cipher} 
              </Nav.Link>
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