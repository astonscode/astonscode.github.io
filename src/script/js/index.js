function themedIcon() {
    let x = document.createElement("link")
    x.rel = "shortcut icon"
    darkMatches = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    let link = ""
    darkMatches ? link = "./assets/images/0.png" : link = "./assets/images/1.png"
    x.href = link
    document.head.append(x)
}

themedIcon()