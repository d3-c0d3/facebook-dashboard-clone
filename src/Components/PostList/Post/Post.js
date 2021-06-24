import React, { useEffect, useState } from 'react';
import Auxi from '../../../HOC/Auxi';
import ProfileImageSmall from '../../../UI/ProfilemageSmall/ProfileImageSmall';
import imgSrc from '../../../assets/pngs/demoProfile.jpg';
import classes from './post.module.css';
import horizontalMenu from '../../../assets/pngs/horizontalMenu.png';
import Comment from './Comment/Comment';
import EditPost from '../Post//EditPost/EditPost';
import Modal from '../../../UI/Modal/Modal';
import EditComponentModal from '../../../UI/Modal/EditComponentModal/EditComponentModal';
import EditPostComponent from '../../../UI/Edit/EditPostComponent';
import DeletePostComponent from '../../../UI/Delete/DeletePostComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../../Redux/actions/postActions';
const Post=(props)=>{
    
    const postsList=useSelector((state)=>state.postsList.posts)
    const [reacted,setReacted]=useState(false);
    const [openEditMenu,setOpenEditMenu]=useState(false);
    const [modalShow,setModalShow]=useState(false);
    const [commentsOfThisPost,setCommentsOfThisPost]=useState([])
    const [reactions,setReactions]=useState();
    const [Shouldfocus,setShouldFocus]=useState(true);
    const dispatch=useDispatch();
    console.log(props.postData)
    const onCommentHandler=()=>{
        setShouldFocus(true);
    }
    useEffect(()=>{
        setCommentsOfThisPost(props.postData.comments);
        setReactions(props.postData.reacts.like);
        
    })
    const onReaction=()=>{
        if(!reacted){ 
        setReacted(true);
        setReactions(++props.postData.reacts.like);
        }
        else if(reacted){ 
            setReacted(false);
        setReactions(--props.postData.reacts.like);
        }
    }
    const [tempComment,setTempComment]=useState("");
    const onCommentWriting=(event)=>{
        setTempComment(event.target.value);
        
    }
    const onCommentSubmit=(event)=>{
        console.log("here")
        if (event.key === "Enter"){ 
        props.postData.comments.push(tempComment);
        setCommentsOfThisPost(props.postData.comments);
        console.log(props.postData)
        setTempComment("")
        }
    }
    const onMenuClick=()=>{
        console.log("menu Clicked")
        setModalShow(true);
    }
    const modalClose=()=>{
       /*  //console.log("Click") */
        setModalShow(false);
    }
    const onPostEdit=()=>{
        //console.log(props.postData)
        setOpenEditMenu(true);
        modalClose();
    }
    const onPostDelete=()=>{
        console.log(props)
        const reducedPostList=postsList.filter(post => post.id!=props.postData.id);
        dispatch(setPosts(reducedPostList));  
        setModalShow(false);
       /*  console.log(postsList) */
    }
    const onPostTextEdit=()=>{
        /* setOpenEditMenu(false); */
    }
    const onSaveEdit=()=>{
        setOpenEditMenu(false);
    }

    const editModalClose=()=>{
        setOpenEditMenu(false);
    }
    
    return (
        /* save   EDITED POST  */
       <Auxi  >
           <div>
           <Modal show={openEditMenu} modalClosed={modalClose} >
                <EditPost 
                    prevData={props.postData}
                    visible={openEditMenu}
                    onPost={onSaveEdit}
                    modalClosed={editModalClose}
                    imgsrc={imgSrc}
                    />
            </Modal>
           </div>
           <div>
           <EditComponentModal clicked={modalClose} show={modalShow}>
               <EditPostComponent clicked={onPostEdit}/>
                <DeletePostComponent clicked={onPostDelete} />
            </EditComponentModal>
           </div>
       <div className={classes.post} >
            
       <div className={classes.userNaudianceInfo} >
          
       <div className={classes.postInfoContainer} >
       <div> <ProfileImageSmall imgSrc={imgSrc} /> </div>
       <div>
            <h3>Name</h3>
            <div className={classes.audianceContainer} >
                <div>Time</div>
                <div>Audience List</div>
            </div>
            </div>
            </div> 
            <div style={{cursor:'pointer'}}  >
            <img  onClick={onMenuClick} className={classes.menu} style={{width:'24px',transform:'scale(90deg)'}} src={horizontalMenu} />
            </div>
            </div>
            <div className={classes.postdata}>{props.postData.text}</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
            <img style={{maxWidth:'620px'}} src= { props.postData.imgSrc }/>
            </div>
            <div className={classes.reactionCounter} >{reactions<=0?null:reactions}</div>
            <div className={classes.reactionContainer} >
                <div onClick={onReaction} className={reacted?classes.reacted: classes.reaction} >Like</div>
                <div   className={classes.reaction} onClick={()=>{onCommentHandler()}}>Comment</div>
            </div>
            <div className={classes.comment} >
                <div className={classes.ImgIconContainer}  >
                    <img src={imgSrc} alt='userProfileImg' />
                </div>
                <div className={classes.commentText}>
                    <input value={tempComment} onKeyPress={onCommentSubmit} onChange={onCommentWriting}   type="text"  placeholder='Write a comment...' />
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'column'}} >{commentsOfThisPost.map((comment)=>{
                console.log(comment)
                return <Comment> {comment} </Comment>
            })}</div>
        </div>
       </Auxi>
    )

}

export default Post;