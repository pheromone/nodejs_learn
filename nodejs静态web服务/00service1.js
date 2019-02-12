var http =  require('http');
var fs =  require('fs');

http.createServer(function (req,res) {
   var  pathname = req.url;
    if(pathname == '/'){
        pathname = '/index.html'; // 默认加载首页(http://localhost:8003)
    }
    if(pathname != '/favicon.ico'){  // 过滤/favicon.ico
    //    文件操作:读取static中的文件
        fs.readFile('static/html'+pathname,function (err,result) {
            console.log(result);
           if(err){  // 没有改文件
               console.log('404');
               return;
           } else {
               res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
               res.write(result);
               res.end();
           }
        });

    }

}).listen(8003);