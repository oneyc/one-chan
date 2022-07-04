import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import makeid from '../data/makeId';

import { collection, doc, getDoc,onSnapshot,setDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../lib/init-firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

const TemplatePage = (props) => {
    let params = useParams()

    const [threads, setThreads] = useState([])
    const [replies, setReplies] = useState([])
    const [newReply, setNewReply] = useState("")
    const [imageUpload, setImageUpload] = useState(null)
    const [imgUrl, setImgUrl] = useState("")

    useEffect(()=>{
        getThreads()
        getReplies()
    },[])
    useEffect(()=> {
        console.log("URL state", imgUrl)
        const submitData = async() => {
            const userReplyRef = doc(db, "threads/", params.threadId, "/replies/", makeid(20))
            await setDoc(userReplyRef, {content: newReply, image: imgUrl, timestamp: serverTimestamp()})
        }
        if(imgUrl !== ""){
            try{
                submitData()
              }
              catch(e){
                console.log(e)
              }        
            }
    }, [imgUrl])


    const getReplies = async() => {
        try{
            const collectionOfReplies = await collection(db, "threads/", params.threadId, "/replies")
            const q = query(collectionOfReplies, orderBy("timestamp"))
            const querySnapshot = await onSnapshot(q, (querySnapshot) => {
                setReplies(querySnapshot.docs.map((doc) => ({
                    content: doc.data().content,
                    timestamp: doc.data().timestamp,
                    image: doc.data().image}
                    )
                ))
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
                        content: docSnap.data().content,
                        image: docSnap.data().image})

            console.log(docSnap.data())
          } else {
            console.log("No such document!");
          }
        }
        catch(error){
          console.log(error.message)
        }
    }


    const handleUpload = () => {
    if (!imageUpload){
        setImgUrl(null)
        return;
    }
        const imageRef = ref(storage, `/repliesImage/${makeid(8) + imageUpload.name}`);
        const uploadTask = uploadBytesResumable(imageRef, imageUpload);

        uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is' + progress + "% done")
            switch(snapshot.state){
                case 'paused':
                console.log("Upload is paused")
                break
                case 'running':
                console.log('Upload is running');
                break;
            }
        },
        (error) => {
        console.log(error)
        },
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImgUrl(url)
        })
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpload()
    }
    const handleChangeReply = (event) =>{
        setNewReply(event.target.value)
    }


    const repliesList = replies.map((reply) => {
        return(
            <Row className="rounded my-3" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
                <Col xs="auto" sm="auto" className="">
                    {reply.image && <Image className="rounded mx-2 my-4" style={{height: "100px"}} src={reply.image}></Image>}
                </Col>
                <Col xs="auto" sm="auto" className=" mx-2 my-4">
                    {console.log(reply)}
                    {reply.content}
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
            <Row className="rounded my-3" style={{backgroundColor: "grey"}}>
                <Col xs={5} sm="auto" className=" p-4">
                    <Image className="rounded" src="https://picsum.photos/100"></Image>
                </Col>
                <Col xs={5} sm={5} className="pt-4 pb-4">
                    {threads.content}
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
                        <div class="custom-file mt-3">
                        <input type="file" class="custom-file-input" id="customFile" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                        </div>
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