// test
// process.nextTick()将在下一轮事件循环中使用

process.nextTick(function(){
    console.log(222)
});
console.log(111);

process.on('exit',function(code){
    console.log('about to exit with code'+code);
});