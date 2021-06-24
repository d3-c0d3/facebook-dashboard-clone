import React from 'react';

import Backdrop from '../BackDrop/BackDrop';
import classes from './modal.module.css'
const Modal=(props)=>(
    <div>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div 
    className={classes.Modal}
    style={{
        transform:props.show ? 'translateY(0)':'translateY(-100vh',
        opacity:props.show?'1':'0'
    }}
    >
    {props.children}
    </div>
    </div>
)

export default Modal;