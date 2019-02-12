var foo=require('foo'); // node_modules目录下
var bar = require('bar/bar');  // node_modules 下 bar文件夹
var nav = require('nav'); // node_modules 下 nav文件夹下 有package.json配置

// nodeJS 如果在本地目录下没有的话,会在node_modules文件夹下寻找
console.log(foo.str);
console.log(bar.str);
console.log(nav.str);