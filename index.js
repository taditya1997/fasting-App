const express= require('express');
const dotenv=require('dotenv');
const connectDb = require('./config/db');
const router=require('./routes/routes');
const cookieParser=require('cookie-parser');
const app=express();

const path = require('path');

dotenv.config({path:'./config/config.env'});

app.use(express.json());
connectDb();

const PORT = process.env.PORT||5000;
app.use(router);
app.use(cookieParser());
app.use(express.static('client/build'));
app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
app.listen(PORT,console.log(`Server Running on port ${process.env.PORT}` ));