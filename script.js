// var li = document.getElementByTagName("li")[0];
// console.log(li);

var css = document.querySelector("h3");
var color1 = document.querySelector(".firstColor");
var color2 = document.querySelector(".secondColor");
var body = document.getElementById("body-wrapper");

console.log(body);
// body.style.background = "red";
body.style.background = "linear-gradient(to right, white, yellow);"
// body.style.background = "linear-gradient(to right, green, blue);"

function bodyChange(){
	body.style.background = 
	"linear-gradient(to right, " 
	+color1.value 
	+", " 
	+color2.value 
	+")";
	
	css.textContent = body.style.background+";";
	
}

color1.addEventListener('input',bodyChange);

color2.addEventListener('input',bodyChange);

