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

var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 6
        })
      });

    