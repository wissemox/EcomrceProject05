import React, { useState } from "react";
import CatgoriesMap from "./CatgoriesMap";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import {Link} from 'react-router-dom'
const Catgories = ({ setCatgorie }) => {
  const [Catgories, setCatgories] = useState([
    {
      Name: "wissem",
      Image: "93b6b3394675254611879081e9cb4024.jpg",
    },
    {
      Name: "wissem",
      Image: "One_Piece_Anime_Sunset_Orange_1920x1080.jpg",
    },
    {
      Name: "wissem",
      Image: "original.jpg",
    },
    {
      Name: "wissem",
      Image: "original.jpg",
    },
  ]);
  return (
    <Box
      style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1400px" }}
      className="flex"
    >
      <div
        onClick={()=>setCatgorie("Anime")}
        style={{ backgroundColor: "#f84816" ,cursor:"pointer"}}
        className="HoverWidht25pr h-44 backgroundImage08"
      >
         <Link to="/Product"> 
        {/* 606210.jpg */}
        <div style={{ height: "100%" }} className="backgroundColorTest">
          <p
            className="pt-16"
            style={{
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              fontSize: "25px",
            }}
          >
            Tshirt Anime
          </p>
          =
        </div>
        </Link>
        {/* <img style={{width:"100%"}} className="h-44" src="AttackonTitan.jpg"/> */}
      </div>
      <div
              onClick={()=>setCatgorie("Manga")}
        style={{ backgroundColor: "#2ac6dc",cursor:"pointer" }}
        className="HoverWidht25pr HoverChangeTest h-44 backgroundImage09"
      >
        <Link to="/Product"> 
        <div style={{ height: "100%" }} className="backgroundColorTest">
          <p
            className="pt-16"
            style={{ textAlign: "center", color: "white", fontSize: "25px" }}
          >
            Manga
          </p>
          
        </div>
        </Link>
      </div>

      <div
        onClick={()=>setCatgorie("Game")}
        style={{ backgroundColor: "#f84816",cursor:"pointer" }}
        className="HoverWidht25pr backgroundImage07 HoverChangeTest h-44 "
      >
        {/* g2nZq3X6bJEkeEbFyTfPfB.jpg */}
        <Link to="/Product"> 
        <div style={{ height: "100%" }} className="backgroundColorTest">
          <p
            className="pt-16"
            style={{ textAlign: "center", color: "white", fontSize: "25px" }}
          >
            Game
          </p>
        </div>
        </Link>
      </div>
   
      <div
      
        onClick={()=>setCatgorie()}
        style={{ backgroundColor: "#2ac6dc",cursor:"pointer" }}
        className="HoverWidht25pr HoverChangeTest h-44"
      >
          <Link to="/Product"> 
        <p
          className="pt-16  "
          style={{ fontSize: "25px" , height:"100%", color: "white", textAlign: "center" }}
        >
          Other
        </p>
        </Link>
      </div>
    
    </Box>
  );
};

export default Catgories;
