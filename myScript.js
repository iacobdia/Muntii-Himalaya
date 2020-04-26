function mOver(obj) {
    obj.innerHTML = "Himalaya Mountains"
}

function mOut(obj) {
    obj.innerHTML = "Muntii Himalaya"
}

function changeText(id) { 
    id.style.color = "rgb(0, 0, 77)";
}
var myVar = setInterval(function(){ setColor() }, 2000);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "rgb(26, 77, 255)" ? "rgb(35, 16, 203)" : "rgb(26, 77, 255)";
}
 
function stopColor() {
  clearInterval(myVar);
}
 

var i=0;
var lacuri = ["ORT Pangong", "Gurudogmar", "Tsongmo", "Tilicho"];
var text = "";
function lacNou() {

for ( ; i < lacuri.length; i++) {

    text += lacuri[i] + "<br>";
    break;

}
i++;
 document.getElementById("lacnou").innerHTML = text;
}