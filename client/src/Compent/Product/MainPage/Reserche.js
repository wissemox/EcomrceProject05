import React from 'react'

const Reserche = ({Reserche01 , setResechre}) => {
    return (
        <div style={{backgroundColor:"#F4F4F4"}}>
            <div style={{maxWidth:"1400px" ,marginLeft:"auto" , marginRight:"auto"}}>
                <div className="flex colorLogo ml-8 mr-8 pt-6 pb-6"  >
                    <div style={{width:"70%"}} className="flex mt-2">
                    <p>Go back</p>
                    </div>
                    <div style={{width:"30%" , justifyContent:"flex-end" }} className="flex">
                    <input value={Reserche01} onChange={(e)=>setResechre(e.target.value)} className="pl-4 pt-2 pb-2" placeholder="Reserche" style={{border:"solid 1px #E8E8E8" , width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Reserche
