



// 先导入fs模块，然后用readdirSync列出文件
// 这里可以用sync是因为启动时只运行一次，不存在性能问题:var files = fs.readdirSync(__dirname+'/controllers');
// var files = fs.readdirSync(__dirname + '/controllers');

// // 过滤js文件
// var js_files = files.filter( e => {
//     return e.endWith('.js');
// });


// // 处理每个js文件

// for(let i in js_files){
//     console.log(`process controller ${i}...`);

//     // 导入js文件

//     let mapping = require(__dirname+'/controllers/'+f);
//     for(let url in mapping){
//         if (url.startsWith('GET')) {
//              // 如果url类似于 GET xxx
//          var path  =url.substring(4);
//          router.get(path),mapping[url];
//          console.log(`register URL mapping: GET ${path}`);


//         } else if(url.startsWith('POST')) {

//             // 如果url类似于 POST xxx
//             var path = url.substring(5);
//             router.post(path,mapping[url]);
//         }else{
//             // 无效的URL:
//             console.log(`invalid URL: ${url}`);
//         };

         
//     }
// }

const Koa = require('koa');

const controller = require('./controller');


const app = new Koa();
const bodyParser  = require('koa-bodyparser');






// add post bodyParser

app.use(bodyParser());

// add router middleware

app.use(controller());



app.listen(3000);
console.log('app started at port 3000');

