var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
exports.statics=function (req,res,staticpath) {
        var pathname = url.parse(req.url).pathname;
        if (pathname === '/') {
            pathname = '/index.html'; // 默认加载首页(http://localhost:8003)
        }
        if (pathname !== '/favicon.ico') {  // 过滤/favicon.ico
            console.log(pathname);
            var extname = path.extname(pathname); //  获取后缀名
            //    文件操作:读取static中的文件
            fs.readFile(staticpath+'/html' + pathname, function (err, result) {
                if (err) {  // 没有改文件
                    console.log('404 显示404.html');
                    fs.readFile(staticpath + '/html/404.html', function (err,data404) {
                        res.writeHead(404, {"Content-Type": "text/html;charset='utf-8'"});
                        res.write(data404);
                        res.end();
                    });
                } else {
                    getFe(extname,function (mime) {
                        res.writeHead(200, {"Content-Type":""+mime+";charset='utf-8'"});
                        res.write(result);
                        res.end();
                    });
                }
            });

        }


};

// 返回后缀名
function getFe(extname,callback){
    //把读取数据改成同步
    var data=fs.readFileSync('./mine.json');
    //data.toString() 转换成json字符串
    var Mimes=JSON.parse(data.toString());  /*把json字符串转换成json对象*/
    var result = Mimes[extname] || 'text/html';
    callback(result);
}