const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send("Welcome to my first dockerized app");
});

app.listen(2222, function(){
    console.log("App is running");
});