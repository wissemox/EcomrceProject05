import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector,useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import { DeleteAll } from "../../js/action/Actions";
import BasicModal from "./Modal/Modal";
import MapProduct from "./Modal/MapProduct";
import Button from '@mui/material/Button';
// DeleteAll

const MainPage = ({ SetTogelTest, TogelTest }) => {
  const ProducTallToshow = useSelector(
    (state) => state.ProductGetAll.ProductAll
  );
  const dispatch = useDispatch()
  const DeletAll01 = ()=>{
      dispatch(DeleteAll())
  }
  return (
    <div>
      <div style={{ backgroundColor: "#EAEAEA" }}>
        <div
          style={{
            maxWidth: "1300px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="pl-64 pt-4 pb-4 flex"
        >
          <div style={{ width: "50%" }} className="flex">
            <MenuIcon />
            <p className="pl-8 text-gray-600 	">Homme</p>
            <p className="pl-8 text-gray-600 	">Contact</p>
          </div>
          <div
            style={{ justifyContent: "end", width: "50%" }}
            className="flex pr-10"
          >
            <SearchIcon />
          </div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "end",
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        className="mt-9 mr-9 flex"
      >
        <BasicModal SetTogelTest={SetTogelTest} TogelTest={TogelTest} />
      </div>
      <Container>
        <div
          style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
          className="flex   ml-60 mr-0  "
        >
          {ProducTallToshow &&
            ProducTallToshow.map((el) => <MapProduct el={el} />)}
        </div>
      </Container>
      <div className="ml-40">
        <div style={{marginLeft:"auto" , marginRight:"auto" , marginTop:"30px" , width:"75%"}} className="flex justify-end 	white">
            <Button onClick={DeletAll01} variant="outlined" color="error">
                DeleteAll
            </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
