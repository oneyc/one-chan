import MainNavbar from "../components/MainNavbar"
import {Container} from 'react-bootstrap';
import { Outlet, useParams } from "react-router-dom";
import React from "react";
import replies from "../data/replies";

const TemplatePage = (props) => {
    let params = useParams()
    return(
        <React.Fragment>
            <p>{params.threadId}</p>
        </React.Fragment>
    )
}

export default TemplatePage;