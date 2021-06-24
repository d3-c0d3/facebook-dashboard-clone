import React from 'react';
import marketPlaceIcon from '../../../assets/pngs/marketplace.png'; 
import classes from '../NavItems.module.css'

const MarketPlace=()=>{
    return(
        <div className={classes.NavItems} >  <img style={{width:'45px'}} src={marketPlaceIcon} /> </div>
    )
}
export default MarketPlace;