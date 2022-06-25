import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function PostSuccessful() {
  return (
    <React.Fragment>
      <body>
        <Container>
          <Row>
            <h1 className='text-center mt-5'>Post Submitted Successfully</h1>
          </Row>
        </Container>
      </body>
    </React.Fragment>
  );
}

export default PostSuccessful;
