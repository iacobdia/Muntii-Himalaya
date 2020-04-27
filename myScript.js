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
function changeImage()
{
    var img = document.getElementById("img");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 100, true);
    setTimeout("changeImage()", 3000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}
var images = [],
x = 0;

images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";
images[3] = "image4.jpg";
 setTimeout("changeImage()", 3000); 

 function numarValid() {
    var x, text;

    x = document.getElementById("numb").value;

    
    if ( x.length !== 12) {
        text = "Numarul nu este corect!";
    } else {
        text = "Numarul este corect!";
    }
    document.getElementById("rezultatNumar").innerHTML = text;
}
 function emailValid() {
    var x, text;

    x = document.getElementById("numb1").value;

    
    if (  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x) ) {
        text = "Email corect!";  
    } else {
        text = "Email gresit!";
    }
    document.getElementById("rezultatEmail").innerHTML = text;
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