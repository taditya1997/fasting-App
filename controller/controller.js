const User = require('../model/model.js');
const jwt = require('jsonwebtoken');
const { create } = require('../model/model.js');


const maxAge=3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},process.env.MY_SECRET_TOKEN,{
        expiresIn:maxAge
    })
}


const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {name:'', email: '', password: '' };
  
    
    

    //incorrect email
    if(err.message=='incorrect email')
    {
        error.email="Incorrect Email"
    }
    //incorrect password
if(err.message=='incorrect password')
{
    error.password='Incorrect Password'
}

    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
       console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

exports.signupPost =  async(req,res)=>{
   // const {email,password}= req.body;
    try{
        const user= await User.create(req.body);
        const token=createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
        
        //console.log(user);
        return res.status(201).json({user:user._id});
       

    }
    catch(err)
    {
        const error= handleErrors(err);
        console.log(error);
        res.status(400).send({error});
    }

}
exports.loginPost= async(req,res)=>
{
    const {email,password}=req.body;

    try{
        const user=await User.login(email,password);
        const token=createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})

        res.status(200).json({ user:user});

    }catch(err)
    {
        const error=handleErrors(err);
        res.status(400).json({error});
    }


}