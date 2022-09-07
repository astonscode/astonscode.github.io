function activateTheme(theme) {
    themeLink.setAttribute("href", `css/themes/${theme}.css`)
}

let themeLink = document.getElementById("themeLink");
let themeSelect = document.getElementById("themeSelector");
let iconDefault = document.querySelector(".default");
let iconLight = document.querySelector(".light");
let iconDecode = document.querySelector(".decode");
let iconKoawa = document.querySelector(".koawa");
let iconScorpion = document.querySelector(".scorpion");
let iconYann = document.querySelector(".yannmatrix");
let iconJosin = document.querySelector(".josin");

document.addEventListener("keydown", e => {
    if (
        e.key.toLowerCase() === "d" &&
        e.shiftKey
    ) {
        activateTheme("default");
        moveCheck(1);
    }

    if (
        e.key.toLowerCase() === "l" &&
        e.shiftKey
    ) {
        activateTheme("light");
        moveCheck(2);
    }

    if (
        e.key.toLowerCase() === "x" &&
        e.shiftKey
    ) {
        activateTheme("decode");
        moveCheck(3);
    }

    if (
        e.key.toLowerCase() === "k" &&
        e.shiftKey
    ) {
        activateTheme("koawa");
        moveCheck(4);
    }

    if (
        e.key.toLowerCase() === "s" &&
        e.shiftKey
    ) {
        activateTheme("scorpion");
        moveCheck(5);
    }

    if (
        e.key.toLowerCase() === "y" &&
        e.shiftKey
    ) {
        activateTheme("yannmatrix");
        moveCheck(6);
    }

    if (
        e.key.toLowerCase() === "j" &&
        e.shiftKey
    ) {
        activateTheme("josin");
        moveCheck(7);
    }
})