 const express = require("express")
 const mongoose = require("mongoose")
 const cors = require("cors")
 const UserModel = require('./models/User.js')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
 const cookieParser = require('cookie-parser')

 const app = express()
 app.use(express.json())
 app.use(cors({
    origin: ["http://localhost:5173"],
    method: ["GET","POST"],
    credentials : true
 }))
 app.use(cookieParser())

 mongoose.connect("mongodb+srv://mahamnaseemdurrani:9fWQqqBpn3leyNsx@cluster0.qhjfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//  mongodb+srv://mahamnaseemdurrani:E7i4oVNllXbBim9y@cluster0.k9t2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// 9fWQqqBpn3leyNsx
 const verifyUser = (req,res,next) => {
  const token = req.cookies.token;
  if(!token){
    return res.json("the token is not available")
  }else{
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) return res.json("Token is Wrong")
            next();
    })
  }
 }
 app.get("/home", verifyUser, (req , res)=>{
    return res.json("Success")
 })
 app.post('/login', (req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, (err,response)=>{
                if(response) {
                    const token = jwt.sign({email: user.email} , "jwt-secret-key" , {expiresIn:"1w"})
                    res.cookie("token", token); 
                    res.json("success")
                }else{
                    res.json("passward is incorrect")
                }
            })
        }else{
            res.json("user not exist")
        }
    })
 });

 app.post('/register' ,(req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash =>{
        UserModel.create({name,email, password: hash})
        .then(register =>res.json(register))
         .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
     
 }) 
 app.listen(4001, ()=>{
    console.log("server is running")
  })