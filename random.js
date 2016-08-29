var imgContainer = document.getElementById("img_container");
var img = document.getElementById("img");

document.addEventListener("click",function() {
  var randomNum = Math.random();
  if (Math.round(randomNum) > .5) {
    img.src = "img/left_arrow.gif";
  } else {
    img.src = "img/right_arrow.png";
  }
  imgContainer.appendChild(img);
});