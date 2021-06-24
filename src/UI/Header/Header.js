import React from 'react';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Account from './Account/Account';
import Gaming from './Gaming/Gaming';
import Groups from './Groups/Groups';
import classes from './Header.module.css';
import Home from './Home/Home';
import MarketPlace from './MarketPlace/MarketPlace';
import Menu from './Menu/Menu';
import Messenger from './Message/Messenger';
import Notifications from './Notification/Notifications';
import ProfileButton from './ProfileButton/ProfileButton';
import Videos from './Videos/videos';
const Header=()=>{
    return(
        <div className={classes.Header} >
            <div className={classes.LogoAndSearchbarContainer} >
            <div><Logo/></div>
            <div> <SearchBar/> </div>
            </div>
            <div className={classes.NavLinksContainer}>
            <div> <Home/> </div>
            <div> <Videos/> </div>
            <div> <MarketPlace/> </div>
            <div> <Groups/> </div>
            <div> <Gaming/> </div>
            </div>
            
            <div className={classes.componentContainer}>
            <div className={classes.ProfileButton}  ><ProfileButton/></div>
            <div> <Menu/> </div>
            <div> <Messenger/> </div>
            <div> <Notifications/> </div>
            <div> <Account/> </div>
            </div>
           
        </div>
    )
}

export default Header;