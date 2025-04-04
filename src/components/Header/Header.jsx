import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ciphers } from '../cipher-list';
import { DarkToggle } from '../DarkToggle/DarkToggle';

function Header() {
   const location = useLocation();
   return (
      <Navbar expand="lg" collapseOnSelect fixed="top" className="header" data-bs-theme="light">
         <Container>
            <Navbar.Brand href="/the-cipher-codex" className="headerFont"> The Cipher Codex </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  {ciphers.map((item, index) => (
                     <Nav.Link as={Link} to={item.path} key={index} eventKey={index}
                        className={`headerFooterText ${location.pathname === item.path ? 'active' : ''}`}>
                        {item.displayName}
                     </Nav.Link>
                  ))}
               </Nav>
               <DarkToggle />
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;