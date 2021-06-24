import React from 'react';
import classes from '../NavItems.module.css';
import gamingIcon from '../../../assets/pngs/gaming.png';
const Gaming=()=>{
    return(
        <div className={classes.NavItems}> <img style={{width:'45px'}} src={gamingIcon} /> </div>
    )
}
export default Gaming;