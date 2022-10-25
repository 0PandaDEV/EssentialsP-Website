var image = document.images[0]
var bigImage = document.createElement("img")
bigImage.onload = function() {
  image.src = this.src
}
setTimeout(function() {
  bigImage.src = "assets/home image.jpg";
}, 50)
