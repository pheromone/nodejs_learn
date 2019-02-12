var fs = require('fs');

// console.log('1')
// fs.readFile('./mine.js',function (err,data) {
//     console.log(data);
//     console.log('2')
//
// })
//
// console.log('3')

console.log('1');
function getInfo() {
    fs.readFile('./mine.js',function (err,data) {
       // console.log(data);
        console.log('2');
        return data.toString();
    })
}
console.log('3');

console.log(getInfo());