const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const userShema = new Schema({
    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    isAdmins :{
        type:Boolean,
        default:false
    },
}); 

module.exports=User= mongoose.model('User',userShema)