window.onscroll=function(){myFunction()};

var navbar=document.getElementById("navba");

var sticky=navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}
function bMenu() {
    var x = document.getElementById("navba");
    if (x.className === "nav-bar") {
      x.className += "responsive";
    } else {
      x.className = "nav-bar";
    }
  }