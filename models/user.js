const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt =require('bcryptjs')
const userSchema =  new mongoose.Schema({
        firstname:{
            type:String,
            required:true,
            trim:true

        },

        lastname:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate(val){
                if(! validator.isEmail(val)){
                    throw new Error("Email is not Valid") 
                }
            }
        },
        gender:{
            type:String,
            requried:true
        },
        dob:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
            min:9
        },
        pincode:{
            type:Number,
            required:true,
            min:6
        },
        password:{
          type:String,
          required:true  
        },
        cnfpassword:{
         type:String,
         required:true
        },
        address:{
            type:String,
            required:true,
            max:120
        },
        active:{
            type:String,
            default:true,
            required:true

        }
});


userSchema.pre('save', async function(next){

    if(this.isModified('password')){
        this.password =  await bcrypt.hash(this.password, 12);
        this.cnfpassword=undefined;
        next();
    }

    
})


const userModel =new  mongoose.model('userData', userSchema);



module.exports = userModel;