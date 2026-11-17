function themedIcon() {
    let x = document.createElement("link")
    x.rel = "shortcut icon"
    darkMatches = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    let link = ""
    darkMatches ? link = "./assets/images/1.png" : link = "./assets/images/0.png"
    x.href = link
    document.head.append(x)
}

themedIcon()

function makeSound() {
    i = Math.floor(Math.random() * 10)
    if (i > 0.5) {
        sound = new Audio("/assets/sound/page.ogg")
    } else {
        sound = new Audio("/assets/sound/page_2.ogg")
    }
    return sound
}

function openMenu() {
    document.getElementById("textbox").classList.toggle("opened")
    s = makeSound()
    s.play()
}