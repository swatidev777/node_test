var http=require('http');

var server =http.createServer((req,res)=>{

console.log(req);




});

server.listen(5000);