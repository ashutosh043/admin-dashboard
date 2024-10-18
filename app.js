const express = require('express');
const app =  express();
const ejs = require('ejs');
require('./db/conn');
const fs = require('fs');



const port = process.env.PORT || 8000;
app.set('view engine','ejs');
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
const router = require('./routes/router')

app.use(router)


fs.readFile('input.txt', (data, er)=>{
      if(data) return console.log(data);
      console.log(er.toString());
})

let i = 1;
while (i <=5) {
  console.log("The number is " + i);
  i++;
}
 
app.listen(port);

