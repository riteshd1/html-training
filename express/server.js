const express = require('express');
const path = require('path');
const app = express();
const port = 1234;

app.get('/',(req,res)=>{
    // res.send("hello world");
    res.sendFile(path.join(__dirname, '/myhtml.html'));
});

app.listen(port);