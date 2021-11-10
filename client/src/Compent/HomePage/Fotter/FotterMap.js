import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
const FotterMap = ({el , i  ,  setCatgorie}) => {
    return (
        <Box onClick={()=>setCatgorie("")}  boxShadow={2} className="ml-1 mb-4 mt-4 onHoverDiplayProductDatiled" style={{width:"300px" , height:"400px", borderRadius:"30px"}}>
            <Link to="/Product"> 
            <div style={{width:"300px", height:"400px" , textAlign:"center",borderRadius:"30px" }} className="absolute CatgoriesSHow04  DisplayProductNoneAnimatiob "> 
            <div style={{borderRadius:"30px"}} className="AnimationOnMarginTopTomid"> 
            <IconButton style={{color:"#f84815" , backgroundColor:"white"}}> 
            <img style={{width:"50px"}} src={process.env.PUBLIC_URL +`/Pain.svg` }/>
 
            </IconButton>
            </div>
            </div>
            </Link>
            <div   style={{overflow:"hidden"}}> 
                <img className="" style={{width:"100%" , height:"280px",borderRadius:"30px"}} src={el.Image[0]}/>
            </div>
           <p className="text-center pt-4 pb-4 font-semibold text-lg			">{el.ProductName}</p>
           <p className="text-center font-semibold">TND{el.Prix}</p>
        </Box>
    )
}

export default FotterMap
