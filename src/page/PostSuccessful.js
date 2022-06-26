import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


function PostSuccessful() {
  const navigate = useNavigate()
  const [timer, setTimer] = useState()

  useEffect(()=>{
    console.log("Redirecting to Catalog")
    setTimeout(()=> {
      navigate(`../catalog`, { replace: true })
    },3000)
  },[])

  return (
    <React.Fragment>
      <body>
        <Container>
          <Row>
            <h1 className='text-center mt-5'>Post Submitted Successfully</h1>
            <h4 className='text-center mt-2'>Redirect to Catalog in 3s</h4>
          </Row>
        </Container>
      </body>
      <div className="mb-5"></div>
    </React.Fragment>
  );
}

export default PostSuccessful;
