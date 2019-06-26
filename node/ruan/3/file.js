'use strict';

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');

// 解析当前目录

var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':

var filepath = path.join(workDir,'pub','index.html');

// '/Users/michael/pub/index.html'