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
              
                    
            {el.Image02.map((el ,i)=><div onClick={()=>ClickCompeImageMap(i)} className="ml-8Resposive  widthpr25  widhtRepsoive33" >
                <img className="HeagihtReposive140ALLimageProduc"  style={{width:"220px"}}  src={el}/>
            </div>)}
                    
                
        </div>
        <div style={{  marginTop:"35px"}} className="ml-14 marginLeftReposiveDatitedProduct text-center h-130Reposive	">
            <div className="mt-6 font-medium FontsizeReposive20px flex text-center		">
                <p>Product Name :</p>
                <p className="pl-2">{el.ProductName}</p>
            </div>
            <div className="mt-6 font-medium flex FontsizeReposive20px	">
                <p>Catgories : </p>
                <p className="pl-2">{el.Tail}</p>

            </div>
            <div className="mt-6 font-medium flex FontsizeReposive20px mb-8	">
                <p>Prix : </p>
                <p className="pl-2">{el.Prix}</p>
            </div>
        </div>
        </div>
    )
}

export default MapImage
