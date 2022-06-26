import React, { useEffect, useState } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';

import {collection, getDocs} from 'firebase/firestore'
import { db } from "../lib/init-firebase";
import { useNavigate } from "react-router-dom";

const ListOfThreads = (props) => {

  let navigate = useNavigate();
  const [threads, setThreads] = useState([])
  

  const selectThread = (event) => {
    console.log("Selected", event.target.id)
    props.onGetId(event.target.id)
    navigate(`../thread/${event.target.id}`, { replace: true })
  }

  
  const getThreads = () => {
    try{
      const threadCollectionRef = collection(db, "threads");
      getDocs(threadCollectionRef)
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


  const listOfPost = threads.map((thread) => {
    console.log("Thread data", thread)
    return(      
      <Col>
        <Card onClick={selectThread} key={thread.id} id={thread.id}>
          <Card.Img variant="top" src="https://picsum.photos/200" id={thread.id}/>
          <Card.Body id={thread.id}>
            <Card.Title id={thread.id}>{thread.data.title && thread.data.title}</Card.Title>
            <Card.Text id={thread.id}>
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
