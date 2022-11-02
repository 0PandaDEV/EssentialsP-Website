window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal-content");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 300;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}

DarkReader.disable();