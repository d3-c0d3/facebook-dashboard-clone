import React, { useEffect, useState } from 'react';
import Auxi from '../../HOC/Auxi';
import classes from './Layout.module.css';
import Header from '../../UI/Header/Header';
import Post from '../PostList/Post/Post';
import CreatePost from '../PostList/CreatePost/CreatePost';
import { useSelector } from 'react-redux';

const Layout=()=>{
    const[feedUpdated,setFeedUpdated]= useState(false);
    let postsList=useSelector((state)=>state.postsList.posts)
    
    const renderPostList=postsList.map((post)=>{
       console.log(post)
        return <Post postData={post} />
    })
    //postsList=useSelector((state)=>state.postsList.posts)

    useEffect(()=>{
       ////console.log(postsList)
       setFeedUpdated(false);
    },[feedUpdated])
    return(
        <Auxi>
            <Header/>
        <div className={classes.Layout} >
        <div className={classes.MainFeed} >
            <div className={classes.CreatePostContainer} >
                <CreatePost shouldFeedUpdate={setFeedUpdated}  />
            </div>
        </div>
        <div className={classes.postListContainer} >
        <div className={classes.postList} >
           {renderPostList}
        </div>
        </div>
        </div>
        </Auxi>
    )
}

export default Layout;