import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function PageNotFound() {
  return (
    <React.Fragment>
      <body>
        <Container>
          <Row>
            <h1 className='text-center mt-5'>Page Not Found</h1>
          </Row>
        </Container>
      </body>
    </React.Fragment>
  );
}

export default PageNotFound;
