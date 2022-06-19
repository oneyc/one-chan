import React from "react";
import {Image, Button, Container, Col, Row} from 'react-bootstrap';

const Intro = (props) => {
    return(
      <Container className="mb-5">
        <Row className="my-5">
          <Col sm={7} className="">
            <Image src="https://picsum.photos/700/300" fluid></Image>
          </Col>
          <Col className="">
            <h1 className="my-2">Current Board</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <Button variant="outline-dark" onClick={props.onCreateNewThread}>Start A New Thread</Button>{' '}
          </Col>
        </Row>
        <hr/>
      </Container>
    )
}

export default Intro