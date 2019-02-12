var http=require('http');
var config = require('./config');

var app = http.createServer(function (ree,res) {
    console.log(config.str);

    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write('你好!');
    res.end();
});
app.listen(8002,'127.0.0.1');

/**
 * 自启动工具 supervisor
 *  npm install -g supervisor
 *  supervisor XXX.js
 * */