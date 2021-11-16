import React from 'react'

const MapImage = ({el   ,Number , setNumber,setBollenAnimation01,BollenAnimation01 , BollenAnimation , setBollenAnimation}) => {
    const ClickCompeImageMap = (i)=>{
        setNumber(i)
        setBollenAnimation(!BollenAnimation)
        setBollenAnimation01(!BollenAnimation01)
    }
    return (
        <div> 
            
        {console.log(Number)}
        <div style={{justifyContent:"space-evenly"}} className="flex">
              
                    
            {el.Image.map((el ,i)=><div onClick={()=>ClickCompeImageMap(i)} className="ml-8" style={{width:"25%"}}>
                <img  style={{height:"140px" , width:"220px"}}  src={el}/>
            </div>)}
                    
                
        </div>
        <div style={{height:"130px" , marginTop:"35px"}} className="ml-14">
            <div className="mt-6 font-medium flex	">
                <p>Product Name :</p>
                <p className="pl-2">{el.ProductName}</p>
            </div>
            <div className="mt-6 font-medium flex	">
                <p>Catgories : </p>
                <p className="pl-2">{el.Tail}</p>

            </div>
            <div className="mt-6 font-medium flex	">
                <p>Prix : </p>
                <p className="pl-2">{el.Prix}</p>
            </div>
        </div>
        </div>
    )
}

export default MapImage
