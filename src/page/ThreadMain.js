import MainNavbar from "../components/MainNavbar"
import {Container, Row} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import React from "react";


const TemplatePage = (props) => {

    return(
        <React.Fragment>
            <Container>
                <Row className="my-4">
                    <h1>Thread ID</h1>
                </Row>
                <Outlet/>
            </Container>
        </React.Fragment>
    )
}

export default TemplatePage;