var http = require('http');
var url = require('url');
// var mymodule = require('./mymodule');
/*
http.createServer(function(request, response){
    let todayDate = mymodule.myDate();
    let additionResult = mymodule.addition(10,20);
    let name = 'Javscript';
    response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end('<h1>Hello World test!'+additionResult+'</h1>');
    response.write("Hello "+name+"");
    response.end(`Hello ${name}`);
}).listen(1234); */

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    let formData = url.parse(request.url,true).query;
    console.log("request",formData);
    response.write(`<h2>Name ${formData.name}</h2>`);
    response.write(`<h2>Mobile ${formData.mobile}</h2>`);
    response.write(`<h2>DOB ${formData.dob}</h2>`);
    response.end();
}).listen(1234);