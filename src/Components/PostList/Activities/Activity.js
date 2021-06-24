import classes from './Activities.module.css';
import React from 'react';

const Activity=(props)=>{
    return( 
    <div className={classes.Activity} > 
        <div className={classes.imgContaner} >
            <img src={props.imgSrc} />
        </div>
        <div className={classes.Title} >{props.title}</div>
    </div>
    )
}
export default Activity;