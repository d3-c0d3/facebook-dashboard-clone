import React from 'react';
import demoImg from '../../../assets/pngs/demoProfile.jpg';
const ProfileButton=()=>{
    return(
        <div  style={{display:'flex',alignItems:'center'}} > <div  style={{ display:'flex',alignItems:'center',justifyContent:'center', height:'28px',width:'28px',borderRadius:'50%',border:'1px solid rgb(214, 213, 213)'}}> <img width='23px' style={{borderRadius:'50%'}} src={demoImg} /></div>  Sufian Siam </div>
    )
}
export default ProfileButton;