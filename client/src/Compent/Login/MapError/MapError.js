import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const MapError = ({ el }) => {
  return (
    <div  className="ml-4 mr-4 pt-4 AnimationHoverNavbar">
     
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error"><p>{el.msg}</p></Alert>
        {console.log(el)}
      </Stack>
    </div>
  );
};

export default MapError;
