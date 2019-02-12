var http = require('http');
var url  =  require('url');
var router = require('./model/router');
http.createServer(function (req,res) {
   var pathname = url.parse(req.url).pathname;
   if(pathname == '/login'){
    res.end('login');
   } else if(pathname == '/register'){
    res.end('register');
   }else{
    router.statics(req,res,'static');
   }

}).listen(8000);