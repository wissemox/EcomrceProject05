import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
const FotterMap = ({el , i}) => {
    return (
        <Box  boxShadow={2} className="ml-1 mr-8 mb-4 mt-7 onHoverDiplayProductDatiled " style={{width:"240px" , height:"300px", borderRadius:"30px"}}>
            <div style={{width:"240px", height:"300px" , textAlign:"center",borderRadius:"30px" }} className="absolute CatgoriesSHow04  DisplayProductNoneAnimatiob "> 
            <div style={{borderRadius:"30px"}} className="AnimationOnMarginTopTomid02"> 
            <Link to={`/Product/${el._id}`}> 
            <IconButton style={{color:"#f84815" , backgroundColor:"white"}}> 
            <img style={{width:"40px"}} src={process.env.PUBLIC_URL +`/Pain.svg` }/>
 
            </IconButton>
            </Link>
            </div>
            </div>
            <div   style={{overflow:"hidden"}}> 
                <img className="" style={{width:"100%" , height:"180px",borderRadius:"30px"}} src={el.Image[2]}/>
            </div>
           <p className="text-center pt-4 pb-4 font-semibold text-lg			">{el.ProductName}</p>
           <p className="text-center font-semibold">TND{el.Prix}</p>
        </Box>
    )
}

export default FotterMap
