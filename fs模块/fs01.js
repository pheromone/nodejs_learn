/**
 * fs.stat 检测是文件还是目录
 * fs.mkdir 创建目录
 * fs.writeFile 创建写入文件
 * fs.appendFile 追加文件
 * fs.readFile 读取文件
 * fs.readdir 读取目录
 * fs.rename 重命名
 * fs.rmdir 删除目录
 * fs.unlink 删除文件
 * */
var fs = require('fs');
// fs.stat 检测是文件还是目录
fs.stat('./fs01.js',function (err,stats) {
    if(err){
        console.log(err);
        return false;
    }else {
        // 输出true false
        console.log('文件',stats.isFile());
        console.log('目录',stats.isDirectory());
    }
});
//fs.mkdir 创建目录
fs.mkdir('./html',function (err) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('创建目录成功');
    }

});
//fs.writeFile 创建写入文件
// 未存在,新建写入,存在直接覆盖
fs.writeFile('./html/ReadME.md','你好,Nodejs',function (err) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('写入成功');
    }
});
//fs.appendFile 追加文件 or 追加内容
fs.appendFile('./html/ReadME.md','追加的内容',function (err) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('追加成功');
    }
});
//fs.readFile 读取文件
fs.readFile('./html/ReadME.md',function (err,data) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('读取文件:',data.toString());
    }
});
//fs.readdir 读取目录 会获取文件夹,文件
fs.readdir('./',function (err,data) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('读取成功',data);
    }
});
//fs.rename 重命名 or 剪切文件
fs.rename('./html/ReadME.md','./html/ReadME0.md',function (err) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('重命名成功');
    }
});
// fs.rmdir 只能删除目录
fs.rmdir('./css',function (err) {

    if(err){
        console.log(err);
        return false;
    }else {
        console.log('删除目录成功');
    }
});
// fs.unlink 删除文件
fs.unlink('./1.txt',function (err) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('删除文件成功');
    }
});


//例子
// 判断服务器上有没有upload目录,没有则创建一个
fs.stat('./upload',function (err,stats) {
    if(err){
        // 没有改目录
        // 开始创建
        fs.mkdir('./upload',function (err) {
            if(err){
                console.log(err);
                return false;
            }else {
                console.log('创建upload目录成功');
                // ... 开始上传
            }
        });
    }else {
        console.log('upload目录目录存在');
        // ... 开始上传
    }
});
var filesArr = [];
//找到XXX文件夹下的所有目录 第一层
fs.readdir('./html',function (err,data) {
    if(err){
        console.log(err);
        return false;
    }else {
        console.log('读取成功:::',data);
        (function getFile(i) {
            if(i == data.length){
                 //循环结束
                console.log('目录:');
                console.log(filesArr);
                return false;
            }
            fs.stat('html/'+data[i],function (error,stats) {
                if(stats.isDirectory()){
                    // 是目录
                    filesArr.push(data[i]);
                }
                getFile(i+1);
            });


        })(0);

    }
});