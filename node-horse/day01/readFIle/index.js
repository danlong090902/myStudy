
// fs 是file-system的简写，就是文件系统的意思

// 使用require方法加载fs核心模块
var fs = require('fs');

// 读取文件

fs.readFile('./index.txt',function (err,data) {
    console.log(data,err);
    console.log(data.toString())
});