var fs = require('fs');

// 流的方式读取文件 适合大文件

var readStream = fs.createReadStream('input.txt');
var str=''; // 保存数据
readStream.on('data',function (chunk) {
    str+=chunk;
});

//读取完成
readStream.on('end',function (chunk) {
    console.log(str);
});
//读取失败
readStream.on('error',function (err) {
    console.log(err);
});

// 流的方式写入文件 适合大文件

var data = '保存我保存我保存我保存我保存我' +
    '保存我保存我保存我保存我保存我保存我保存我 ' +
    '😆\n😆\n👌';
var writeStream = fs.createWriteStream('output.txt');

for (var i = 0;i< 100;i++){
    writeStream.write(data,'utf-8');
}

// 标记写入完成
writeStream.end();


//写入完成
writeStream.on('finish',function (chunk) {
    console.log('写入ok');
});
//写入失败
writeStream.on('error',function (err) {
    console.log(err);
});
