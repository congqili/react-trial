const proxy =require("http-proxy-middleware")
module.exports=function(app){
    app.use(
        proxy('/api',{
            target:'https://mock.mengxuegu.com/mock/6164266f77457901818610bf',
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })
    )
};
