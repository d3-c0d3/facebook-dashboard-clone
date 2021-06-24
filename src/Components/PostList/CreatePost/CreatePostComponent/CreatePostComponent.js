import classes from './createPostComponent.module.css';
import React, { useEffect, useState } from 'react';
import CrossBtn from '../../../../UI/CrossBtn/CrossBtn';
import Auxi from '../../../../HOC/Auxi';
import ProfileImageSmall from '../../../../UI/ProfilemageSmall/ProfileImageSmall';

import horizontalMenu from '../../../../assets/pngs/horizontalMenu.png';
import qnaSrc from '../../../../assets/pngs/qNa.png';
import mapSrc from '../../../../assets/pngs/map.png';
import tagSrc from '../../../../assets/pngs/tag.png';
import emojiSrc from '../../../../assets/pngs/feelingsIcon.png'
import photoSrc from '../../../../assets/pngs/photosIcon.png';
import imgSrc from '../../../../assets/pngs/demoProfile.jpg';
import feelingSrc from '../../../../assets/pngs/feelingsIcon.png';
import Activity from '../../Activities/Activity';

const CreatePostComponent=(props)=>{
   
    const [textareaValue,setTextareaValue]=useState("");
    const [visible,setVisible]=useState(false);
    const onInputTaken=(event)=>{
        let text=event.target.value;
        setTextareaValue(text);
        //console.log(text);
        props.onInputChange(text);
    }
    const onPostBtnClick=()=>{
        props.onPost();
        setTextareaValue("");
    }
    useEffect(()=>{
        if(props.imgsrc.length>0 || props.visible){
           setVisible(true);
        }
    })
    return (
       <Auxi>
       <div className={classes.titleContainer} >
            <h2 className={classes.title} >CreatePost</h2>
             <span onClick={props.modalClosed} > <CrossBtn/></span>
        </div>
        <div className={classes.userNaudianceInfo} >
            <div> <ProfileImageSmall imgSrc={imgSrc} /> </div>
            <div>
                <h3>Name</h3>
                <div>Audience List</div>
            </div>
        </div>
        <div className={classes.postBody} >
            <textarea  style={{paddingLeft:'15px',paddingTop:'15px'}} value={textareaValue}  onChange={onInputTaken} placeholder={`What's on your mind, Sufian?`} rows="10" cols="60"  name="postbody" form="usrform" style={{resize:'none'}} >
            </textarea>
        </div>
        <div className={classes.postContent} >
            <img src={props.imgsrc} />
        </div>
        <div className={classes.BackgroundNemoji} >
            <div>{/* color Picker */}</div>
            <img className={classes.emoji} src={emojiSrc} />
        </div>
        <div className={classes.AllActivities} >
            <div className={classes.postHelper} >
                <span>Add To Your Post</span>
            </div>
            <div className={classes.postOptions} >
                <div style={{width:'24px'}} >
                <input  onInput={props.uploadImage} id='img' style={{width:'24px',display:'none'}} accept='image/*' name="upload" type='file'  />
                <label for='img' className={classes.FileInput}> <img style={{width:'24px'}} src={photoSrc} />  </label>
                </div>
               <img style={{width:'24px'}} src={tagSrc} />
               <img style={{width:'24px'}} src={feelingSrc} />
               <img style={{width:'24px'}} src={mapSrc} />
               <img style={{width:'24px'}} src={qnaSrc} />
               <img style={{width:'24px',transform:'scale(90deg)'}} src={horizontalMenu} />
            </div>
        </div>
        <button disabled={!visible}  onClick={onPostBtnClick} className={ classes.postBtn} >Post</button>
       </Auxi>
    )
}

export default CreatePostComponent;