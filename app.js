const express = require('express');
const app =  express();
const ejs = require('ejs');
require('./db/conn');


const port = process.env.PORT || 8000;
app.set('view engine','ejs');
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
const router = require('./routes/router')

app.use(router)

app.listen(port);

