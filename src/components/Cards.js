import React from "react";
import {Col, Card} from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const selectThread = (event) => {
    navigate(`../thread/${event.target.id}`, { replace: true })
  }
  let navigate = useNavigate();
    return(
        <Col style={{padding: "6px"}} key={props.thread.id}>
        <Card onClick={selectThread} id={props.thread.id} timestamp={props.thread.data.timestamp} 
              style={{boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height:"450px",  
              overflow:"hidden", cursor: "pointer"}}>
          <Ratio aspectRatio="1x1">
          <Card.Img style={{objectFit: "cover"}} variant="top" src={props.thread.data.image} id={props.thread.id}/>
          </Ratio>
          <Card.Body id={props.thread.id}>
            <Card.Title id={props.thread.id} style={{whiteSpace: "noWrap", overflow: "hidden"}}>{props.thread.data.title && props.thread.data.title}</Card.Title>
            <Card.Text id={props.thread.id} className={"overflow-hidden"}>
              {props.thread.data.content && (props.thread.data.content).split(" ").splice(0,15).join(" ")}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Cards;