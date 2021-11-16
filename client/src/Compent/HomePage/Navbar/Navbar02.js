import React, { useState } from "react";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logowhites from '../../../logo/Logowhites'
import Logo02 from '../../../logo/logo02'
import {Link} from 'react-router-dom'
function Navbar02() {
  const [ShowMenu, setShowMenu] = useState(false);
  const [Scrool, setScroll] = useState(false);
  const changeBackground =()=>{
     
    if(window.scrollY>140){
        setScroll(true)
    }if(window.scrollY==0){
        setScroll(false)
    }
}

window.addEventListener('scroll' ,changeBackground )
  return (
    <div  className="" > 
      {ShowMenu && (
        <div>
          <AppBar
            className="AnimationHoverNavbar"
            style={{ height: "100vh", backgroundColor: "white" }}
          >
            <p style={{ color: "red" }}>adz</p>
            <MenuIcon
              style={{ color: "black" }}
              onClick={() => setShowMenu(!ShowMenu)}
            />
          </AppBar>
        </div>
      )}
  {!ShowMenu && <AppBar  position={`${Scrool ? "fixed" : "sticky"}`} style={{color:!Scrool?"black":"white" , backgroundColor:!Scrool?"white":"#2ac6dc" , boxShadow:"none" }} className={`${Scrool&&"AnimaiionNavbarSticky"} mb-4 mt-0`} >
        <div  className={`${Scrool ?"pt-1" :"ptpr1"}   widht100pr flex mx-widht1400`}>
          <div className="flex ml-3 pb-2 widht-10pr widhtReposive  ">
            {Scrool ?  <div  className={`${Scrool &&"pb-1"} ptReposiveNavbar ${Scrool ?"widht-20pr" :"widht-40pr"}   widhtImageReposive`}><Link to="/"><Logowhites/> </Link> </div>:<div  className={`${Scrool &&"pb-1"} ${Scrool ?"widht-20pr" :"widht-40pr"}   widhtImageReposive ptReposiveNavbar`}><Link to="/"> <Logo02/></Link></div>}

          </div>
          <div className={`${Scrool? "pt-0":"pt-3"} flex widht90pr displanoneReposiveNavbar widhtReposive NotoSans justify-end	  pt-8Reposive  mr-10`}>
            <Link to="/" className="pr-8 text-base pt-2		">Home</Link>
            <Link to="/Product" style={{color:"#f84816"}} className="pr-8 text-base pt-2">Product</Link>
            
           <Link to="/register"> <p className="pr-8 text-base	pt-2		">Register</p> </Link>
            <Link to="/login"> 
              <p  style={{backgroundColor:"#2AC6DC",height:"35px" , borderRadius:"8px"}} className="text-base text-white	 backgroundImageColorOrange pl-4 pr-4 pt-1 mt-1	">Login</p>
            </Link>
          </div>
          <div className="widht-50pr displaynoneRepsoive1600 flex justify-end m-6">
            <MenuIcon onClick={() => setShowMenu(!ShowMenu)} />
          </div>
        </div>
      </AppBar>}
     
    </div>
  );
}

export default Navbar02;
