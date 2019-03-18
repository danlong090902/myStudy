var fn_hello = async (ctx,next) => {
    var name = ctx.params.name;

    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};
var fn_index  = async (ctx,next) => {
    ctx.response.body = `<h1>Index</h1>`;
};
module.exports = {
    'GET /hello/:name': fn_hello,
    'GET /': fn_index
};