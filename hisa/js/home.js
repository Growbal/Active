// html内の要素を読み込む
var soukinBtn = document.querySelector("#soukin");
var torihikiBtn = document.querySelector("#torihiki");
var setteiBtn = document.querySelector("#settei");
var tuutiBtn = document.querySelector("#tuuti");

// 数値
var coinNum = document.querySelector("#coin")

// ボタンが押されたときに関数を実行する
soukinBtn.onclick = function(){
	GoLink(1);
}
torihikiBtn.onclick = function(){
	GoLink(2);
}
setteiBtn.onclick = function(){
	GoLink(3);
}
tuutiBtn.onclick = function(){
	GoLink(4);
}

// 数字に対応したページへ移動する関数
function GoLink(no){
	if(no == 1){
		href = "./send_list.html";
	}else if(no == 2){
		href = "./index.html";
	}else if(no == 3){
		href = "./settei.html";
	}else if(no == 4){
		href = "./notice.html";
	}else{
		console.log("どこにも遷移しません。");
	}
 	location.href = href;
}
