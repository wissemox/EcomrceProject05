import React, { useState } from "react";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logowhites from '../../../logo/Logowhites'
import Logo02 from '../../../logo/logo02'
import {Link as H} from 'react-router-dom'
import {Link} from 'react-scroll'
function Navbar() {
  const [ShowMenu, setShowMenu] = useState(false);
  const [Scrool, setScroll] = useState(false);
  const [Scrol02, setScroll02] = useState(false);
  const [Scrol03, setScroll04] = useState(false);

  const changeBackground =()=>{
     
    if(window.scrollY>200){
        setScroll(true)
    }else{
        setScroll(false)
    }
}

const changeBackground02 =()=>{
     
  if(window.scrollY<=350){
    setScroll02(true)
  }if(window.scrollY>350){
    setScroll02(false)
  }
  if(window.scrollY>350){
    setScroll04(true)
  }else(
    setScroll04(false)
)
}
window.addEventListener('scroll' ,changeBackground )
window.addEventListener('scroll' ,changeBackground02 )

  return (
    <div  className="" > 
      {ShowMenu && (
        <div>
          <AppBar
            className="AnimationHoverNavbar"
            style={{ height: "100vh", backgroundColor: "white" }}
          >
            <div className="flex">  
              <div className="pl-4 pt-4" style={{width:"50%"}}>
                  <div className="pb-6"> 
                  <H to="/" smooth={true} duration={800} style={{fontSize:"18px",fontWeight:"600",color:Scrol02 && "black" || Scrool&& !Scrol02 && "black" || "black"}} className="pr-8 text-base pt-2        ">Home</H>
                  </div>
                  <div className="pb-6">
                  <H to="/product" smooth={true} duration={800} style={{fontSize:"18px",fontWeight:"600",color:Scrol02 && "black" || Scrool&& !Scrol02 && "black" || "black"}} className="pr-8 text-base pt-2        ">Product</H>
                  </div>
                  <div className="pb-6">
                  <H to="/login" smooth={true} duration={800} style={{fontSize:"18px",fontWeight:"600",color:Scrol02 && "#2ac6dc" || Scrool&& !Scrol02 && "#2ac6dc" || "#2ac6dc"}} className="pr-8 text-base pt-2        ">Login</H>
                  </div>
                  <div className="pb-6">
                  <H to="/register" smooth={true} duration={800} style={{fontSize:"18px",fontWeight:"600",color:Scrol02 && "#f84816" || Scrool&& !Scrol02 && "#f84816" || "#f84816"}} className="pr-8 text-base pt-2        ">Register</H>
                  </div>
              </div>
              
              <div className="flex pt-6 pl-2 pr-4" style={{width:"50%" , justifyContent:"flex-end"}}>
                  <MenuIcon
                  style={{ color: "black" }}
                  onClick={() => setShowMenu(!ShowMenu)}
                  />
               </div>
            </div>
          
          </AppBar>
        </div>
      )}
  {!ShowMenu && <AppBar  position={`${Scrool ? "fixed" : "sticky"}`} style={{color:!Scrool?"black":"white" , backgroundColor:!Scrool?"white":"#2ac6dc" , boxShadow:"none" }} className={`${Scrool&&"AnimaiionNavbarSticky"} mb-4 mt-0`} >
        <div  className={`${Scrool ?"pt-1" :"ptpr1"}   widht100pr flex mx-widht1400`}>
          <div className="flex ml-3 pb-2 widht-10pr widhtReposive  ">
            {Scrool ?<div  className={`${Scrool &&"pb-1"} ptReposiveNavbar ${Scrool ?"widht-20pr" :"widht-40pr"}   widhtImageReposive`}><Logowhites/>  </div>:<div  className={`${Scrool &&"pb-1"} ${Scrool ?"widht-20pr" :"widht-40pr"}   widhtImageReposive ptReposiveNavbar`}> <Logo02/></div>}

          </div>
          <div   className={`${Scrool? "pt-0":"pt-1"} flex widht90pr displanoneReposiveNavbar widhtReposive NotoSans justify-end      pt-8Reposive  mr-10`}>
             
            <H to="/" smooth={true} duration={800} style={{color:Scrol02 && "#f84816" || Scrool&& !Scrol02 && "white" || "#f84816"}} className="pr-8 text-base pt-2        ">Home</H>
           
   
            <H to="/product" smooth={true} duration={800} style={{color:Scrol03 && "#f84816"}} className="pr-8 text-base pt-2            ">Product</H>
        
           <H to="/register"> <p className="pr-8 text-base    pt-2        ">Register</p> </H>
            <H to="/login"> 
              <p  style={{backgroundColor:"#2AC6DC",height:"35px" , borderRadius:"8px"}} className="text-base text-white     backgroundImageColorOrange pl-4 pr-4 pt-1 mt-1    ">Login</p>
            </H>
          </div>
          <div className="widht-50pr displaynoneRepsoive1600 flex justify-end m-6">
            <MenuIcon onClick={() => setShowMenu(!ShowMenu)} />
          </div>
        </div>
      </AppBar>}
     
    </div>
  );
}

export default Navbar;
