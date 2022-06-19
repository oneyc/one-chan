import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import MainNavbar from "../components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function NewThread() {
  return (
    <React.Fragment>
      <header>
        <MainNavbar/>
      </header>
      <body>
        <Container>
          <Row>
            <Form>
              <Form.Group className='mt-5'>
                <Form.Label className="fs-2">Title</Form.Label>
                <Form.Control size="lg" placeholder="Enter Title"/>
              </Form.Group>
              <Form.Group className="mt-3 mb-4">
                <Form.Label className="fs-2">Content</Form.Label>
                <Form.Control size="lg" placeholder="Your text here" as="textarea" rows={3}></Form.Control>
              </Form.Group>
              <Form.Group>

              </Form.Group>
              <Button size="lg" variant="outline-dark" type="submit">Submit Post</Button>
            </Form>
          </Row>
        </Container>

      </body>
      <footer>
        <div className='mt-5 py-5 bg-dark'>
          <Container>
            <p className='text-center text-white'>
              Copyright &copy; One 2022
            </p>
          </Container>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default NewThread;
