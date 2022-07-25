import React, { useEffect, useState } from "react";
import {Container, Col, Row} from 'react-bootstrap';
import Cards from './Cards'
import LoadingSpinner from "./LoadingSpinner";

import {collection, getDocs, query, orderBy} from 'firebase/firestore'
import { db } from "../lib/init-firebase";
import { useNavigate } from "react-router-dom";

const ListOfThreads = (props) => {

  const [threads, setThreads] = useState([])

  const getThreads = () => {
    try{
      const threadCollectionRef = collection(db, "threads");
      const q = query(threadCollectionRef, orderBy("latest_activity", "desc"))
      getDocs(q)
        .then(
          response => {
          const receivedData = response.docs.map(doc => ({
            data: doc.data(), 
            id: doc.id,
          }
        ))
          setThreads(receivedData);
        })
        .catch(error =>{
          console.log(error.message)
        } 
      )
    }
    catch(error){
      console.log(error.message)
    }
  }
  useEffect(() => {
    getThreads()
  },[])

  const listOfPost = threads.map((threadData) => {
    return(      
      <Cards thread={threadData}></Cards>
    )});

  if(!threads.length){
    return(
      <Container>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <LoadingSpinner/>
        </Col>
      </Container>
    )
  }
  return(
    <React.Fragment>
        <Container className=' threadsList'>
            <Row xs={2} sm={3} md={4} className="g-4">
              {listOfPost}
            </Row>
        </Container>
      
  </React.Fragment>
  )
}

export default ListOfThreads;
