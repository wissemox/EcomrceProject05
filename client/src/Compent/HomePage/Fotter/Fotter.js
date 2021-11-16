import React, { useState, useEffect } from "react";
import FotterMap from "./FotterMap";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { ProductGetAll } from "../../../js/action/Actions";

const Fotter = ({setCatgorie}) => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(ProductGetAll());
  }, []);
  const ProductMap = useSelector((state) => state.ProductGetAll.ProductAll);
  const [Product, setProduct] = useState([
    { name: "Kimetsu-No-Yaiba.jpg_640x640.jpg" },
    { name: "GamerModeOn-Black_4_1024x1024@2x.jpg" },
    { name: "add6e0365d8f780462d732a9435643a23fcdf1a9_original.jpeg" },
  ]);
  return (
    <div
      style={{ maxWidth: "1500px", marginRight: "auto", marginLeft: "auto" }}
    >
      <div className="flex justify-center mt-14 mb-8	">
        <p style={{ fontSize: "35px", fontWeight: "600" }}>know Product</p>
      </div>
  
      {/* <div
        className="ml-12 mr-12"
        style={{  height: "600px"   }}
      >
        <div style={{justifyContent:"center"}} className="flex ">
          <div style={{ width: "35%", height: "500px" }}>
            <div style={{width:"100%" ,flexWrap:"wrap"}}  className="flex ">
              {ProductMap &&
                ProductMap.slice(0, 3).map((el, i) => (
   
                    <img className="mr-7 mb-4 mt-4" style={{ width:i==2 ? "100%":"44%" ,height:i==2 ?"400px":"200px" }} src={el.Image[1]} /> 
               
              
                ))}
            </div>
          </div>
          <div style={{ width: "35%" }}>

          <div style={{width:"100%" ,flexWrap:"wrap"}}  className="flex ">
              {ProductMap &&
                ProductMap.slice(3, 6).map((el, i) => (
   
                    <img className="mr-7 mb-4 mt-4" style={{ width:i==0 ? "100%":"44%" ,height:i==0 ?"400px":"200px" }} src={el.Image[0]} /> 
               
              
                ))}
            </div>
          </div>
        </div>
      </div> */}
      <div id="product" style={{justifyContent:"center"}} className="flex">
       <div  style={{justifyContent:"space-around" ,width:"90%"}} className="flex flex-wrap 	">
                    {ProductMap&&ProductMap.slice(0,9).map((el)=><FotterMap setCatgorie={setCatgorie} el={el}/>)}
                </div>
        </div>        
    </div>
  );
};

export default Fotter;
