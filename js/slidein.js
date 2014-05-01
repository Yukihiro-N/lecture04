var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein");
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", slideinFoxkeh);

var mouseoverFoxkeh = function(){
	var foxkeh = document.querySelector("#mouseover-foxkeh img");
	foxkeh.setAttribute("class", "mouseover");
};

var mouseoverFoxkehButton = document.querySelector("#mouseover-foxkeh button");
mouseoverFoxkehButton.addEventListener("mouseover", mouseoverFoxkeh);
=======
	foxkeh.setAttribute("class", "");
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
>>>>>>> origin/make_slidein_retriable
