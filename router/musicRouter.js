// 引入express模块
const express=require("express");

// 路由处理需要使用控制层的命令，所以要引入控制层
const controller=require("../controller/musicController.js");

// 生成路由器对象
const router=express.Router();

// 处理路由

// 展示首页的两种情况
router.get("/",(req,res,next)=>{
	controller.showIndex(req,res,next);
});

router.get("/index.html",(req,res,next)=>{
	controller.showIndex(req,res,next);	
});

// 加载添加页面
router.get("/addPage",(req,res,next)=>{
	controller.showAddPage(req,res,next);
});

// 保存按钮后，添加音乐
router.post("/addMusic",(req,res,next)=>{
	controller.addMusic(req,res,next);
});

// 加载编辑页面
router.get("/editpage/:id",(req,res,next)=>{
	controller.editPage(req,res,next);
});

// 提交编辑后
router.post("/editMusic",(req,res,next)=>{
	controller.editMusic(req,res,next);
})

// 删除
router.get("/del/:id",(req,res,next)=>{
	controller.delMusic(req,res,next);
});








// 路由处理结束

// 向外暴露路由器对象
module.exports=router;
