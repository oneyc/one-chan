import MainNavbar from "../components/MainNavbar"
import Intro from "../components/Intro"
import ListOfThreads from '../components/ListOfThreads';
import {Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import React from "react";


const Catalog = (props) => {

const navigate = useNavigate();

const addNewThread = () => {
    console.log("AddNewThread clicked")
    let path = "/new-thread";
    navigate(path)
  }

    return(
        <React.Fragment>
            <body>
                <Intro onCreateNewThread={addNewThread}/>
                <ListOfThreads/>
            </body>
        </React.Fragment>
    )
}

export default Catalog;