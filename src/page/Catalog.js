import Intro from "../components/Intro"
import ListOfThreads from '../components/ListOfThreads';
import { useNavigate } from "react-router-dom";
import React from "react";


const Catalog = (props) => {

const navigate = useNavigate();

const addNewThread = () => {
    let path = "/new-thread";
    navigate(path)
  }

    return(
        <React.Fragment>
                <Intro onCreateNewThread={addNewThread}/>
                <ListOfThreads />
                <div className="mb-5"></div>
        </React.Fragment>
    )
}

export default Catalog;