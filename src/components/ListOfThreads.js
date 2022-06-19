import React from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';

const ListOfThreads = () => {
    return(    
    <Container className=' threadsList'>
    <Row xs={2} sm={3} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/200" />
            <Card.Body>
              <Card.Title>Thread title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>)
}

export default ListOfThreads;
