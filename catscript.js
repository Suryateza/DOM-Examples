function switchon() {
  document.getElementById("bulbimage").src =
    "https:d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catimage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switch").textContent = "switched on";
  document.getElementById("onbutton").style.backgroundColor = "green";
  document.getElementById("offbutton").style.backgroundColor = "grey";
}
function switchoff() {
  document.getElementById("bulbimage").src =
    "https:d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catimage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switch").textContent = "switched off";
  document.getElementById("offbutton").style.backgroundColor = "red";
  document.getElementById("onbutton").style.backgroundColor = "grey";
}
