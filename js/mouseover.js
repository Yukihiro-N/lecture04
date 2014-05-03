var mouseoverFoxkeh = function(){
	var foxkeh = document.querySelector("#mouseover-foxkeh img");
	foxkeh.setAttribute("class", "mouseover");
};

var mouseoverFoxkehButton = document.querySelector("#mouseover-foxkeh button");
mouseoverFoxkehButton.addEventListener("mouseover", mouseoverFoxkeh);