function updateIcon() {
    let x = document.createElement("link")
    x.rel = "shortcut icon"
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        x.href = "./assets/images/0.png"
    } else {
        x.href = "./assets/images/1.png"
    }
    document.head.append(x)
}

updateIcon()


var i = 0;
var txt = ``
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.querySelectorAll(".window")[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()