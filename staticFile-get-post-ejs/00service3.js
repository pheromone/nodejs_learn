var http = require('http');
var url = require('url');
var ejs = require('ejs');
var router = require('./model/router');
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/login') {
        var data = '后台数据';
        var list = [
            '111',
            '222',
            '3333'
        ];
        ejs.renderFile('views/login.ejs', {
            msg: data,
            list: list
        }, function (err, data) {
            res.end(data);
        });
    } else if (pathname == '/register') {
        var data1 = '注册';
        var h = '<h2>22222</h2>';
        ejs.renderFile('views/register.ejs', {
            msg: data1,
            h:h
        }, function (err, data) {
            res.end(data);
        });
    } else {
        router.statics(req, res, 'static');
    }

}).listen(8000);