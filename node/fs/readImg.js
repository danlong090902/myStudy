'use strict';

var fs = require('fs');

var text = '';
var buffer;

fs.readFile('example.png',function (err,data) {
    if (err) {
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + ' bytes');
        text = data.toString('utf-8');
        buffer = Buffer.from(text,'utf-8');
    }
});
process.on('exit',function(params) {
    console.log(buffer);
})