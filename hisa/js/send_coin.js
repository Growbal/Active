//html内の要素を読み込む
var yesBtn = document.querySelector('#yes');
var noBtn = document.querySelector('#no');
var coinbox = document.querySelector('#coinbox');

yesBtn.onclick = function(){
    if(coinbox.value == ""){
        alert('送金額を入力してください！');
    }
    else{
        if(window.confirm(coinbox.value + " pen-D 送金します。\nよろしいですか？")){
            console.log(coinbox.value + " pen-D 送金しました。");
        
        }else{
            alert("キャンセルしました。");
        }
    }
}

noBtn.onclick = function(){
    location.href = './index.html';
}