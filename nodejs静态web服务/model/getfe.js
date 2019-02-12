// 返回后缀名
exports.getFe=function (extname) {
   switch (extname) {
       case '.html':
           return 'text/html'
       case '.css':
           return 'text/css'
       case '.js':
           return 'text/javascript'
       default:
           return 'text/html'
   }
}