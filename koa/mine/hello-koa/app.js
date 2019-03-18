
// 导入koa, 和koa 1.x不同，在koa2中，我们导入的是一个class,因此用大写的Koa表示:

const Koa = require('koa');

// 创建一个Koa对象表示web app本身;

const app = new Koa();

// 对于任何请求，app将调用改异步函数处理请求;

// app.use(async(ctx,next) => {
//     await next();
//     // 设置response的content-Type;
//     ctx.response.type = 'text/html';
//     // 设置response的内容
//     ctx.response.body = '<h1>Hello,Koa2</h1>';
// })

app.use(async (ctx,next) => {
    // 打印url
    console.log(`${ctx.request.method}${ctx.request.url}`);
    // 调用下一个middlewaer(中间件)
    await next();
});
app.use(async(ctx,next) =>{
    //当前时间
    const start = new Date().getTime(); 
    // 调用下一个middleware
    await next();
    // 耗费时间
    const ms = new Date().getTime()-start;
    // 打印耗费时间
    console.log('耗费时间：'+ms);
});
app.use(async (ctx,next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,Koa2!</h1>'
} );
// middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。

// 此外，如果一个middleware没有调用await next()，会怎么办？答案是后续的middleware将不再执行了。这种情况也很常见，
// 例如，一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误：
// app.use(async (ctx,next) => {
//     if(await checkUserPermission(ctx)){
//         await next();
//     }else {
//         ctx.response.status = 403;
//     }
// })



// 在端口3000 监听;
app.listen(3000);
console.log('app started at port 3000');

// 其中，参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，next是koa传入的将要处理的下一个异步函数。

// 上面的异步函数中，我们首先用await next();处理下一个异步函数，然后，设置response的Content-Type和内容。

// 由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数，这两个关键字将在ES7中引入。




// 每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数。

// 我们可以对ctx操作，并设置返回内容。但是为什么要调用await next()？

// 原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。