'use strict';


var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir'+root);

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
    var
        pathname = url.parse(request.url).pathname, // '/static/bootstrap.css'
        filepath = path.join(root, pathname); // '/srv/www/static/bootstrap.css'
    fs.stat(filepath, function (err, stats) {
        console.log(err)
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');