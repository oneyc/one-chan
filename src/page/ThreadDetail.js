import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Replies from '../components/Replies';
import FirstPost from '../components/FirstPost';
import Breadcrumbs from '../components/Breadcrumbs';
import makeid from '../data/makeId';
import LoadingSpinner from '../components/LoadingSpinner';

import { collection, doc, getDoc,onSnapshot,setDoc, query, orderBy, serverTimestamp, runTransaction } from "firebase/firestore";
import { db, storage } from "../lib/init-firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

const TemplatePage = (props) => {
    let params = useParams()

    const [threads, setThreads] = useState([]);
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState("");
    const [imageUpload, setImageUpload] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getThreads()
        getReplies()
    },[])
    useEffect(()=> {
        const submitData = async() => {
            const userReplyRef = doc(db, "threads/", params.threadId, "/replies/", makeid(20))
            const updateLatestActivity = await setDoc(userReplyRef, {content: newReply, image: imgUrl, timestamp: serverTimestamp()})
                .then(updateLatestActivity => {
                    setLoading(false)
                    setImageUpload(null);
                    setImgUrl("");
                    setNewReply([]);
                    console.log("State Cleared!")
                    }         
                )
                .catch(e =>console.log("Sending reply failed: ", e))
        }
        const changeTimestamp = async() => {
            const threadRefDoc = doc(db, "threads/", params.threadId);
            try {
                await runTransaction(db, async (transaction) => {
                const threadDoc = await transaction.get(threadRefDoc);
                if (!threadDoc.exists()) {
                    throw "Document does not exist!";
                }
                const latestActivity = serverTimestamp()
                transaction.update(threadRefDoc, { latest_activity: latestActivity });
                });
            } catch (e) {
                console.log("Transaction failed: ", e);
            }
        }

        if(newReply.length === 0){
            return;
        }
        if(imgUrl !== ""){
            try{
                submitData()
                changeTimestamp()
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
                    image: doc.data().image,
                })                    
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
                        image: docSnap.data().image,
                        timestamp: docSnap.data().timestamp,
                    })
          } else {
            console.log("No such document!");
          }
        }
        catch(error){
          console.log(error.message)
        }
    }
    

    const handleUpload = () => {
    if(newReply.length === 0){
        alert("Reply cannot be empty");
        return;
    }
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
        setLoading(true)
        handleUpload()
    }
    const handleChangeReply = (event) =>{
        setNewReply(event.target.value)
    }


    const repliesList = replies.map((reply) => {
        return(
            <Replies reply={reply}/>
        )
    })


    if(Object.keys(threads).length === 0){
        return(
            <Col style={{display: 'flex', justifyContent: 'center'}}>
              <LoadingSpinner/>
            </Col>
        )   
    }
    return(
        <React.Fragment>
            <div style={{padding: '0px'}}>
                <Breadcrumbs threads={threads}/>
                <h1>{threads.title}</h1>
                <FirstPost threads={threads} />
                {replies.length ? repliesList : <h3 className='my-5'>No replies yet...</h3>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formReply">
                        <Form.Label>Reply to this thread</Form.Label>
                        <Form.Control as="textarea" rows={3} value={newReply} onChange={handleChangeReply}/>
                        <Form.Text className="text-muted" >
                        </Form.Text>
                        <div className="custom-file mt-3">
                        <input type="file" className="custom-file-input" id="customFile" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                        </div>
                    </Form.Group>
                    {loading === false && <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>}
                    {loading === true && <Button variant="outline-dark" type="submit" disabled>
                        Submitting...
                    </Button>}
                </Form>
            </div>
            <div className="mb-5"></div>
        </React.Fragment>
    )
}

export default TemplatePage;