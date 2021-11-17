import {
    RegisterUser,
    DecodedUser,
    LoginUser
    } 
from '../constant/ActionType'

const RegisterGetinformation = {
    Getuser:null,
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
                    Getuser:payload.Findemail,
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