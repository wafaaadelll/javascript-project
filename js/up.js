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