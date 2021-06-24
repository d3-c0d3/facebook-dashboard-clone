import React, { useState } from 'react';
import classes from './CreatePost.module.css';
import GoLive from './GoLive/GoLive';
import imgSrc from '../../../assets/pngs/demoProfile.jpg';
import UploadPhoto from './UploadPhoto/uploadPhoto';
import Feelings from './Feelngs/Feelings';
import Modal from '../../../UI/Modal/Modal';
import ProfileImageSmall from '../../../UI/ProfilemageSmall/ProfileImageSmall';
import CreatePostComponent from './CreatePostComponent/CreatePostComponent';
import { useDispatch, useSelector } from 'react-redux';
import {setPosts} from '../../../Redux/actions/postActions';
const CreatePost=(props)=>{
    const [uploadImg,setUploadImg]=useState('');
    const prevPostsList=useSelector((state)=>state.postsList.posts)
    const dispatch=useDispatch();
    const [modalShow,setModalShow]=useState(false);
    const [visible,setVisible]= useState(false);
    let postText=null;

    const onUploadImageHandler=(event)=>{
        modalOpen();

        setUploadImg(URL.createObjectURL(event.target.files[0]))
        console.log(uploadImg)
      /*   onUploadImage(event.target.files[0]) */
    }

    const onUploadImage=(value)=>{
        //console.log(uploadImg)
        
        let newid=0;
        if(prevPostsList.length>0){
            let prevPost=updatePostList[0];
            newid=prevPost.id+1;
        }
        let updatePostList=prevPostsList.map((post)=>{
            return post;
        });
        let link=uploadImg;
       /*  //console.log( URL.createObjectURL(event.target.files[0])) */
        let newPost={
            'id':newid,
            'text':'',
            'imgSrc':[
                URL.createObjectURL(value)
            ],
            'videSrc':[],
            'reacts':{ 
                'like':0,
                'love':0,
                'haha':0,
                'care':0,
                'sad':0,
                'angry':0,
                'wow':0
        },
            'comments':[],
            'shares':[]
        }
        updatePostList.unshift(newPost);
        //console.log(updatePostList);
       /*  updatePostList.push(postText);*/
        dispatch(setPosts(updatePostList));  
        ////console.log(postsList);
        props.shouldFeedUpdate(true);
    }
    const modalOpen=()=>{
        setModalShow(true);
    }
    const onInputChange=(text)=>{
        if(text.length<=0){
            setVisible(false);
            return;
        }
        setVisible(true);
        postText=text;
    }
    const modalClosed=()=>{
        setModalShow(false);
        setVisible(false);
        setUploadImg('');

    }
    const expandPost=()=>{
        modalOpen();
    }
    const postToWall=()=>{
      let imgSrc='';
        if(uploadImg.length>0){
            imgSrc=uploadImg;
        }
        modalClosed();
        let updatePostList=prevPostsList.map((post)=>{
            return post;
        });
        let newid=0;
        if(prevPostsList.length>0){

            let prevPost=updatePostList[0];
            newid=prevPost.id+1;
            updatePostList=prevPostsList;
        }
        console.log(updatePostList);
        let newPost={
            'id':newid,
            'text':postText,
            'imgSrc':[
                imgSrc
            ],
            'videSrc':[],
            'reacts':{ 
                'like':0,
                'love':0,
                'haha':0,
                'care':0,
                'sad':0,
                'angry':0,
                'wow':0
        },
            'comments':[],
            'shares':[]
        }
        updatePostList.unshift(newPost);
        //console.log(updatePostList);
       /*  updatePostList.push(postText);*/
        dispatch(setPosts(updatePostList));  
        ////console.log(postsList);
        props.shouldFeedUpdate(true);
    }
    return (
        <div className={classes.CreatePost} >
            <Modal show={modalShow} modalClosed={modalClosed} >
                <CreatePostComponent 
                    visible={visible}
                    onInputChange={onInputChange}
                    onPost={postToWall}
                    modalClosed={modalClosed}
                    imgsrc={uploadImg}
                    uploadImage={onUploadImageHandler}
                    />
            </Modal>
            <div className={classes.WritePost} >    
                <ProfileImageSmall imgSrc={imgSrc} />
                <div onClick={expandPost} className={classes.ActivateInput} >
                   <h2>What's on your mind, Sufian</h2>
                </div>
            </div>
            <div className={classes.dividerHorizontal} ></div>
            <div className={classes.Activities} >
                <div> <GoLive/> </div>
                <div> <UploadPhoto clicked={onUploadImageHandler}  /> </div>
                <div> <Feelings/> </div>
            </div>
        </div>
    )
}
export default CreatePost;