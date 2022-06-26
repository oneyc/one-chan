import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { useParams, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs ,setDoc } from "firebase/firestore";
import { db } from "../lib/init-firebase";

const TemplatePage = (props) => {
    let params = useParams()
    const navigate = useNavigate();

    const [threads, setThreads] = useState([])
    const [replies, setReplies] = useState([])
    const [newReplies, setNewReplies] = useState("")

    const getReplies = async() => {
        try{
            const repliesRefCol = collection(db, "threads/", params.threadId, "/replies");
            const docsSnap = await getDocs(repliesRefCol)
                docsSnap.forEach((doc) => {
                        console.log("DOCSNAP", doc.data())
                        setReplies(Object.values(doc.data()))
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
            console.log(docSnap.data())
            setThreads(docSnap.data())
          } else {
            console.log("No such document!");
          }
        }
        catch(error){
          console.log(error.message)
        }
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log()
        //submitToFirebase(title, content);
    }

    //add reply, need work
    const submitToFirebase = async (titleText, contentText) => {
        await setDoc(doc(db, "threads/", params.threadId, "/replies"),{
          reply: {post1:{content: contentText}},
            })
          navigate(`../success`, { replace: true })
      }

    useEffect(()=>{
        getThreads()
        getReplies()
        console.log(threads)
    },[])

    const repliesList = replies.map((reply) => {
        return(
            <Row className="border border-secondary rounded my-3">
                <Col xs={5} md="auto" className=" p-4">
                    <Image className="rounded" src="https://picsum.photos/100"></Image>
                </Col>
                <Col xs={7} md={10} className="pt-4 pb-4">
                    {reply.text_post}
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
            <h1>{params.threadId}</h1>
            <Row className="border border-secondary rounded my-3">
                <Col xs={5} md="auto" className=" p-4">
                    <Image className="rounded" src="https://picsum.photos/100"></Image>
                </Col>
                <Col xs={7} md={10} className="pt-4 pb-4">
                    <h3>{threads.title}</h3>
                    {threads.thread.post1.content}
                </Col>
            </Row>
            <Container>
                {replies.length ? repliesList : <h3 className='my-5'>No replies yet...</h3>}
                <Form>
                    <Form.Group className="mb-3" controlId="formReply">
                        <Form.Label>Reply to this thread</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Form.Text className="text-muted">
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