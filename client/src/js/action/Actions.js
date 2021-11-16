// Import Model
import axios from "axios";
import { AddProduct, ReturnNull,ALLProduct ,RegisterUser,DecodedUser ,LoginUser , 
   ProductValideMsg ,ActionValidetReturnNull , AdminGetUser ,  DecodeAdmin } from "../constant/ActionType";
// Register
export const GetUserLogged=()=>async(dispatch)=>{
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  }
  try{
      const res = await axios.get("/api/auth/Decoded",config)
      console.log(res.data)
     dispatch({
        type:DecodedUser, 
         payload:res.data,
     });
  }catch(error){
      console.log(error)
  }
}

export const GetAdminLogged=()=>async(dispatch)=>{
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('AdminToken')
    }
  }
  try{
      const res = await axios.get("/api/Admin/Decoded",config)
      console.log(res.data)
     dispatch({
        type:DecodeAdmin, 
         payload:res.data,
     });
  }catch(error){
      console.log(error)
  }
}
export const RegisterSave=(formdata)=>async(dispatch)=>{
  try{
      const res = await axios.post("/api/auth/register",formdata)
     dispatch({
         type:RegisterUser, 
         payload:res.data,
     });
  }catch(error){
      console.log(error)
  }
} 
export const ProductValide=(formdata)=>async(dispatch)=>{
  try{
      const res = await axios.post("/api/Product/ProductValide",formdata)
     dispatch({
         type:ProductValideMsg, 
         payload:res.data,
     });
  }catch(error){
      console.log(error)
  }
} 
export const LoginUser01=(formdata)=>async(dispatch)=>{
   try{
       const res = await axios.post("/api/auth/login",formdata)
      dispatch({
          type:LoginUser, 
          payload:res.data,
      });
   }catch(error){
       console.log(error)
   }
 }


 export const AAdminLoginUser=(formdata)=>async(dispatch)=>{
  try{
      const res = await axios.post("/api/Admin/Login",formdata)
     dispatch({
         type:AdminGetUser, 
         payload:res.data,
     });
  }catch(error){
      console.log(error)
  }
}
// GetaLLpRODUCT
export const ProductGetAll=()=>async(dispatch)=>{
    try{
        const res = await axios.get("/api/auth/productGetall")
       dispatch({
           type:ALLProduct, 
           payload:res.data,
       });
    }catch(error){
        console.log(error)
    }
}
// RegisterProduct
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/Product", formData);
    dispatch({
      type: AddProduct,
      //prends le token
      payload: res.data,
    });
    dispatch(ProductGetAll())
  } catch (error) {
    console.log(error);
  }
};
// DeleteAll
export const DeleteAll = () => async (dispatch) => {
  try {
    const res = await axios.delete("/api/Product/DeleteAll");
    dispatch(ProductGetAll())

  } catch (error) {
    console.log(error);
  }
};
export const DeleteAllFindone = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/Product/DeleteWidhId/${id}`);
    dispatch(ProductGetAll())

  } catch (error) {
    console.log(error);
  }
};
// /DeleteWidhId/:id
// ReturnNulll
export const NullReturn = () => async (dispatch) => {
  try {
    dispatch({
      type: ReturnNull,
    });
  } catch (error) {
    console.log(error);
  }
};
// ActionValidetReturnNull
export const NullReturnValidet = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionValidetReturnNull,
    });
  } catch (error) {
    console.log(error);
  }
};