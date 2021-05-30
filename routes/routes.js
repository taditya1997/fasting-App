
const express=require('express');
const router=express.Router();
const {signupPost,loginPost}=require('../controller/controller.js');

router.get('/signup',(req,res)=>{
    res.status(200).send("ok");

})
router.post('/signup',signupPost);

router.post('/login',loginPost);


// route.get('/login',()=>{})

module.exports=router;


