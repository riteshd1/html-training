var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
        
    fs.readFile('./welcome1.html',function(err,data){
        if(err){
        fs.writeFile('mynewfile3.txt', "File not found!", function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        }else{
         res.write(data);
        }
        res.end();
    })
    
}).listen(1234);