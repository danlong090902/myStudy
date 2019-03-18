var fs = require('fs');

/**
 * 根据传入的js文件，导出各个模块根据导出字段进行查询
 * @param {*} router 
 * @param {*} mapping 
 */
function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}
/**
 * 在程序运行伊始读取controllers下的文件
 * @param {*} router 
 */
function addControllers(router,dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        console.log(f+'1111');
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`process controller: ${f}...`);
        //读取js文件中的导出项
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    });
}


module.exports = function(dir){
     // 导入某个文件夹名称
     let
     controllers_dir = dir || 'controllers',
     router = require('koa-router')();
 addControllers(router, controllers_dir);
 console.log(addControllers(router, controllers_dir)+'111');
 return router.routes();
}