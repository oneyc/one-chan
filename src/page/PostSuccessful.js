import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


function PostSuccessful() {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(3)

  useEffect(()=>{
    console.log("Redirecting to Catalog")
    setTimeout(()=> {
      navigate(`../catalog`, { replace: true })
    },3000)
  },[])

  useEffect(()=>{
    timer > 0 && setTimeout(() => 
      setTimer(timer - 1), 1000
    );
  }, [timer])

  return (
    <React.Fragment>
      <body>
          <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
            <img src="comment-checked-svgrepo-com.svg" style={{width: '100px', height: 'auto', margin: '100px auto 0px auto'}}></img>
            <h1 className='text-center mt-5'>Post Submitted Successfully</h1>
            <h4 className='text-center mt-2' style={{color: "rgba(0,0,0,0.6)"}}>Redirect to Catalog in {timer}s</h4>
          </div>
      </body>
      <div className="mb-5"></div>
    </React.Fragment>
  );
}

export default PostSuccessful;
