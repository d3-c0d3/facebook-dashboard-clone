import React from 'react';
import classes from './Comment.module.css';
const Comment=(props)=>{

    return(
        <div className={classes.Comment} >
        <div>
        <div>img</div>
        <div>name</div>
        </div>
        <div>
        {props.children}
        </div>
        </div>
    )
}

export default Comment;