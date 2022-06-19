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
            <header>
                <MainNavbar/>
            </header>
            <body>
                <Intro onCreateNewThread={addNewThread}/>
                <ListOfThreads/>
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
    )
}

export default Catalog;