var endFlipFoxkeh = function(){
//endFlipFoxkehという変数はどういう関数なのかを宣言
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehという変数はslidein-foxkehの下にあるimgであることを宣言
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
//flip終了後にflipしたfoxkehを削除
//イベント名：animationend、animationEvent
	foxkeh.setAttribute("class", "");
//foxkehのclass属性を何もない値に変更（元に戻す）
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
//endSlideinFoxkehAndStartFlipFoxkehという変数がどういう関数なのかを宣言
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
//slidein終了後にslideinしたfoxkehを削除
//イベント名：animationend
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
//flipしたfoxkehを削除するendFlipFoxkehを登録
//endFlipFoxkehは一つ上で定義されている
//イベント名：animationend、AnimationEvent
	foxkeh.setAttribute("class", "flip");
//foxkehのclass属性をCSSで定義したflipに変更する（回るようにする）
};

var startSlideinFoxkeh = function(){
//startSlideinFoxkehという変数はどういう関数なのかを宣言
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");
//foxkehのclass属性をCSSで定義したslideinに変更する（右から左にスライドするようにする）
	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};
//slideinが終了したらendSlideinFoxkehAndStartFlipFoxkehを開始する。
//endSlideinFoxkehAndStartFlipFoxkehは一つ上で定義されている。
//イベント名：animationend、animationEvent

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
//slideinFoxkehButtonという変数はslidein-foxkehの下にあるボタンであることを宣言
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//slidein-foxkehの下にあるbuttonをclickをされたらstartSlideinFoxkehを開始する
//startSlideinFoxkehは一つ上で定義されている
//イベント名：click、MouseEvent
