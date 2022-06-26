import {Container, Row} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import React from "react";


const TemplatePage = (props) => {

    return(
        <React.Fragment>
            <Container>
                <Row className="my-4">
                </Row>
                <Outlet/>
            </Container>
        </React.Fragment>
    )
}

export default TemplatePage;