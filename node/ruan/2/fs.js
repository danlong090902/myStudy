'use strict'

var fs = require('fs');

fs.readFile('sample.txt','utf-8',function (err,data) {
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
})
fs.readFile('sample.jpg',function (err,data) {
    if (err){
        console.log(err)
    } else {
        console.log(data.length+'bytes')
    }
})

//异步
var data = fs.readFileSync('sample.txt','utf-8');

console.log(data)

// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：

try{
    var data = fs.readFileSync('sample.txt','utf-8');
    console.log(data)
}catch (err) {
    console.log(err)
}


//写文件

var data = 'hello Nodejs';

fs.writeFile('output.txt',data,function (err) {
    if (err){
        console.log(err)
    }else {
        console.log('ok')
    }
});

fs.writeFileSync('output.txt',data);


// stat

fs.stat('sample.txt',function (err,stat) {
    if (err){
    console.log(err)
    } else {
        // 是否是文件
        console.log('is File'+stat.isFile());
        // 是否是目录
        console.log('isDirectory'+stat.isDirectory());

        if (stat.isFile()){
            // 文件大小
            console.log('size'+stat.size);
            // 创建时间 Date对象
            console.log('birth time'+stat.birthtime);
            // 修改时间 Date对象
            console.log('modified time'+stat.mtime);
        }
    }
})