import React from 'react';
import editSrc from '../../assets/pngs/edit.png';
import './EditPostComponent.css';
const  EditPostComponent=(props)=>{

    return(
        <div onClick={props.clicked} style={{
            marginTop:'15px',
            marginBottom:'15px',
            width:'100%',
            display:'flex',
            alignItems:'center',
            cursor:'pointer',
            padding:'5px',
            borderRadius:'5px'
            }}  className='editPost' > 
           <img style={{width:'15px',marginRight:'15px'}} src={editSrc} /> <span>Edit</span>
        </div>
    )
}

export default EditPostComponent;