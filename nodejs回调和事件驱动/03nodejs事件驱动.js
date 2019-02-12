var fs = require('fs');

var events = require('events');

var EventEmitter = new events.EventEmitter();

EventEmitter.on('okkkk',function (e) {
    console.log('ok==='+e);
})

// EventEmitter.on('to_parent',function (e) {
//     console.log('接收到了--->'+e);
// })
//
// setTimeout(function () {
//     EventEmitter.emit('to_parent','😆数据😝');
// },2000);

function getInfo() {
    fs.readFile('./mine.js',function (err,data) {
        EventEmitter.emit('okkkk',data.toString());
    })
}
getInfo();