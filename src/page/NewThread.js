import React, { useState } from "react";
import {Container, Row, Button, Form} from 'react-bootstrap';
import SubmitFile from '../components/SubmitFile';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../lib/init-firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import makeid from "../data/makeId";
import {storage} from '../lib/init-firebase'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"

function NewThread() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [imgUrl, setImgURL] = useState(null);
  const [progresspercent, setProgressPercentage] = useState(0);
  const navigate = useNavigate();

  const setTitleToState = (event) => {setTitle(event.target.value)}
  const setContentToState = (event) => {setContent(event.target.value)}

  const handleSubmit = (event) => {
    event.preventDefault();
    submitToFirebase(title, content)
    handleUpload(event)
  }

  const submitToFirebase = async (titleText, contentText) => {
    await setDoc(doc(db, "threads", makeid(20)),{
      title: titleText,
      thread: {post1:{content: contentText}},
        })
      navigate(`../success`, { replace: true })
  }

  const handleUpload = (e) => {
    const file = e.target[0]?.files[0]
    if (!file){
      alert("Choose a file first.")
    }

    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) * 100);
      setProgressPercentage(progress);
      console.log(progresspercent)
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgURL(downloadURL)
        console.log(imgUrl)
      });
    })
  }

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
                <SubmitFile/>
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
