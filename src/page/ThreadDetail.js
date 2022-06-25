import MainNavbar from "../components/MainNavbar"
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { Outlet, useParams } from "react-router-dom";
import React from "react";
import replies from "../data/replies";

const TemplatePage = (props) => {
    let params = useParams()
    return(
        <React.Fragment>
            <h1>{params.threadId}</h1>
            <Container>
                <Row className="border border-secondary rounded my-3">
                    <Col xs={5} md="auto" className=" p-4">
                        <Image className="rounded" src="https://picsum.photos/100"></Image>
                    </Col>
                    <Col xs={7} md={10} className="pt-4 pb-4">
                        Jesus, someone remembers this? I think I got this waaaay back in 2009 or 2010 and bragged to my brothers that I was gonna be a mangaka.
                    </Col>
                </Row>
                <Row className="border border-secondary rounded my-3">
                    <Col xs={5} md="auto" className=" p-4">
                        <Image className="rounded" src="https://picsum.photos/100"></Image>
                    </Col>
                    <Col xs={7} md={10} className="pt-4 pb-4">
                        you are literally paying for your instructor's critiques, every thing else can be pirated. Those people are probably rich people
                    </Col>
                </Row>
                <Row className="border border-secondary rounded my-3">
                    <Col xs={7} md={10} className="pt-4 pb-4">
                    You can do it simply using d-flex and flex fill react bootstrap class. It will also fulfill your need of equal height cards in a row.
                    </Col>
                </Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formReply">
                        <Form.Label>Reply to this thread</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default TemplatePage;