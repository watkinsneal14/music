// 后台主入口文件
'use strict';
// 引入配置文件，方便修改ip和端口
const config=require("./config.json");
// 引入express框架
const express=require("express");
// 引入路由模块
const musicRouter=require("./router/musicRouter.js");
// 引入body处理模块
var bodyParser = require('body-parser');
// 生成服务器实例
let app=express();
// 设置渲染模板引擎
app.set("views","./views");//("模板"，"模板路径")
app.set("view engine","ejs");//("模板引擎"，"名字")

// 设置静态资源目录,即如果访问以第一个参数开头则是访问静态资源，允许访问
app.use("/node_modules",express.static("node_modules"));
app.use("/files",express.static("files"));
app.use(bodyParser.urlencoded({ extended: true }));

// 使用路由中间件,进行路由处理
app.use(musicRouter);

// 使用错误处理中间件进行异常处理
app.use((err,req,res,next)=>{
	console.log("服务端错误",err.stack);
	next();//经过该中间件后程序继续执行

});

app.listen(config.port,config.hostname,()=>{
	console.log("server is running in 8000");
});