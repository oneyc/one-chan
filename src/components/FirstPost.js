import classes from "./FirstPost.module.css"

const FirstPost = (props) => {
    return(
        <div className={classes.test}>
            <div className={classes.infoContainer}>
                <p className={classes.info}>Anonymous</p>
                <p className={classes.info}>{new Date(props.threads.timestamp.seconds * 1000).toLocaleString()}</p>
            </div>
            <div className={classes.mainContent}>
                <div className={classes.imageContainer}>
                    <img src={props.threads.image}></img>
                </div>
                <div className={classes.content}>
                        <p>{props.threads.content}</p>
                </div>
            </div>
        </div>
    )
}

export default FirstPost;