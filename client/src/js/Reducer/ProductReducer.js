import {
    
    AddProduct,
    ReturnNull
    } 
from '../constant/ActionType'

const ProductReducer = {

    msg:null,

    
}; 

const ProductAdd = (state=ProductReducer,{type, payload}) =>{
    switch(type) {
       
        case AddProduct:
            
       
            return {
                
                ...state,  
                ...payload,
            }
     
            case ReturnNull :
                return {
                        msg:null
                }
    
            default:
                return state;
        
    }
};
export default ProductAdd