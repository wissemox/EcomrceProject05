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
  width: 400,
  bgcolor: 'white',
  borderRadius: '40px',
  p: 2,
  px: 4,
  pb: 3,
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
  const Dispatch = useDispatch()
  const AddProuductVlaideFunction = ()=>{
      Dispatch(ProductValide({Name:Name , lastName:lastName , Tail:Tail ,Email:Email , PhoneNumber:PhoneNumdber ,ProductName:ProductName ,Image:Image[0] , Prix:Prix }))
    
  }
  const MSG = useSelector(state => state.ProductValide.msg)
  const Error =useSelector(state=>state.ProductValide.errors)
   if(MSG){
    handleClose()
 }if(!MSG && open){
    handleOpen()
   }
  return (
    
    <div>

      <Button type="button" onClick={handleOpen}>
        {console.log(Image[0])}
        Open modal
      </Button>
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
            <p>Name</p>
            <TextField value={Name} onChange={(e)=>setName(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
            <p>lastName</p>
            
            <TextField value={lastName} onChange={(e)=>setlastName(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
            <p>Email</p>
            <TextField value={Email} onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
            <p>PhoneNumber</p>
            <TextField value={PhoneNumdber} onChange={(e)=>setPhoneNumber(e.target.value)} type="Number" id="standard-basic" label="Standard" variant="standard" />
            <FormControl fullWidth>
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
              <div className="flex"> 
              <Button onClick={AddProuductVlaideFunction}>Buy</Button>
              <Button>Cancel</Button>
              </div>
        </Box>
      </StyledModal>
    </div>
  );
}