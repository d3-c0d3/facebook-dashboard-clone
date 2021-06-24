import React from 'react';
import classes from './Logo.module.css';
import LogoImg from '../../assets/pngs/FacebookLogo.png';
const Logo=()=>{
    return (
        <img className={classes.Logo} src={LogoImg} />
    )
}
export default Logo;