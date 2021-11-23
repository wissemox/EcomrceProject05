import React, { useEffect, useState } from "react";
import Navbar02 from "../../HomePage/Navbar/Navbar02";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ProductValide, NullReturnValidet } from "../../../js/action/Actions";
import MapImage from "./MapImage";
import ImageBig from "./ImageBig";
const DatitedProduct = ({ match }) => {
  const [open, setOpen] = useState(false);
  const Product = useSelector((state) => state.ProductGetAll.ProductAll);
  const Msg = useSelector((state) => state.ProductValide.msg);
  const [Check, setCheck] = useState(true);
  const Dispatch = useDispatch();
  // background: url('g2nZq3X6bJEkeEbFyTfPfB.jpg')  ;
  // background-size: cover;
  // <img   src={el.Image[0]}/>
  const [Number, setNumber] = useState(1);
  const[dazda , setdzda] =useState("dadz")
  const Delte = () => {
    Dispatch(NullReturnValidet());
    setCheck(false);
  };
  const [BollenAnimation, setBollenAnimation] = useState(false);
  const [BollenAnimation01, setBollenAnimation01] = useState(true);
  const [TogelOpenModel, setTogelOpenModel] = useState(false)
  return (
    <div>
     
       {/* Success Togel Handeeler */}
      {/* <div
        style={{ position: "fixed",widht:"250px", top: "0px", backgroundColor: "black" }}
        className="bg-black"
      >
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
      </div> */}
      <div className="mt-4 mb-4">
        <Navbar02 />
      </div>
        {TogelOpenModel&& <div >  <div className={`${TogelOpenModel&&"ScaleAnimation02"} backgroundColorTest12`}  onClick={()=>setTogelOpenModel(false)} style={{position:"absolute" , width:"100%" , height:"105vh" , }}>

        </div>
          <div className={`${TogelOpenModel&&"ScaleAnimation02"} backgroundColorTest12  flex justify-center`} > 
          <div className="widht-50pr h-3/6 w-3/6 widhtHeaightReposiveTo50to100DatiedProduct marginTop5prDatiedProduct" style={{position:"absolute" }}>
          {Product.filter((el) => el._id == match).map((el)=><img  src={el.Image[Number]}/>)}
          </div> 
        </div>
        </div>}
        
      {Msg && Check && (
        <AppBar
          className="AnimaiionNavbarSticky"
          style={{ backgroundColor: "#edf7ed" }}
        >
          <div
            style={{
              maxWidth: "1400px",
              height: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="flex widht100pr"
          >
            <div className="flex widht-50pr  pt-2">
              <VerifiedUserIcon
                style={{ fontSize: "30px", color: "#5cb660" }}
              />
              <p className="pt-1 pl-4" style={{ color: "#020202" }}>
                This is a success alert — check it out!
              </p>
            </div>
            <div
              style={{ justifyContent: "flex-end" }}
              className="flex widht-50pr pt-3"
            >
              <HighlightOffIcon onClick={Delte} style={{ color: "#f26b6b" }} />
            </div>
          </div>
        </AppBar>
      )}

      <div>
        {Product.filter((el) => el._id == match).map((el) => (
          // Background
          <div>
            <div
            className="h-200px HeaghtReposiveDatieedProduct"
              style={{
                backgroundColor: "#f2f2f2",
                backgroundImage: `url(${el.Image[0]})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              style={{
                maxWidth: "1600px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {/* Datied Product */}

              {/* <div className="flex mt-8 mb-4" style={{ width: "100%" ,height:"320px" }}>
                <div className="pl-6 pr-6 pt-4" style={{    height:"100%"}}>
                    <div  style={{widht:"20px" , height:"20px" , backgroundColor:"#f04a23", borderRadius:"30px" , height:"10px" , fontSize:"7px"}}> 
                     <p style={{color:"#f04a23"}}>daz</p>
                    </div>
                  </div>
                 <div style={{ width: "30%"   }}>  
                    <img
                      style={{ height: "320px", width: "100%" }}
                      src={el.Image[Number]}
                    />
                  </div>
                  <div  > 
                    <div style={{justifyContent:"space-around"}}  className="flex"> 
                    {el.Image.map((eld)=><MapImage eld={eld}/>)}
                    </div>
                
              
                  <div  >
                    <Modal
                      open={open}
                      setOpen={setOpen}
                      Prix={el.Prix}
                      ProductName={el.ProductName}
                      Image={el.Image}
                    />
                  </div>
                  </div>
                  <div className="ml-6 flex" style={{widht:"20px"  , height:"20px" , backgroundColor:"#38c2d9", borderRadius:"2px" , height:"30px" , fontSize:"4px" , marginTop:"285px"}}> 
                     <p style={{color:"#38c2d9"}}>daz</p>
                    </div>
              </div> */}
            </div>
          </div>
        ))}

        {/* Porduct DAtied */}
        <div style={{ width: "100%" }} className="flex mt-7 marginLeftReposiveDatiedPRoduct">
          <div
            className="flex dsqd ReposiveFlexDatied"
            style={{
              maxWidth: "1600px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <div className=" pr-6 pt-1 DisplayNone900RepsoiveDatiedPRoduct" style={{ width: "5%" }}>
              <div
                style={{
                  backgroundColor: "#2ac6dc",
                  height: "20px",
                  borderRadius: "20px",
                  width: "20px",
                }}
              ></div>
            </div>
            <div className="mr-6 widht500px  MarginLeftDatiedProductImageBig" style={{ backgroundColor:"#2ac6dc"}}>
              {Product.filter((el) => el._id == match).map((el) => (
                <ImageBig setTogelOpenModel={setTogelOpenModel} BollenAnimation01={BollenAnimation01} BollenAnimation={BollenAnimation}  Number={Number} el={el} />
              ))}
            </div>

            <div className="widht-60pr widhtReposive60prDatiedProduct">
              {/* MapImage */}
              {Product.filter((el) => el._id == match).map((el , i) => (
                <MapImage BollenAnimation01={BollenAnimation01} setBollenAnimation01={setBollenAnimation01} BollenAnimation={BollenAnimation} setBollenAnimation={setBollenAnimation} i={i} setNumber={setNumber} Number={Number} el={el} />
              ))}
              {Product.filter((el) => el._id == match).map((el) => (
                <div>
                  <Modal
                    open={open}
                    setOpen={setOpen}
                    Prix={el.Prix}
                    ProductName={el.ProductName}
                    Image={el.Image}
                  />
                </div>
              ))}
            </div>
            <div className=" DisplayNone900RepsoiveDatiedPRoduct  ml-4" style={{ width: "5%" }}>
              <div
                className="ml-7"
                style={{
                  width: "8px",
                  backgroundColor: "#f84816",
                  height: "60px",
                  marginTop: "300px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatitedProduct;
