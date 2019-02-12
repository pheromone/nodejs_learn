// 1. 引入http模块
var http=require('http');
// 2.用http模块创建服务
/**
 * req 获取url信息
 * res 浏览器返回响应信息
 * */
http.createServer(function (req,res) {
// 发送http头部
// HTTP 状态值 200 OK
//    设置HTTP头部,状态码是200,文件类型是html,字符集是utf8
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write('你好 nodeJS');
    res.write('第一次接触后端');
    res.end(); // 结束响应



}).listen(8001);