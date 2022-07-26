import React from "react";
import {Col, Card} from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import { useNavigate } from "react-router-dom";
import classes from "./Cards.module.css"

const Cards = (props) => {
  const selectThread = (event) => {
    navigate(`../thread/${event.target.id}`, { replace: true })
  }
  let navigate = useNavigate();
    return(
        <Col style={{padding: "6px"}} key={props.thread.id}>
        <Card className={classes.cards} onClick={selectThread} id={props.thread.id} timestamp={props.thread.data.timestamp} >
          <Ratio aspectRatio="1x1">
          <Card.Img style={{objectFit: "cover"}} variant="top" src={props.thread.data.image} id={props.thread.id}/>
          </Ratio>
          <Card.Body className={classes.cardsBody} id={props.thread.id}>
            <Card.Title id={props.thread.id} style={{whiteSpace: "noWrap", overflow: "hidden"}}>{props.thread.data.title && props.thread.data.title}</Card.Title>
            <p id={props.thread.id} className={classes.cardsText}>
              {props.thread.data.content && (props.thread.data.content)}
            </p>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Cards;