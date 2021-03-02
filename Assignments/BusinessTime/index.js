// Soil Calculator

//Things to note:
//pH 0-7 is acidic
//7-14 is basic
// 7 is neutral
function sampleFunction() {
    var user = prompt("What pH level is your soil?");
    if (user <= 8) {
    document.getElementById("Soilcalculator").innerHTML =
    "You can plant - vegetables, flowers or fruits";
    }
    else {
    document.getElementById("Soilcalculator").innerHTML =
    "Your soil is to acidic 🤮";
    }
   }


function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("onsoil")) {
      image.src="offsoil.jpg";
    } else {
      image.src = "onsoil.jpg";
    }
  }