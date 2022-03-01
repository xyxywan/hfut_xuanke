function checkidNum(idNum){
	var idlist="XXXXXXX";
	return idlist.search(String(idNum));
}
function checkupdate(thisversion){
	var lastversion=117;
	if(thisversion<lastversion){
		var b=confirm("有新版本可用，是否更新？");
		if(b==true){
			window.open("https://xyxywan.gitee.io/hfut_xuanke/qiangke.user.js");
		}
	}else if(thisversion==lastversion){
		console.log('%c 已经是最新版本','background:#ffffff;color:#ffaa00;font-size:20px;');
	}else{
		alert("当前版本:"+thisversion+ "\n 服务器最新版本:"+lastversion);
		console.log('%c 检查更新出错','background:#ffffff;color:#ffaa00;font-size:20px;');
	}
}
function checkTestState(){
    	var b=confirm("此版本已经失效，请更新至最新版本");
		if(b==true){
			window.open("https://xyxywan.github.io/hfut_xuanke/update.js");
		}
	return 0;
}
