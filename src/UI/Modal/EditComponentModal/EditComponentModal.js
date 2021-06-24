import React from 'react';
import classes from './EditComponentModal.module.css';
import BackDrop from '../../BackDrop/BackDrop';
const EditComponentModal =(props)=>{
    return (
        <div>
            <BackDrop  show={props.show} clicked={props.clicked} />
        <div 
        className={classes.Modal}
        style={{
            transform:props.show ? 'translateY(0)':'translateY(-100vh',
            opacity:props.show?'1':'0',
           
        }}
        >
        {props.children}
        </div>
        
        </div>
        )
}

export default EditComponentModal;