'use strict';

var fs = require('fs');

var data = 'hello,world';
var readData = require('./readImage');

var all = data + readData;

fs.writeFile('outPut.txt',all,function(err){
    if(err){
        console.log(err);
    }else {
        console.log('ok');
    }
});
