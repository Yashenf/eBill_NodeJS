const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.SERVER_PORT;

//npm i express
//npm i nodemon
//npm i dotenv
//npm i body-parser
// npm i mongoose

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//==========================
const customerRoute = require('./route/CustomerRoute');
//==========================
mongoose.connect('mongodb://localhost:27017/ebill').then(()=>{
    app.listen(port,()=>{
        console.log(`server is up and running on port no ${port}`);
    });
}).catch(err=>{
    console.log(err);
});


app.post('/',(req,res)=>{
    console.log(req.body);
    res.end('success');
});

//======================
app.use('/aip/v1/customer',customerRoute);
//======================