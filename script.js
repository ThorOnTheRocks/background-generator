var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var btn = document.querySelector("button");









color1.value = "#ff0000";
color2.value = "#0000ff";



function setGradient(){

body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    
    var hexColor = "#";
    for(var i=0; i<6; i++){
        hexColor += Math.floor(Math.random() * 16).toString(16);
       
    }
  return hexColor;

}

function getRandomColors(){
   color1.value=generateRandomColor();
   color2.value=generateRandomColor();
   body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

   css.textContent = body.style.background + ";"
   
}



setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", getRandomColors);
slider.oninput = function() {
  
  output.textContent = this.value;
}