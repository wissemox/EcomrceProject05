import React, { useEffect, useState } from "react";
import Navbar from "../../HomePage/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AppBar from '@mui/material/AppBar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {ProductValide ,NullReturnValidet} from '../../../js/action/Actions'
const DatitedProduct = ({ match }) => {
  const [open, setOpen] = useState(false);
  const Product = useSelector((state) => state.ProductGetAll.ProductAll);
  const Msg = useSelector((state) => state.ProductValide.msg);
  const [Check , setCheck]=useState(true)
  const Dispatch = useDispatch()
  // background: url('g2nZq3X6bJEkeEbFyTfPfB.jpg')  ;
  // background-size: cover;
  // <img   src={el.Image[0]}/>
  const [Number, setNumber] = useState(0);
  const Delte =()=>{
    Dispatch(NullReturnValidet())
    setCheck(false)
  }
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
        <Navbar />
      </div>
     
        {Msg && Check&& <AppBar className="AnimaiionNavbarSticky" style={{backgroundColor:"#edf7ed"}}  >
          
          <div style={{maxWidth:"1400px" , height:"50px" , marginLeft:"auto" , marginRight:"auto"}} className="flex widht100pr">
            <div className="flex widht-50pr  pt-2">
              <VerifiedUserIcon style={{fontSize:"30px" , color:"#5cb660"}}/>
              <p className="pt-1 pl-4" style={{color:"#020202"}}>This is a success alert — check it out!</p>
            </div>
            <div style={{justifyContent:"flex-end"}} className="flex widht-50pr pt-3">
               <HighlightOffIcon onClick={Delte} style={{color:"#f26b6b"}}/>
            </div>
          </div>
           
      </AppBar>}
      
     
      <div style={{ width: "100%" }}>
        {Product.filter((el) => el._id == match).map((el) => (
          <div>
            <div
              style={{
                backgroundColor: "red",
                height: "200px",
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
              <div className="flex" style={{ width: "100%" }}>
                <img
                  style={{ height: "450px", width: "50%" }}
                  src={el.Image[Number]}
                />
                <div>
                  <div className="flex ml-14" style={{ widht: "50%" }}>
                    {el.Image.map((eld, i) => (
                      <div style={{ widht: "20%" }}>
                        <img
                          onClick={() => setNumber(i)}
                          className="ml-6 mr-6 mt-4"
                          style={{
                            widht: "50px",
                            borderRadius: "30px",
                            height: "150px",
                          }}
                          src={eld}
                        />
                      </div>
                    ))}
                  </div>
                  <p
                    className="ml-6 mt-4"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    Tshirt : {el.ProductName}
                  </p>
                  <p
                    className="ml-6 mt-4"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    Prix : {el.Prix}
                  </p>
                  <div className="ml-4 mt-4">
                    <Modal
                      open={open}
                      setOpen={setOpen}
                      Prix={el.Prix}
                      ProductName={el.ProductName}
                      Image={el.Image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatitedProduct;
