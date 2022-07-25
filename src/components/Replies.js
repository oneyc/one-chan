import {Row, Col, Image} from 'react-bootstrap';
import classes from "./Replies.module.css"

const Replies = (props) => {

    return(
                <div className={classes.test}>
                <div className={classes.infoContainer}>
                    <p className={classes.info}>Anonymous</p>
                    {/* <p className={classes.info}>{console.log(props.reply.timestamp.seconds)}</p> */}
                </div>
                <div className={classes.mainContent}>
                    {props.reply.image ?                    
                    <div className={classes.imageContainer}>
                        <img src={props.reply.image}></img>
                    </div>
                    : null}
                    <div className={classes.content}>
                            <p>{props.reply.content}</p>
                    </div>
                </div>
            </div>
    )
}

export default Replies;
