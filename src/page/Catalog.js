import Intro from "../components/Intro"
import ListOfThreads from '../components/ListOfThreads';
import { useNavigate } from "react-router-dom";
import React from "react";


const Catalog = (props) => {

const navigate = useNavigate();

const addNewThread = () => {
    console.log("AddNewThread clicked")
    let path = "/new-thread";
    navigate(path)
  }

const getThreadId = (threadId) => {
    console.log("Catalog", threadId);
    props.ongetId(threadId)
}

    return(
        <React.Fragment>
            <body>
                <Intro onCreateNewThread={addNewThread}/>
                <ListOfThreads onGetId = {getThreadId} />
                <div className="mb-5"></div>
            </body>
        </React.Fragment>
    )
}

export default Catalog;