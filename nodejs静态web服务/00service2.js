var http = require('http');
var fs = require('fs');
var path = require('path');
var getfe = require('./model/getfe');

http.createServer(function (req, res) {
    var pathname = req.url;
    if (pathname == '/') {
        pathname = '/index.html'; // 默认加载首页(http://localhost:8003)
    }
    if (pathname != '/favicon.ico') {  // 过滤/favicon.ico
        console.log(pathname);
        var extname = path.extname(pathname); //  获取后缀名
        //    文件操作:读取static中的文件
        fs.readFile('static/html' + pathname, function (err, result) {
            if (err) {  // 没有改文件
                console.log('404 显示404.html');
                fs.readFile('static/html/404.html', function (err,data404) {
                    res.writeHead(404, {"Content-Type": "text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end();
                });
            } else {
                var fe = getfe.getFe(extname); // 获取文件类型
                res.writeHead(200, {"Content-Type":""+fe+";charset='utf-8'"});
                res.write(result);
                res.end();
            }
        });

    }

}).listen(8003);