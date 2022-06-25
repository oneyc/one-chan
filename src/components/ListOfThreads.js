import React, { useEffect, useState, Fragment } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';

import postData from "../data/postData"
import {collection, getDoc, getDocs} from 'firebase/firestore'
import { db } from "../lib/init-firebase";
import { deepCopy } from "@firebase/util";

const ListOfThreads = () => {

  const [threads, setThreads] = useState([])
  
  const getThreads = () => {
    try{
      const threadCollectionRef = collection(db, "threads");
      getDocs(threadCollectionRef)
        .then(response => {
          const receivedData = response.docs.map(doc => ({
            data: doc.data(), 
            id: doc.id,
          }))
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

  const listOfPost = threads.map((thread) => {
    console.log("Thread data", thread)
    return(      
      <Col key={thread.id}>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>{thread.data.title}</Card.Title>
            <Card.Text>
              {thread.data.thread && thread.data.thread.post1.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )});

  if(!threads.length){
    return(
      <Container>
        <Col>
          <h3 class="text-center">Loading...</h3>
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
