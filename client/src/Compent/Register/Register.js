import React ,{useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { RegisterSave, LoginUser01 } from "../../js/action/Actions";
import { Input, makeStyles } from "@material-ui/core";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import purple from "@material-ui/core/colors/purple";
import {Link} from 'react-router-dom'
import MapError from "../Login/MapError/MapError";
const Register = () => {
    const Register = useSelector(state => state.Register)
    const [name, setname] = useState()
    const [lastName, setlastName] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const dispatch = useDispatch()
    const RegisterUser=()=>{
        dispatch(RegisterSave({name,lastName,email,password}))
    }
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
        
        <div>
            {Register.msg&&<Redirect to="/"/>}
            

            <div className="backgroundImage05" style={{ height:Register.errors? "140vh" : "100vh" }}>
      <div   style={{ width: "66%" }}>
      {Register.errors&&Register.errors.map((el)=><MapError el={el}/>)}
        <Container>
          <div className={`mr-24 ${Register.errors ?"pt-2":"pt-20"}  pl-60   pt-14 pb-24 `}>
            <div className="flex	">
              <div
                style={{
                  color: "#f84816",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                <p>Sign up</p>
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
               <Link to="/login"><p>Login</p></Link>
              </div>
            </div>
            <div>
              {Register.msg && <Redirect to="/" />}
              {/*Error  */}
              {Register.errors && <div>               <div className="mt-24">
              <MuiThemeProvider theme={theme}> 

                <Input
                   color="secondary"
                  className="mb-16"
                  style={{ width: "65%" }}
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </MuiThemeProvider>

              </div>
              <div>
                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  color="secondary"     
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
                </MuiThemeProvider>
              </div>

              <div>     

                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  className="mt-16"
                  color="secondary"     
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                </MuiThemeProvider>
              </div>
               
              <div>
                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  className="pt-16"
                  color="secondary"     
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                </MuiThemeProvider>
              </div>
              </div>}
              {!Register.errors && <div>               <div className="mt-24">
              <MuiThemeProvider theme={theme}> 

                <Input
                   color="secondary"
                  className="mb-16"
                  style={{ width: "65%" }}
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </MuiThemeProvider>

              </div>
              <div>
                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  color="secondary"     
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
                </MuiThemeProvider>
              </div>

              <div>     

                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  className="mt-16"
                  color="secondary"     
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                </MuiThemeProvider>
              </div>
               
              <div>
                <MuiThemeProvider theme={theme}> 
                <Input
                  style={{ width: "65%" }}
                  className="pt-16"
                  color="secondary"     
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                </MuiThemeProvider>
              </div>
              </div>}


              
            </div>
            <div style={{width:"65%"}} className="mt-16   flex justify-end	">
              <button className="pt-1 pb-1 text-sm	rounded-xl		" style={{backgroundColor:"#F84816" , width:"100px" , color:"white"}} onClick={RegisterUser} >Sign up</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
        </div>
    )
}

export default Register
