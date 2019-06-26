'use strict' //是因为我们总是以严格模式运行JavaScript代码，避免各种潜在陷阱。

var s = 'hello';

function greet(name) {
    console.log(s+''+name+'!');
}

module.exports = greet;