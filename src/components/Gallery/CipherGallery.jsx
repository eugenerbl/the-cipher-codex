import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ciphers from '../cipher-list';
import './CipherGallery.css';

function Gallery() {
   return (
      <Container className="galleryContainer">
         <Row xs={1} md={2} lg={3} className="g-4 gallery">
            {Array.from({ length: ciphers.length }).map((_, index) => (
               <Col key={index}>
                  <Link to={ciphers[index].path} className="card">
                     <Card>
                        <Card.Body className="titleBody">
                           <Card.Title className="title">{ciphers[index].displayName}</Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" className="cardImage" src={ciphers[index].image} alt={ciphers[index].displayName}/>
                     </Card>
                  </Link>
               </Col>
            ))}
         </Row>
      </Container>
   );
}

export default Gallery;