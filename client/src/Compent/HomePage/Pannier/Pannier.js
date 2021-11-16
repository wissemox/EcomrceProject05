import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import LogowhiteAnimatiion from '../../../logo/LogowhiteAnimatiion'

const Pannier = () => {
    const Apdd =()=>{
        window.location.reload(false);

    }
    return (
        <div id="Home" className="mb-2 pt-1 pb-1 flex " style={{backgroundColor:"#2ac6dc",justifyContent:"center" , height:"50px"}}> 
        <IconButton> 
            <img onClick={Apdd} className="Animationlogo01 " style={{width:"40px"}} src="logowhites.svg"/>
            </IconButton>
      </div>
    )
}

export default Pannier
