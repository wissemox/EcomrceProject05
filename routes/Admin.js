const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin  = require('../model/Admin')
const {validator , ProductValidetaor } = require('../middlerwares/validator')
 
router.post('/Addadmin'  , async(req,res)=>{
    const{name,lastName,email,password}=req.body; 
    try{
     
         
        
          const NewUser = new Admin({name , lastName , email , password}); 
          const salt = 10 
          const hashedPassword = await bcrypt.hash(password,salt)
          NewUser.password=hashedPassword;
          await NewUser.save();
          const payload ={
             id:NewUser._id
         };
         const token = await jwt.sign(payload , process.env.sercerOrkey)
          //response
         
         res.json({msg:"User register with succes",NewUser,token})
          return res.json({msg:"Done" ,NewUser,token })
    }catch(error){
        console.log(error)
    }

})

router.post('/Login'  , async(req,res)=>{
    const {email  , password}=req.body
    try{
        const Email =await Admin.findOne({email})
        if(!Email){
            res.json({msg:"there is no one here sans  need you in hell"})
        }
    const isMatch= await bcrypt.compare(password , Email.password)
    if(!isMatch){
       return res.json({msg:"KAAA MII HAAA MAAA HAAAAAAAAAAAAA"})
    }
    const payload ={
        id:Email._id
    };
    const token = await jwt.sign(payload , process.env.sercerOrkey)
   return  res.json({msg:"Success" ,Email, token })
    }catch(error){
        console.log(error)
    }
})

router.get('/Decoded', async(req,res)=>{ 
    const token = req.headers['x-auth-token']
    try{
        const deacoded = await jwt.verify(token,process.env.sercerOrkey)
        const Getuser = await Admin.findById(deacoded.id)
        
         return res.json({msg:"deacoded",Getuser})
    
    }catch(error){
        console.log(error)
    }
})

module.exports = router;