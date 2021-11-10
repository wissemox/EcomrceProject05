import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
function Slider() {
    return (
        <Box   >
            <p  className="ColorTextWhiteOpacity BordeBottom  pl-4 pt-4 pb-3 font-extralight	text-lg	">AdminDashboard</p>

            <div className="flex pl-4 pt-3 BordeBottom pb-4 ">
                <div className="flex">
                    <img style={{width:"20%"}} src="WissemImage.png"/>
                    <p className="ColorTextWhiteOpacity pt-2 pl-2">Wissem abid</p>
                </div>
              
            </div>
            <div className="pb-4"> 
                <div style={{backgroundColor:"#3F474E"}}  className="flex mt-4 mr-2 ml-2  "> 
                    <input className="pt-2 pb-2 pl-4 Borde" placeholder="Rechreche" style={{backgroundColor:"transparent" , width:"80%"}} ></input>
                    <div style={{width:"20%"}} className="Borde pl-2 pt-2">
                        <SearchIcon style={{color:"white"}}></SearchIcon>
                    </div>
                    </div>
            </div>

            <div className="flex ml-4">
                <AddIcon style={{color:"white"}}></AddIcon>
                <p className="pl-2 ColorTextWhiteOpacity">Add Product</p>
            </div>
        </Box>
    )
}

export default Slider
