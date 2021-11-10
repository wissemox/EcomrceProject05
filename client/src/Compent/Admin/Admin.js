import React ,{useState ,  useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Slider from './Slider'
import Box from '@mui/material/Box';
import MainPage from './MainPage';
import {ProductGetAll} from '../../js/action/Actions'

function Admin() {
    const Dispatch =useDispatch()
    // useEffect=(()=>{
    //     // Dispatch(ProductGetAll())
    //     console.log('wissem')
    // },[])
    useEffect(() => {
        Dispatch(ProductGetAll())
    }, [])
    const[TogelTest,SetTogelTest]=useState(false)
    return (
        <div  className="flex">
        
            <Box   className="BoxShadowdqzdsd AnimationMarinLeftMenu    bg-gris" style={{position:"fixed"  , top:"0px" , height:"100vh"}}  >
            <Slider/>
            </Box>
            <Box style={{width:"100%"}}    >
                <MainPage TogelTest={TogelTest} SetTogelTest={SetTogelTest}/>
            </Box> 
        </div>
    )
}

export default Admin
