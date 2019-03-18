'use strict';

var path = require('path');

// 解析当前目录

var workDir = path.resolve('.');
console.log(workDir);


// 组合完整扥文件路径 当前目录+pub+index.html;

var filePath = path.join(workDir,'pub','index.html');