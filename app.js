const express = require('express');
const app =  express();
const ejs = require('ejs');
require('./db/conn');
const fs = require('fs');

// const jwt = require('jsonwebtoken');

//  async function createToken(){
//     const jwtsecret=    jwt.sign({_id:"670be00901c36e488bdd7190"}, "ashusahmynameisashutoshsahkumarshah", {
//         expiresIn:"10 second "
//     });
//      console.log(jwtsecret);

//      const userVer = await jwt.verify(jwtsecret, 'ashusahmynameisashutoshsahkumarshah');
//      console.log(userVer);
//  } 

//  createToken();

const port = process.env.PORT || 8000;
app.set('view engine','ejs');
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
const router = require('./routes/router')

app.use(router)

app.listen(port);

