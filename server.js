const express = require('express')
const ConnectDb = require('./config/connectDb')
const auth = require('./routes/auth')
const Product =require('./routes/Product')
const path = require('path')
const Admin = require('./routes/Admin')
const app = express()
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
const port = process.env.PORT || 5000 
ConnectDb()
app.use('/api/auth',auth)
app.use('/api/Product',Product)
app.use('/api/Admin',Admin)

if(process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
app.listen(port , (error)=>{
    error ? 
    console.log(error)
    :console.log('the server is runnig on port' ,port)
})