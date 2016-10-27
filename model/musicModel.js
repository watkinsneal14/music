// model层，主要用来操作数据
// 所以先引入数据层，相当于链接数据库

"use strict"

const musicList=require("../database/musicList.json");
// 获取音乐列表
exports.getMusicList=function(){
	return musicList;
}

// 增加音乐
exports.addMusic=function(data){
	musicList.push(data);
}
// 判断该音乐是否存在
exports.has=function(data){
	return musicList.some(function(music){
		return music.id==data.id;
	});
}
// 获取音乐
exports.getMusic=function(id){
	// console.log(id);
	for (var i = 0; i < musicList.length; i++) {
		if(musicList[i].id==id){
			return musicList[i];
		}
	}
};

// 更换音乐
exports.changeMusic=function(newmusic){
	 // console.log(musicList);
	 musicList.forEach(function(music,index,musicList){
		if(music.id==newmusic.id){
			musicList[index]=newmusic;
		}
	 });
	
}
// 删除音乐
exports.delMusic=function(id){
	musicList.forEach(function(music,index,musicList){
		if(music.id==id){
			musicList.splice(index,1);
		}
	});

};