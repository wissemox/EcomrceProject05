import { ALLProduct } from "../constant/ActionType";

const ProductGet = {
    ProductAll:null,
    msg:null
}

const ProductGetAllone = (state=ProductGet , {type , payload})=>{
    switch(type){
        case ALLProduct : 
        return {
          ...state ,
          ...payload ,
        }
        default :
        return state
    }
}
export default ProductGetAllone