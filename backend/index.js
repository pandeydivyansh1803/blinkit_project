const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = "abcd1234";
const user = require('./dbSchemas/user')
const cors = require("cors")


app.use(express.json());
app.use(cors())

// connect db
mongoose.connect("mongodb+srv://pandeydivyansh1803:yashpandey162@cluster0.yzxx59c.mongodb.net/blinkit_project").then(()=>{
    console.log('db connected')
})
.catch((e)=>{
    console.log('db is not connected')
})


// implementing backend for signup route
app.post('/signup',async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const exists = await user.findOne({name,email})

    if(exists){
        res.status(400).json({"success":false})
    }
    else{
        await user.createOne({
            name,
            email,
            passowrd
        })

        res.status(200).json({'success':true});
    }
})


app.post('/login',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const exists = user.findOne({name,email,password})
    if(exists){
        const token = jwt.sign({name,email},jwtPassword);
        res.status(200).json({"token":token
        ,"success":true});
    }
    else{
        res.status(400).json({"success":false})
    }
})





app.listen(3000,()=>{
    console.log('server running on port 3000');
})