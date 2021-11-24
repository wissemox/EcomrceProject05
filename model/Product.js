const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const ProductShema = new Schema({
    ProductName:{
        type:String,
        required: true
    },
    Prix:{
        type:Number,
        required: true
    },
    Tail:{
        type:String,
        required: true,
    },

    Image:[], 
    Image02:[]
}); 

module.exports=Product= mongoose.model('Product',ProductShema)