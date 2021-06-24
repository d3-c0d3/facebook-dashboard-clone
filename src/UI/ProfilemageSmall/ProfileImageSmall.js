import React from 'react';
import classes from './ProfileImgSmall.module.css'
const ProfileImageSmall=(props)=>{
    return(
        <div className={classes.ImgIconContainer}  >
                    <img src={props.imgSrc} alt='userProfileImg' />
                </div>
    )
}

export default ProfileImageSmall;