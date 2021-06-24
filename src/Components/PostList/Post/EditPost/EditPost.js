import classes from './EditPost.module.css';
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
import feelingSrc from '../../../../assets/pngs/feelingsIcon.png';
const EditPost=(props)=>{
    const [textareaValue,setTextareaValue]=useState(props.prevData.text);
    const [visible,setVisible]=useState(false);
    const [postInstance,setPostInstance]=useState(props.prevData);
    const onInputTaken=(event)=>{
        let text=event.target.value;
        setTextareaValue(text);
        /* console.log(text) */
    }
    const onPostBtnClick=()=>{
        console.log(postInstance)
        postInstance.text=textareaValue;
        props.onPost();
        /* setTextareaValue(""); */
    }
    const onEditDiscard=()=>{
        props.modalClosed();
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
             <span onClick={onEditDiscard} > <CrossBtn/></span>
        </div>
        <div className={classes.userNaudianceInfo} >
            <div> <ProfileImageSmall imgSrc={props.imgsrc} /> </div>
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
            <img  src={props.prevData.imgSrc} />
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
               <img style={{width:'24px'}} src={photoSrc} />
               <img style={{width:'24px'}} src={tagSrc} />
               <img style={{width:'24px'}} src={feelingSrc} />
               <img style={{width:'24px'}} src={mapSrc} />
               <img style={{width:'24px'}} src={qnaSrc} />
               <img style={{width:'24px',transform:'scale(90deg)'}} src={horizontalMenu} />
            </div>
        </div>
        <button disabled={!visible}  onClick={onPostBtnClick} className={ classes.postBtn} >Save</button>
       </Auxi>
    )
}

export default EditPost;