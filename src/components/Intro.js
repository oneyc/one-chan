import React from "react";
import {Image, Button, Container, Col, Row} from 'react-bootstrap';

const Intro = (props) => {
    return(
      <Container className="mb-5">
        <Row className="my-5">
          {/* <Col sm={7} className="">
            <Image style={{width: '100%', height: "300px", objectFit: 'cover'}} src="/pexels-photo-2387793.jpeg"></Image>
          </Col> */}
          <Col className="" style={{display: 'flex', flexDirection: 'column',textAlign: 'center', alignContent: 'center'}}>
            <h1 className="my-2">Discussion Board</h1>
            <p>Welcome to One-Channel, the anonymous imageboard! Account is not required to participate in the community. Feel free to click on any thread and jump right in.</p>
            {/* <h6>Rules:</h6>
            <ul>
              <li>Be civil</li>
              <li>Have fun!</li>
            </ul> */}
            <Button variant="outline-dark" onClick={props.onCreateNewThread} size="lg">Start A New Thread</Button>
          </Col>
        </Row>
        <hr/>
      </Container>
    )
}

export default Intro