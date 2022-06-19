import {Container, Row, Col} from 'react-bootstrap';
import MainNavbar from "../components/MainNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function PostSuccessful() {
  return (
    <React.Fragment>
      <header>
        <MainNavbar/>
      </header>
      <body>
        <Container>
          <Row>
            <h1 className='text-center mt-5'>Post Submitted Successfully</h1>
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

export default PostSuccessful;
