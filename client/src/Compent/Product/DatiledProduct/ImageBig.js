import React from 'react'

const ImageBig = ({el , Number ,BollenAnimation , setTogelOpenModel , BollenAnimation01}) => {
    return (
        <div  >
             <div
             onClick={()=>setTogelOpenModel(true)}
             className={`${BollenAnimation &&"CatgoriesSHow04s2" }  ${!BollenAnimation &&"CatgoriesSHow04s" }  `}
              style={{
                backgroundColor: "#f2f2f2",
                height: "350px",
                width:"500px",
                backgroundImage: `url(${el.Image[Number]})`,
                backgroundSize: "cover",
              }}
            ></div>
        </div>
    )
}

export default ImageBig
