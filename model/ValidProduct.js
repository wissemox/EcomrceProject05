const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const ProductValideSchema = new Schema({
    Name:{
        type:String,
    },
    LastName:{ 
        type:String,
    }, 
    Tail:{
        type:String
    },
    Email:{
        type:String
    }, 
    PhoneNumber:{
        type:Number
    }, 
    ProductName:{
        type:String
    }, 
    Image:{
        type:String
    }, 
    Prix:{
        type:Number
    },
    Quantité:{
        type:Number

    }

    
}); 

module.exports=ProductValide= mongoose.model('ProductValide',ProductValideSchema)