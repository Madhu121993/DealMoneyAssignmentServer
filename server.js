"use strict"

var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
var config = require('./config.json');
var app = express();

app.use(cors())
app.use(bodyparser.json({limit:'9gb',extended:true}));
app.use(bodyparser.urlencoded({limit:'9gb',extended:true}))

app.use('/api/upload',require('./controllers/file.controller'));
app.use('/api/download',require('./controllers/file.controller'));

app.get('/',(req,res)=>{
    res.send('footer')
})
app.get('/get',(req,res)=>{
    console.log("server")
    res.send("send")
})

const port = process.env.PORT || config.port;
app.listen(port);
console.log("Server listening on https://", port);
