import React from 'react';
import classes from '../NavItems.module.css'
import videosIcon from '../../../assets/pngs/video.png';
const Videos=()=>{
    return(
        <div className={classes.NavItems}> <img style={{width:'45px'}} src={videosIcon} />  </div>
    )
}
export default Videos;