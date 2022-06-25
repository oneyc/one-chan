import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import MainNavbar from "../components/MainNavbar"
import SubmitFile from '../components/SubmitFile';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function NewThread() {
  return (
    <React.Fragment>
      <body>
        <Container>
          <Row>
            <Form>
              <Form.Group className='mt-5'>
                <Form.Label className="fs-2">Title</Form.Label>
                <Form.Control size="lg" placeholder="Enter Title"/>
              </Form.Group>
              <Form.Group className="mt-3 mb-3">
                <Form.Label className="fs-2">Content</Form.Label>
                <Form.Control size="lg" placeholder="Your text here" as="textarea" rows={3}></Form.Control>
              </Form.Group>
              <Form.Group className="mt-3 mb-3">
                <Form.Label className="fs-2">Select Image</Form.Label>
                <SubmitFile/>
              </Form.Group>
              <Button className="mt-3 mb-3" size="lg" variant="outline-dark" type="submit">Submit Post</Button>
            </Form>
          </Row>
        </Container>
      </body>
    </React.Fragment>
  );
}

export default NewThread;
