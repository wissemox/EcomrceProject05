import React from "react";
import { Parallax } from "react-parallax";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom'
const MainPage = () => {
  // DisplayNoneReposivePhone
  return (
    <div>
      <div   style={{height:"110px"}} >
      <video autoPlay loop muted
                style={{
                    position:"absolute" , 
                    width:"100%" , 
                   left:"50%",
                   top:"220px",
                   height:"180px",
                   objectFit:"cover",
                  
                   transform:"translate(-50%,-50%)" ,
                   zIndex:"-1", 
                  
                
                }}
            >
            <source src={process.env.PUBLIC_URL + `/wissem.mp4`} ></source>
                
            </video>
      

        <div className="DisplayNoneReposivePhone"> 
          <div className=""></div>
          <div className=" text-center  pt-9     ImageMenuHeightResposive    " >
           
           
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/Product"> 
              <div>
                <div
                  className="HoverPrentazd"
                  style={{
                    border: "1px solid white",
                    width: "150px",
                    color: "white",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="TestestHoverdqsd p-2"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    <p>SHOP KNOW</p>
                  </div>
                  <div
                    className="AnimationHoverNavbar04 p-2 TESTANIMATIOnNOne"
                    style={{ color: "white" }}
                  >
                    <p>SHOP KNOW</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
 
{/* Reposive */}
          
        <div style={{display:"none"}}>
          <div style={{ backgroundColor: "white" }}></div>
          <div className=" text-center  PaddingResposiveTopMenu     ImageMenuHeightResposive    " >
            <p className="text-white Ubuntu f-20Resposive">
              JUST ADDED
            </p>
            <p className="text-white f-60Resposive " >
              ANIME CATGORIES
            </p>
            <div className="mt-4">
              <Button
                style={{ backgroundColor: "#ee4843" }}
                variant="contained"
              >
                SHOP KNOW
              </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <div
                  className="HoverPrentazd w-150 widhtResposiveMenuButton"
                  style={{
                    border: "1px solid white",
                   
                    color: "white",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="TestestHoverdqsd p-2"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    <p  className="fonSizeReposiveMenu">SHOP KNOW</p>
                  </div>
                  <div
                    className="AnimationHoverNavbar04 p-2 TESTANIMATIOnNOne"
                    style={{ color: "white" }}
                  >
                    <p className="fonSizeReposiveMenu">SHOP KNOW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default MainPage;
