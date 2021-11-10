import React ,{useState} from 'react'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {DeleteAllFindone} from '../../../js/action/Actions'
const MapProduct = ({el}) => {
    const dispatch =useDispatch()
    const DeleteFunction = ()=>{
        dispatch(DeleteAllFindone(el._id))
    }
    const [ImageChange , setImageChange]=useState(0)
    return (
        <div style={{width:"26%"}} className="mr-10 mb-20 mt-20 ">
            <img style={{ height:"200px" , width:"100%"}} src={el.Image[ImageChange]} />
            {/* Map All Image */}
            <div style={{height:"80px" }} className="mt-4 flex  mb-4 ">
            {el.Image.map((el , i)=>
                <div className="mr-2 ml-2">
                <img onClick={()=>setImageChange(i)} style={{height:"80px" , width:"80px"}} src={el}/>
                {console.log(i)}
                </div>)} 
            </div>
            <div className="flex mt-8">
                <p>{el.ProductName}</p>
                <div style={{justifyContent:"flex-end" ,width:"100%"}} className="flex">
                    <Button onClick={DeleteFunction} variant="outlined" color="error">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MapProduct
