var button = document.getElementsByClassName("add-to-cart");
for(var i=0 ; i<button.length ; i++){
    var clicks = 0;
    button[i].addEventListener("click",function () {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
    });
}

//---------------------------------------- 
var images = ['img/1.jpg','img/2.jpg','img/3.jpg'];
var index = 0;
var slider;
function play() {
  index++;
  if (index == images.length) {
      index = 0; 
  }
  document.getElementById('image').src = images[index];
  slider = setTimeout("play()", 2000);
}
play()
function go(n) {
  index += n;
  if (index == images.length) {
      index = 0;
  }
  if (index <0 ){
      index = images.length-1
  }
  document.getElementById('image').src = images[index];
}
//---------------------------------------
filterSelection("allpro")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "allpro") c = "";
  for (i = 0; i < x.length; i++) {
    removing(x[i], "show");
    if (x[i].className.indexOf(c) > -1) adding(x[i], "show");
  }
}

function adding(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removing(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("container");
var btns = btnContainer.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//---------------------------------------
let btn = document.getElementById("bt")
window.onscroll= function(){
  if(window.scrollY>=70){
    bt.style.display="block";
  }else{
    bt.style.display="none";
  }
}
bt.onclick = function(){
  window.scrollTo(0,0);
}