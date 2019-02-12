var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');
var router = require('./model/router');
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    var pathname = url.parse(req.url).pathname;
    var method = req.method.toLowerCase(); 
    if (pathname == '/login') {
        ejs.renderFile('views/form.ejs', {}, function (err, data) {
            res.end(data);
        });
        
    } else if (pathname == '/startlogin') {
        //执行登录程序
        if(method == 'get'){
           var param = url.parse(req.url,true).query;
           console.log(param);
           res.end('start login get :::::'+param.username+param.password);
        }else if(method == 'post'){
            var postStr='';
            req.on('data',function(chunk){
    
                postStr+=chunk;
            });
            req.on('end',function(err,chunk){
    
                //res.end(postStr);
                console.log(postStr);
    
                fs.appendFile('login.txt',postStr+'\n',function(err){
    
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log('写入数据成功');
                });
    
                res.end("<script>alert('login OK');history.back();</script>");
    
            });
    

        }

        
    } else {
        ejs.renderFile('views/index.ejs', {}, function (err, data) {
            res.end(data);
        });
    }

}).listen(8000);