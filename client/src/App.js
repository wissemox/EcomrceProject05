
import React ,{useEffect , useState} from 'react'
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from 'react-redux'
// Home
import Navbar from "./Compent/HomePage/Navbar/Navbar";
import MainPage from "./Compent/HomePage/MainPage/MainPage";
import Pannier from "../src/Compent/HomePage/Pannier/Pannier";
import Catgories from "../src/Compent/HomePage/Catgories/Catgories";
import Fotter from "./Compent/HomePage/Fotter/Fotter";
// Admin 
import Admin from './Compent/Admin/Admin'
import LoginAdmin from './Compent/Admin/LoginAdmin/LoginAdmin'
// Registe & login
import Register from './Compent/Register/Register'
import Login from './Compent/Login/Login'
import {GetUserLogged , ProductGetAll} from './js/action/Actions'
import DatiledProduct from './Compent/Product/DatiledProduct/DatitedProduct'
// Product 
import MainPageProduct from '../src/Compent/Product/MainPage/MainPage'
// scss
import "./Css/heaight/heaight.scss";
import "./Css/widht/widht.scss";
import "./Css/fontFamilty/fontFamilty.scss";
import "./Css/Reposive/Navbar.scss";
import "./Css/Animation/Menu.scss";
import "./Css/background/background.scss";
import "./Css/Reposive/Menu.scss";
import "./Css/Animation/CatgoriesAnimation.scss";
import "./Css/Reposive/Spinner.scss"
import "./Css/Reposive/Catgories.scss"
import "./Css/Reposive/Product.scss"
import "./Css/Reposive/DatiedProduct.scss"
import "./Css/Reposive/Modal.scss"

// Route 
import {Redirect} from 'react-router-dom'
import LogowhiteAnimatiion from './logo/LogowhiteAnimatiion'
function App() {
  const dispatch =useDispatch()
  useEffect(() => {
    // GetUserLogged
    dispatch(ProductGetAll())
    dispatch(GetUserLogged())
  }, [])
  const [Catgoire, setCatgorie] = useState()
  const Verife = useSelector(state => state.ProductGetAll.ProductAll)
  return (
     <div>
       {Verife ?  <BrowserRouter>
       {/*Home Page  */} 
      <Route exact path="/" render={() => <Pannier/> } />
      <Route exact path="/" render={() => <Navbar /> } />
      <Route exact path="/" render={() =>  <MainPage /> } />
   
      {/* <Route exact path="/" render={() =>  <Catgories /> } /> */}
      {console.log(Catgoire)}
      {/* Admin */}
      {/* <Route exact path="/Admin" render={() => <LoginAdmin/> } /> */}

      <Route exact path="/dashboardAdmin" render={() => <Admin/> } />
      <Route exact path="/Register" render={() => <Register/> } />
      <Route exact path="/Login" render={() => <Login/> } />
      {/* Product */}
      {/* MainPageProduct */}
      <Route exact path="/Product" render={() => <MainPageProduct setCatgorie={setCatgorie} Catgoire={Catgoire}/> } />
    
      <Route exact path="/" render={() =>  <Catgories   setCatgorie={setCatgorie}/> } />

      <Route exact path="/" render={() =>  <Fotter setCatgorie={setCatgorie} /> } />

      <Route exact path="/Product/:token" render={({match})=><DatiledProduct match={match.params.token}/>}/> 

        
      
      </BrowserRouter> :  <div className="flex ResposiveSpinner" style={{backgroundColor:"#2ac6dc" , width:"100%" , height:"100vh" , justifyContent:"center" , paddingTop:"40vh"}}> 
      <div style={{width:"20vh"}} className="SpinnerReposiveWidht"  > 
 
      {/* <img className="Animationlogo" src={process.env.PUBLIC_URL +"LogowhiteAnimation.svg"}/> */}
      <LogowhiteAnimatiion className="Animationlogo"  />
      </div>
        </div>}
      {/* <p>dqzd</p>
      <Pannier/> */}
      {/* <Navbar/>   */}
      {/* <Pannier/> */}
     
  
     
      </div>
 
  );
}

export default App;
