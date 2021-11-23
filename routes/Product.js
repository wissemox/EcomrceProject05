const router = require('express').Router()
const Product = require('../model/Product')
// ProductValidetaor
const ProductValide = require('../model/ValidProduct')
const {validator , ProductValidetaor } = require('../middlerwares/validator')
router.delete('/DeleteAll',async(req,res)=>{
    try{
       const Test = await Product.remove()
       res.json({msg:"AllDelted" })
    }catch(error){
        console.log(error)

    }

})
router.delete('/DeleteWidhId/:id',async(req,res)=>{
    const{id}=req.params
    try{
        const FindoneAndDelte = await Product.findByIdAndDelete({_id:id})
        res.json({msg:"Done",FindoneAndDelte})

// findByIdAndDelete
    }catch(error){
        console.log(error)
    }
})
router.post('/ProductValide',ProductValidetaor(),validator , async(req,res)=>{
    const {Name , lastName , Tail ,Email,PhoneNumber , ProductName , Image , Prix ,Quantité} = req.body
    try{
        if(!ProductName || !Image || !Prix ||!Quantité ){
            res.json({errors:[{msg:"Entre all filed"}]})
        }
        const ProductValide01 = new ProductValide({Name , lastName , Tail , Email ,PhoneNumber ,ProductName , Image ,Prix , Quantité  });        
         await ProductValide01.save();
        res.json({msg:"Your Commendd send with success" , ProductValide01})
    }
    catch(error){
        console.log(error)
    }

})
module.exports = router;