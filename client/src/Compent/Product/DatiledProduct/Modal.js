import  React,{useState} from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {ProductValide ,NullReturnValidet} from '../../../js/action/Actions'
import {useDispatch , useSelector} from 'react-redux'
import Alert from '@mui/material/Alert';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 650,
  bgcolor: 'white',
    centerAdornment: {
      marginLeft: "50%" // or your relevant measure
    },
    centerText: {
      textAlign: "center"            
    }
};

export default function ModalUnstyledDemo({Image , ProductName, Prix , open , setOpen}) {
  
  const handleOpen = () => {
    if(MSG){
      Dispatch(NullReturnValidet())

    }
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const [Name , setName]=useState()
  const [lastName , setlastName]=useState()
  const [Tail , setTail]=useState()
  const [Email , setEmail]=useState()
  const[PhoneNumdber ,setPhoneNumber]=useState()
  const[Qunatite ,setQuntite]=useState()

  const Dispatch = useDispatch()
  const AddProuductVlaideFunction = ()=>{
      Dispatch(ProductValide({Name:Name , lastName:lastName , Tail:Tail ,Email:Email , PhoneNumber:PhoneNumdber ,ProductName:ProductName , Quantité:Qunatite ,Image:Image[0] , Prix:Prix }))
    
  }
  const MSG = useSelector(state => state.ProductValide.msg)
  const Error =useSelector(state=>state.ProductValide.errors)
   if(MSG){
    handleClose()
 }if(!MSG && open){
    handleOpen()
   }
  return (
    
    <div className="ml-14 mlReposiveModal mt-4 mb-4">

      <button className="widht100px widhtResposiveModal borderRadiusResposive HeaightReposive" style={{backgroundColor:"#f84816"   , color:"white"}} type="button" onClick={handleOpen}>
        {console.log(Image[0])}
        Buy
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
           {Error && Error.map((el)=><Alert severity="error">{el.msg}</Alert>)} 
            {console.log(Tail)}
            <div className="pl-24 h-250ReposiveModal" style={{backgroundColor:"#2ac6dc" }}> 
               <img style={{width:"80%"}} src={process.env.PUBLIC_URL + `/logowhites.svg`}/>
            </div>
              <div className="paddingLeft150ResposiveModal" style={{width:"100%" ,  marginTop:"20px" }}> 
                <TextField style={{width:"70%" , textAlign:"center"}} value={Name} onChange={(e)=>setName(e.target.value)} id="standard-basic" label="Name" variant="standard" />
              </div>
              <div  className="paddingLeft150ResposiveModal" style={{width:"100%"  , marginTop:"20px" }} >
                <TextField style={{width:"70%"}} value={lastName} onChange={(e)=>setlastName(e.target.value)} id="standard-basic" label="LastName" variant="standard" />
              </div>
              <div className="paddingLeft150ResposiveModal" style={{width:"100%" , marginTop:"20px" }}> 
                <TextField style={{width:"70%"}} value={Email} onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
              </div>
              <div className="paddingLeft150ResposiveModal" style={{width:"100%" ,   marginTop:"20px" }}> 
               <TextField value={PhoneNumdber} style={{width:"70%"}} onChange={(e)=>setPhoneNumber(e.target.value)} type="Number" id="standard-basic" label="PhoneNumber" variant="standard" />
              </div>
              <div className="flex"> 
                {/*Quantité  */}
            
              <div className="ml-36 marginLeftReposiveModal mr-8 mt-4 mb-4 ">  
            <FormControl size="medium" >
                <p> Taill</p>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                   value={Tail}
                  label="Taill"
                 onChange={(e)=>setTail(e.target.value)}
                >
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                  <MenuItem value={"2XL"}>XL</MenuItem>

                </Select>
              </FormControl>
              
              </div>
              <div   style={{width:"100%" ,   marginTop:"30px" }}> 
               <TextField value={Qunatite} style={{width:"65%"}} onChange={(e)=>setQuntite(e.target.value)} type="Number" id="standard-basic" label="Qunatite" variant="standard" />
              </div>
              
              </div>
              <div className="flex ml-40 mt-8 mb-8"> 
              <Button style={{backgroundColor:"#2ac6dc" , color:"white" , borderRadius:"0" , width:"40%"}} onClick={AddProuductVlaideFunction}>Buy</Button>
              <Button onClick={()=>handleClose()} style={{backgroundColor:"#f84816" , color:"white" , borderRadius:"0" , width:"20%"}}>Cancel</Button>
              </div>
        </Box>
      </StyledModal>
    </div>
  );
}