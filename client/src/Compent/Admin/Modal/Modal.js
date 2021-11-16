import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { registerUser, NullReturn } from "../../../js/action/Actions";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// FUnction

export default function BasicModal({ SetTogelTest, TogelTest }) {
  const dispatch = useDispatch();
  const [Sinner, SetSpinner] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    SetTogelTest(true);
    SetSpinner(false);
    dispatch(NullReturn());
  };

  const handleClose = () => SetTogelTest(false);
  const [File, setFile] = useState();
  const [File01, setFile01] = useState();
  const MsgProduct = useSelector((state) => state.ProductADD.msg);
  if (MsgProduct) {
    SetTogelTest(false);
    console.log(TogelTest);
  }
//  State Product Name 
  const [Name , setNameProduct]=useState()
  const [Taill , setTaill]=useState("N")
  const[Prix , setPrix]=useState(0)
  const Test = async () => {
    if (File) {
      const base640 = await converbase64(File01[0]);

      TestArray.push(base640);
      for (let i = 0; i < File.length; i++) {
        const base64 = await converbase64(File[i]);

        TestArray.push(base64);

        //   console.log(base64)
      }
    }

    dispatch(registerUser({ProductName:Name, image02: TestArray ,Tail:Taill,Prix:Prix }));
    SetSpinner(true);
  };
  const TestArray = [];
  const converbase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReder = new FileReader();
      fileReder.readAsDataURL(file);
      fileReder.onload = () => {
        resolve(fileReder.result);
      };
      fileReder.onerror = (error) => {
        reject(error);
      };
    });
  };
  const HandelchangeFile = async (e) => {
    setFile(e.target.files);
    // if(File){
    //     for(let i = 0 ; i<File.length; i++){
    //         const base64=await converbase64(File[i])
    //         console.log()
    //         TestArray.push(base64)

    //       //   console.log(base64)
    //       }
    // }

    localStorage.setItem("user", JSON.stringify(TestArray));
  };
  const HandelchangeFile01 = async (e) => {
    console.log(File01)
    setFile01(e.target.files);
    // if(File){
    //     for(let i = 0 ; i<File.length; i++){
    //         const base64=await converbase64(File[i])
    //         console.log()
    //         TestArray.push(base64)

    //       //   console.log(base64)
    //       }
    // }

    localStorage.setItem("user", JSON.stringify(TestArray));
  };
  return (
    <div>
      {console.log(TestArray)}
      <AddIcon onClick={handleOpen}>Open modal</AddIcon>
      <Modal
        open={TogelTest}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!MsgProduct && Sinner && <p>Spainner ... </p>}
          <TextField
            value={Name}
            onChange={(e)=>setNameProduct(e.target.value)}
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
          />
          <div>
            <div style={{marginRight:"140px" , marginTop:"30px" , marginBottom:"30px"}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Catgories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Taill}
                  label="Taill"
                  onChange={(e)=>setTaill(e.target.value)}
                >
                  <MenuItem value={"Anime"}>Anime</MenuItem>
                  <MenuItem value={"Manga"}>Manga</MenuItem>
                  <MenuItem value={"Game"}>Game</MenuItem>
                </Select>
              </FormControl>
              <div className="mt-8 mb-8">
                <TextField
                  value={Prix}
                  onChange={(e)=>setPrix(e.target.value)}
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
          </div>
          <p> Chose background</p>
          <input type="file"   onChange={(e) => HandelchangeFile01(e)} />
          <p> Image Tshirt</p>
          <input type="file" multiple onChange={(e) => HandelchangeFile(e)} />
          <button onClick={Test}>Click me</button>
        </Box>
      </Modal>
    </div>
  );
}
