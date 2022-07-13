import React, { useEffect, useState } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';


import {collection, getDocs, query, orderBy} from 'firebase/firestore'
import { db } from "../lib/init-firebase";
import { useNavigate } from "react-router-dom";

const ListOfThreads = (props) => {

  let navigate = useNavigate();
  const [threads, setThreads] = useState([])
  

  const selectThread = (event) => {
    navigate(`../thread/${event.target.id}`, { replace: true })
  }

  
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

  const listOfPost = threads.map((thread) => {
    return(      
      <Col >
        <Card onClick={selectThread} key={thread.id} id={thread.id} timestamp={thread.data.timestamp} 
              style={{boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", mixHeight:"400px",  
              maxHeight:"500px", overflow:"hidden", cursor: "pointer"}}>
          <Ratio aspectRatio="1x1">
          <Card.Img style={{objectFit: "cover"}} variant="top" src={thread.data.image} id={thread.id}/>
          </Ratio>
          <Card.Body id={thread.id}>
            <Card.Title id={thread.id} style={{whiteSpace: "noWrap", overflow: "hidden"}}>{thread.data.title && thread.data.title}</Card.Title>
            <Card.Text id={thread.id} className={"overflow-hidden"}>
              {thread.data.content && thread.data.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )});


  if(!threads.length){
    return(
      <Container>
        <Col>
          <h3 className="text-center">Loading...</h3>
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
