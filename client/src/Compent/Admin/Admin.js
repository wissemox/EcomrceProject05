import React ,{useState ,  useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Slider from './Slider'
import Box from '@mui/material/Box';
import MainPage from './MainPage';
import {ProductGetAll , GetAdminLogged} from '../../js/action/Actions'
import { Redirect } from "react-router-dom";

function Admin() {
    const Dispatch =useDispatch()
    // useEffect=(()=>{
    //     // Dispatch(ProductGetAll())
    //     console.log('wissem')
    // },[])
    useEffect(() => {
        Dispatch(ProductGetAll())
        Dispatch(GetAdminLogged())
    }, [])
    const AdminLocalStorage = localStorage.getItem("AdminToken")
    const[TogelTest,SetTogelTest]=useState(false)
    return (
        <div  >
            {AdminLocalStorage ? <div className="flex">    <Box   className="BoxShadowdqzdsd AnimationMarinLeftMenu    bg-gris" style={{position:"fixed"  , top:"0px" , height:"100vh"}}  >
            <Slider/>
            </Box>
            <Box style={{width:"100%"}}    >
                <MainPage TogelTest={TogelTest} SetTogelTest={SetTogelTest}/>
            </Box>  </div>: <Redirect to="/"/>}
   
        </div>
    )
}

export default Admin
