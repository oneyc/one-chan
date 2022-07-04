import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Container, Row, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import makeid from "../data/makeId";
import {v4} from 'uuid';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../lib/init-firebase";
import {storage} from '../lib/init-firebase'
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"


function NewThread() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [imageUpload, setImageUpload] = useState(null)
  const [imgUrl, setImgUrl] = useState("")

  const navigate = useNavigate();

  const setTitleToState = (event) => {setTitle(event.target.value)}
  const setContentToState = (event) => {setContent(event.target.value)}


  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpload()
  }

  const handleUpload = () => {
      if (!imageUpload){
        setImgUrl(null)
        return;
      }
        const imageRef = ref(storage, `/threadImage/${imageUpload.name + v4()}`);
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
            console.log('File available at', url);
            setImgUrl(url)
          })
        })
  }

  useEffect(()=>{
    console.log("WTF state", imgUrl)
    const submitData = async() => {
      await setDoc(doc(db, "threads", makeid(20)),{
        title: title,
        image: imgUrl,
        thread: {post1:{content: content}},
      });
      await navigate(`../success`, { replace: true });
    }
    if(imgUrl != ""){
      try{
        console.log("URL state data", imgUrl)
        submitData()
      }
      catch(e){
        console.log(e)
      }
    }
  }, [imgUrl])

  return (
    <React.Fragment>
      <body>
        <Container>
          <Row>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mt-5'>
                <Form.Label className="fs-2">Title</Form.Label>
                <Form.Control id="title-field" size="lg" placeholder="Enter Title" as="input" value={title} onChange={setTitleToState} />
              </Form.Group>
              <Form.Group className="mt-3 mb-3">
                <Form.Label className="fs-2">Content</Form.Label>
                <Form.Control size="lg" placeholder="Your text here" as="textarea" rows={3} value={content} onChange={setContentToState} />
              </Form.Group>
              <Form.Group className="mt-3 mb-3">
                <Form.Label className="fs-2">Select Image</Form.Label>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                </div>
              </Form.Group>
              <Button className="mt-3 mb-3" size="lg" variant="outline-dark" type="submit">Submit Post</Button>
            </Form>
          </Row>
        </Container>
        <div className="mb-5"></div>
      </body>
    </React.Fragment>
  );
}

export default NewThread;
