const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
//const { TrustProductsEvaluationsContext } = require('twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations');
const UserSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    fastingData:{
        type:Array
    }
    

    
})
/*
defining fasting Data

[
   date:{
       starting-time:time,
       end-time:time,
       total-time:number
   }
]


*/
UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password,salt);
    next();

})

UserSchema.statics.login=async function(email,password){
    const user = await this.findOne({email});
    if(user)
    {
        const auth=await bcrypt.compare(password,user.password);
        if(auth)
        {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User= mongoose.model('user',UserSchema);
module.exports=User;