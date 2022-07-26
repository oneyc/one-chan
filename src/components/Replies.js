import classes from "./Replies.module.css"

const Replies = (props) => {

    return(
        <div className={classes.test}>
            <div className={classes.infoContainer}>
                <p className={classes.info}>Anonymous</p>
                {/* {props.reply.timestamp.seconds ? <p className={classes.info}>{new Date(props.reply.timestamp.seconds * 1000).toLocaleString()}</p>: "Null"} */}
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
