import {
    
    ProductValideMsg,
    ActionValidetReturnNull
    } 
from '../constant/ActionType'

const ProductReducer = {

    msg:null,
    errors:null
    
}; 

const ProductValidMsg = (state=ProductReducer,{type, payload}) =>{
    switch(type) {
       
        case ProductValideMsg:
            
       
            return {
                
                ...state,  
                ...payload,
            }
            case ActionValidetReturnNull :
                return {
                        msg:null,
                        errors:payload
                }
         
            default:
                return state;
        
    }
};
export default ProductValidMsg