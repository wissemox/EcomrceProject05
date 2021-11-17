import React from 'react'

const ImageBig = ({el , Number ,BollenAnimation , setTogelOpenModel , BollenAnimation01}) => {
    return (
        <div  >
             <div
             onClick={()=>setTogelOpenModel(true)}
             className={`${BollenAnimation &&"CatgoriesSHow04s2" }  ${!BollenAnimation &&"CatgoriesSHow04s" }  withRepsoisve500W widht500px  h-350`}
              style={{
                backgroundColor: "#f2f2f2",
    
                backgroundImage: `url(${el.Image[Number]})`,
                backgroundSize: "cover",
              }}
            ></div>
        </div>
    )
}

export default ImageBig
