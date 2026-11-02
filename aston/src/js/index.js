// for each character in the string, run an animation that randomly changes the letter to a different katakana character 
// after a set amount of ms, set that character to their corresponding index of the string "aston"

const kataChar = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const stopTitle = "aston"

const title = document.querySelectorAll("#title h1")[0]

let titleObj = title.textContent.split('')

let frameid

function animate() {
    let n = performance.now()
    for (let i = 0; i < titleObj.length; i++) {
        if ((i * 1000) <= n) {
            titleObj[i] = stopTitle[i]
            continue
        }
        if (titleObj.join('') == "aston") {
            stop()
        }
        let r = Math.floor(Math.random() * kataChar.length)
        let randomKataChar = kataChar[r]
        titleObj[i] = randomKataChar
    }

    title.textContent = titleObj.join('')

    frameid = requestAnimationFrame(animate)
}

frameid = requestAnimationFrame(animate)

function stop() {
    if (frameid) {
        cancelAnimationFrame(frameid)
        frameid = undefined
    }
}

let s = "welcome"
let b = 5
for (let i = 0; i < s.length; i += b) {
    console.log(s.slice(i,i+b))
}