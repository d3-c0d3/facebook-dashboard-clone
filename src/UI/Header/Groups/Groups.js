import React from 'react';
import classes from '../NavItems.module.css';
import groupsIcon from '../../../assets/pngs/group.png'
const Groups=()=>{
    return(
        <div className={classes.NavItems} > <img style={{width:'45px'}} src={groupsIcon} /> </div>
    )
}
export default Groups;