import React from 'react';
import classes from '../componentItems.module.css';
import messengerIcon from '../../../assets/pngs/messenger.png';
const Messenger=()=>{
    return(
        <div className={classes.ComponentItems} > <img  src={messengerIcon} /> </div>
    )
}
export default Messenger;