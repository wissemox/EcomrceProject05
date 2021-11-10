import {
    RegisterUser,
    DecodedUser,
    LoginUser
    } 
from '../constant/ActionType'

const RegisterGetinformation = {

    msg:null,
    errors:null,
}; 

const RegisterUser01 = (state=RegisterGetinformation,{type, payload}) =>{
    switch(type) {
       
        case RegisterUser:
            localStorage.setItem('token',payload.token)
            return {
                
                ...state,  
                ...payload,
            }
            case LoginUser:
                localStorage.setItem('token',payload.token)
                return {
                    
                    ...state,  
                    ...payload,
                }

            
            case DecodedUser:
                return {
                    
                    ...state,  
                    ...payload,
                }
            
        
    
            default:
                return state;
        
    }
};
export default RegisterUser01