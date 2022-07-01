import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc,onSnapshot,setDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/init-firebase";
import makeid from '../data/makeId';

const TemplatePage = (props) => {
    let params = useParams()

    const [threads, setThreads] = useState([])
    const [replies, setReplies] = useState([])
    const [replyId, setReplyId] = useState([])
    const [newReply, setNewReply] = useState("")

    useEffect(()=>{
        getThreads()
        getReplies()
    },[])

    const getReplies = async() => {
        try{
            const collectionOfReplies = await collection(db, "threads/", params.threadId, "/replies")
            const q = query(collectionOfReplies, orderBy("timestamp"))
            const querySnapshot = await onSnapshot(q, (querySnapshot) => {
                setReplies(querySnapshot.docs.map((doc) => ({
                    textpost: doc.data().textpost,
                    timestamp: doc.data().timestamp}
                    )
                ))
            console.log(replies)
            })
            }
        catch(error){
            console.log(error)
        }

}
    const getThreads = async() => {
        try{
          const threadRefDoc = doc(db, "threads/", params.threadId);
          const docSnap = await getDoc(threadRefDoc);
          if (docSnap.exists()) {
            setThreads({title: docSnap.data().title,
                        textpost: docSnap.data().thread.post1.content})

            console.log(docSnap.data())
          } else {
            console.log("No such document!");
          }
        }
        catch(error){
          console.log(error.message)
        }
      }
    const submitToFirebase = async () => {
        const userReplyRef = doc(db, "threads/", params.threadId, "/replies/", makeid(20))
        await setDoc(userReplyRef, {textpost: newReply, timestamp: serverTimestamp()}
        );
      }


    const handleSubmit = (event) => {
        event.preventDefault();
        submitToFirebase()
    }

    const handleChangeReply = (event) =>{
        setNewReply(event.target.value)
    }


    const repliesList = replies.map((reply) => {
        return(
            <Row className="border border-secondary rounded my-3">
                <Col xs={5} md="auto" className=" p-4">
                    <Image className="rounded" src="https://picsum.photos/100"></Image>
                </Col>
                <Col xs={7} md={10} className="pt-4 pb-4">
                    {reply.textpost}
                </Col>
            </Row>
        )
    })


    if(Object.keys(threads).length === 0){
        return(
            <Col>
            <h3 class="text-center">Loading...</h3>
            <div className="mb-5"></div>
            </Col>
        )   
    }
    return(
        <React.Fragment>
            <h1>{threads.title}</h1>
            <Row className="border border-secondary rounded my-3">
                <Col xs={5} md="auto" className=" p-4">
                    <Image className="rounded" src="https://picsum.photos/100"></Image>
                </Col>
                <Col xs={7} md={10} className="pt-4 pb-4">
                    {threads.textpost}
                </Col>
            </Row>
            <Container>
                {replies.length ? repliesList : <h3 className='my-5'>No replies yet...</h3>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formReply">
                        <Form.Label>Reply to this thread</Form.Label>
                        <Form.Control as="textarea" rows={3} value={newReply} onChange={handleChangeReply}/>
                        <Form.Text className="text-muted" >
                        </Form.Text>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <div className="mb-5"></div>
        </React.Fragment>
    )
}

export default TemplatePage;