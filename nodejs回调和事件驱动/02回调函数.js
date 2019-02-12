var fs = require('fs');

console.log('1');
function getInfo(callback) {
    fs.readFile('./mine.js',function (err,data) {
        // console.log(data);
        console.log('2');
        return callback(data.toString());
    })
}
console.log('3');

getInfo(function (e) {
    console.log(e);
})