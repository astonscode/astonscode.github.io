const selectItems = Array.from(document.querySelector(`#select-bottom`).children)
let selectFunct = document.querySelector(`.select-funct`)

function textHover(id) {
    if (id == 0) {
        selectFunct.innerHTML = `Economics`
    } else if (id == 1) {
        selectFunct.innerHTML = `English`
    } else if (id == 2) {
        selectFunct.innerHTML = `Spanish`
    } else if (id == 3) {
        selectFunct.innerHTML = `Geometry`
    } else if (id == 4) {
        selectFunct.innerHTML = `World History`
    } else if (id == 5) {
        selectFunct.innerHTML = `Chemistry`
    } else {
        console.log(`Invalid ID used for (textHover) function.`)
    }
}

function changeActive(id) {
    if (id == 1) {
        document.getElementById(`selection`).classList.toggle(`active`)
    } else {
        console.log(`Good job. you fucked it up. `)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // This function should always be last
    console.log(`Content loaded.`)
})