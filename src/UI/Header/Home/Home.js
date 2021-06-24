import React from 'react';
import classes from '../NavItems.module.css';
import homeIcon from '../../../assets/pngs/home.png';
const Home=()=>{
    return(
        <div className={classes.NavItems} > <img style={{width:'45px'}} src={homeIcon} /> </div>
    )
}
export default Home;