import React from 'react';
import deleteImg from '../../assets/pngs/delete.png';
import '../Edit/EditPostComponent.css';
const  DeletePostComponent=(props)=>{
    return(
    <div onClick={props.clicked} className='editPost' style={{width:'100%',display:'flex',alignItems:'center',cursor:'pointer',padding:'5px',
        borderRadius:'5px'}} > 
        <img style={{width:'15px',marginRight:'15px'}} src={deleteImg} /> <span>Delete</span>
    </div>
    )
}

export default DeletePostComponent;