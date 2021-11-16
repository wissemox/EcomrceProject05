import { AdminGetUser , DecodeAdmin } from "../constant/ActionType";

const AdminGet = {
    msg:null,
    Getuser:null
}
const AdminReducer = (state=AdminGet , {type , payload})=>{
    switch(type){
        
        case AdminGetUser : 
        localStorage.setItem('AdminToken',payload.token)
        return {
          ...state ,
          ...payload ,
        }
        case DecodeAdmin :
            return {
                ...state ,
                ...payload ,
              }
        default :
        return state
    }
}
export default AdminReducer