var imgContainer = document.getElementById("img_container");
var img = document.getElementById("img");

document.addEventListener("click",function() {
  var zeroOrOne = Math.round(Math.random());
  if (zeroOrOne === 1) {
    img.src = "img/left_arrow.gif";
  } else {
    img.src = "img/right_arrow.png";
  }
  imgContainer.appendChild(img);
});