import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterSave, LoginUser01 } from "../../js/action/Actions";
import { Redirect } from "react-router-dom";
import { Input, makeStyles } from "@material-ui/core";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import purple from "@material-ui/core/colors/purple";
import {Link} from 'react-router-dom'
import MapError from "./MapError/MapError";
const Login = () => {
 
  const Register = useSelector((state) => state.Register);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();
  const LoginUserd = () => {
    dispatch(LoginUser01({ email, password }));
  };
  const Token = localStorage.getItem('token')
  const error =null
  const noerror =null
  const [error01 , seterrorr] =useState(error)
  const useStyles = makeStyles(theme => ({
    root: {
      color: "red"
    }
  }));
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#2ac6dc",
      },
    },
  });
  return (
    <div className="backgroundImage05" style={{ height: "100vh" }}>
      <div   style={{ width: "66%" }}>
      {Register.errors&&Register.errors.map((el)=><MapError el={el}/>)}
        <Container>
          <div className={`mr-24 ${Register.errors ?"pt-2":"pt-36"}  pl-60   pt-14 pb-24 `}>
            <div className="flex	">
              <div
                style={{
                  color: "#2AC4DB",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
              <Link to="/login"><p>Login</p> </Link>
              </div>
              <div
                className="pl-6"
                style={{
                  fontSize: "15px",
                  paddingTop: "10px",
                  color: "#CCCCCC",
                  fontWeight: "500",
                }}
              >
               <Link to="/register"><p>Sign up</p></Link>
              </div>
            </div>
            <div>
              {Register.Getuser&&Register.Getuser.isAdmins&& <Redirect to="/dashboardAdmin" /> ||Register.Getuser&&!Register.Getuser.isAdmins&&<Redirect to="/" /> }
              {/*Error  */}
              {Register.errors && <div> 
                <div className="mt-24">
              <MuiThemeProvider theme={theme}> 

                <Input
                error
                   color="secondary"
                  className="mb-24"
                  style={{ width: "65%" }}
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </MuiThemeProvider>

              </div>
              <div>
                <MuiThemeProvider theme={theme}> 
                <Input
                  error
                  style={{ width: "65%" }}
                  color="secondary"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                </MuiThemeProvider>
              </div>

              </div> }
              {!Register.errors && <div>               <div className="mt-24">
              <MuiThemeProvider theme={theme}> 

                <Input
                   color="secondary"
                  className="mb-24"
                  style={{ width: "65%" }}
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </MuiThemeProvider>

              </div>
              <div>
                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  color="secondary"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                </MuiThemeProvider>
              </div></div>}


              
            </div>
            <div style={{width:"65%"}} className="mt-16   flex justify-end	">
              <button className="pt-1 pb-1 text-sm	rounded-xl		" style={{backgroundColor:"#F84816" , width:"100px" , color:"white"}} onClick={LoginUserd}>Login</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
