// 定义控制层
// 需要使用model层的一些操作方法，所以先引入model层
"use strict"

const musicModel = require("../model/musicModel.js");
const url = require("url");
// 显示首页
exports.showIndex = function(req, res, next) {
	let musicList = musicModel.getMusicList();
	res.render("index.ejs", {
		musicList: musicList
	});
};

// 显示添加页
exports.showAddPage = function(req, res, next) {
	res.render("addPage.ejs");
};

// 添加歌曲的处理
exports.addMusic = function(req, res, next) {
	// 获取得到的数据，将该数据增加到数据库中
	// console.log(req.body);
	// 判断id是否已存在，如果存在则不添加，并msg信息为已存在，添加失败

	// console.log(musicModel.has(req.body));
	let msg = "该歌曲已存在，添加失败";
	if (!musicModel.has(req.body)) {
		musicModel.addMusic(req.body);
		msg = "添加成功";
	}
	// 给客户端回应
	res.render("notice.ejs", {
		title: "添加页",
		msg: msg
	});
};

// 显示编辑页
exports.editPage = function(req, res, next) {
	// 得到某个元素	 
	let music = musicModel.getMusic(req.params.id);
	// 渲染页面给客户端回应
	res.render("editpage.ejs", {
		music: music
	});
};

// 编辑音乐的处理
exports.editMusic=function(req,res,next){
	// console.log(req.body);//以获取前台传来的修改后的music
	musicModel.changeMusic(req.body);

	// 渲染notice页面给客户端回应
	res.render("notice.ejs",{title:"编辑页",msg:"保存成功"});

};

// 删除音乐的处理
exports.delMusic=function(req,res,next){
	musicModel.delMusic(req.params.id);
	// 渲染主页给客户端，也可渲染通知页给客户端
	let musicList = musicModel.getMusicList();
	res.render("index.ejs",{
		musicList: musicList
	});
};