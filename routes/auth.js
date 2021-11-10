const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {cloudinary}=require('../utils/cloudinary')
const Product =require('../model/Product')
const {validator , registerRules , loginRules} = require('../middlerwares/validator')
const { findOne } = require('../model/User')
router.post('/register',registerRules(),validator, async(req,res)=>{
    const{name,lastName,email,password}=req.body; 
    try{
     
         
         const EmailVerif = await User.findOne({email}) 
         if(EmailVerif){ 
             return res.json({Error:"Emile alerdy exist"})
          }
          const NewUser = new User({name , lastName , email , password}); 
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
router.post('/login',loginRules(),validator , async(req,res)=>{
    const {email} =req.body
    const {password}=req.body
    try{    
        const Findemail =await User.findOne({email})
        if(!Findemail){
            return res.json({errors:[{msg:"Email is required"}]})
        }
        const isMatch= await bcrypt.compare(password , Findemail.password)
        if(!isMatch){
            return res.json({errors:[{msg:"Password is required"}]})
        }
        const payload ={
            id:Findemail._id
        };
        const token = await jwt.sign(payload , process.env.sercerOrkey)
        res.json({msg:"Loginn success",token})
    }catch(eror){
        console.log(eror)
    }
})
router.get('/Decoded', async(req,res)=>{ 
    const token = req.headers['x-auth-token']
    try{
        const deacoded = await jwt.verify(token,process.env.sercerOrkey)
        const Getuser = await User.findById(deacoded.id)
        
         return res.json({msg:"deacoded",Getuser})
    
    }catch(error){
        console.log(error)
    }
})

router.post('/Product', async(req,res)=>{ 
    const {image02}=req.body
    const {ProductName}=req.body
    const {Tail}=req.body
    const {Prix}=req.body
    const Array =[]
   try{
      if(image02[0]){
        const uploadedResponse01=await cloudinary.uploader.
        upload(image02[0],{
            upload_preset:'test',
           
        })
        if(uploadedResponse01){
            Array.push(uploadedResponse01.url)
        }
      }
  if(image02[1]){
    const uploadedResponse02=await cloudinary.uploader.
    upload(image02[1],{
        upload_preset:'test',
       
    })

    if(uploadedResponse02){
        Array.push(uploadedResponse02.url)
    }
  }
  if(image02[2]){
    const uploadedResponse03=await cloudinary.uploader.
    upload(image02[2],{
        upload_preset:'test',
       
    })

    if(uploadedResponse03){
        Array.push(uploadedResponse03.url)
    }
  }
  const ProductSave = new Product({ProductName:ProductName , Prix:Prix , Tail:Tail , Image:Array}); 
  await ProductSave.save();

   res.json({msg:"ProductSave",ProductSave})
  console.log(Array)
   }catch(error){
    console.log(error)
   }
    
})
router.get('/productGetall',async(req,res)=>{
    try{
       const ProductAll=await Product.find()
        res.json({msg:"ProductAll" , ProductAll})
    }catch(error){
        console.log(error)

    }

})

module.exports = router;