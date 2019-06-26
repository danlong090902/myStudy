'use strict'

// process.nextTick()将在下一轮事件循环中调用:
var process = global.process;

process.nextTick(function () {
    console.log('next callback')
})
console.log('next was set');


// 程序即将退出时的回调函数:

process.on('exit',function (code) {
    console.log('about to exit code:'+code);
})