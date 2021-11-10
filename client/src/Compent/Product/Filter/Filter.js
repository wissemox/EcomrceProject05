import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Slider from "../../../Share/Slider";
const Filter = ({Number01 ,setNumber01 , Tile , setTaile , setCatgorie , Catgoire }) => {
  const [Togel, setTogel] = useState(false);
  const [Togel01, setTogel01] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  return (
    <div style={{top:"60px"}} className="ml-8 sticky  mt-4">
     
     <RadioGroup>
          <MuiThemeProvider theme={theme}>
            <div>
              <FormControlLabel
                value="Delivery"
                control={<Radio color="secondary" />}
                label="Delivery"
              />
            </div>
            <FormControlLabel
              value="Take away"
              control={<Radio color="secondary" />}
              label="Take away"
            />
          </MuiThemeProvider>
        </RadioGroup>
    
      <p className="mt-4 mb-4"> Catgories </p>
      <RadioGroup value={Catgoire} onChange={(e)=>setCatgorie(e.target.value)}>
          <MuiThemeProvider theme={theme}>
          <FormControlLabel
              value=""
              control={<Radio color="secondary" />}
              label="All"
            />
            <div>
              <FormControlLabel
                value="Anime"
                control={<Radio color="secondary" />}
                label="Anime"
              />
            </div>
            <FormControlLabel
              value="Manga"
              control={<Radio color="secondary" />}
              label="Manga"
            />
         <FormControlLabel
              value="Game"
              control={<Radio color="secondary" />}
              label="Game"
            />
          
          </MuiThemeProvider>
        </RadioGroup>
      <div className="mt-4 brtopbottom mr-4 ">
        <div
          style={{ width: "100%", fontWeight: "600" }}
          className="flex pt-3 pb-3"
        >
          <p
            className="tracking-wider "
            style={{ fontSize: "17px", width: "90%" }}
          >
            Price
          </p>
          {Togel ? (
            <p onClick={() => setTogel(!Togel)}>v</p>
          ) : (
            <p onClick={() => setTogel(!Togel)}>^</p>
          )}
        </div>
        {Togel && (
          <div>
            <Slider Number01={Number01} setNumber01={setNumber01} />
          </div>
        )}
        {console.log(Number01)}
      </div>
       
    </div>
  );
};

export default Filter;
