import React from 'react';
import Activity from '../../Activities/Activity';
import imgSrc from '../../../../assets/pngs/photosIcon.png';
import classes from './uploadFile.module.css';
const UploadPhoto=(props)=>{
    return( 
    <div>
    <input onInput={props.clicked} id='img' style={{display:'none'}} accept='image/*' name="upload" type='file'  />
    <label for='img' className={classes.FileInput}><Activity imgSrc={imgSrc}  title={'Photos/Videos'}  /></label>
    </div>
    )
}
export default UploadPhoto;

/*  */