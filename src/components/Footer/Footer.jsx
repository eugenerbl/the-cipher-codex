import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer() {
    return(
        <footer className="footer">
            <Container fluid className="headerFooterText">
                <Row style={{justifyContent: "center", fontSize: "18px"}} >
                    &copy; {new Date().getFullYear()} The Cipher Codex
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;