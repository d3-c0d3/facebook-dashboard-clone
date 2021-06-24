import React from 'react';
import classes from '../componentItems.module.css';
import notificationsIcon from '../../../assets/pngs/notification.png';
const Notifications=()=>{
    return(
        <div className={classes.ComponentItems} > <img  src={notificationsIcon} /> </div>
    )
}
export default Notifications;