const express = require('express');
const userModel = require('../models/user')
const router = express.Router();
const bcrypt =require('bcryptjs')


router.get('/result', async (req,res)=>{
     
   const  result = await userModel.find();
   res.send(result);
});

router.get('/', (req,res)=>{
    
    res.render('index');
});

router.get('/registration', (req,res)=>{
    res.render('registration');
});

router.get('/dashboard', (req,res)=>{
    res.render('dashboard');
});


router.post('/registration', async (req,res)=>{
  

   
        const firstname= req.body.firstname;
        const lastname = req.body.lastname;
        const email= req.body.email;
        const gender = req.body.gender;
        const dob = req.body.dob;
        const country= req.body.country;
        const phone= req.body.phone;
        const pincode = req.body.pincode;
        const password =req.body.password;
        const cnfpassword =req.body.password;
        const address = req.body.address;
        const active = req.body.active;

        const getData =await new userModel({
              firstname,
              lastname,
              email,
              gender,
              dob,
              country,
              phone,
              pincode,
              password,
              cnfpassword,
              address,
              active
        });


        getData.save();
        res.redirect('/');
    
});


router.post('/', async (req,res)=>{

    try{
        const  email = req.body.email;
        const password = req.body.password;
    
        const data = await  userModel.findOne({email:email});
  
         const  pasr= data.dob.split('-').reverse().join('/');
      
         const isMatch = await bcrypt.compare(password, data.password);
         console.log(isMatch);
        
        if(isMatch){
             res.render('dashboard', {data}, pasr);
             res.redirect('/dashboard');
        }else{
            res.send("Password not Matching")
        }
    }
    catch(error){
       res.send(error)
    }
    
    

})


module.exports =router;