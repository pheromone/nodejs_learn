var http = require('http');
var router = require('./model/router');
http.createServer(function (req,res) {
    router.statics(req,res,'static');
}).listen(8000);