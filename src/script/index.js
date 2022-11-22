/**
 * Code by dom (@dcode)
 * 
 */

let dateDisplay = document.querySelector(".date");
let timeDisplay = document.querySelector(".time");

function checkTime() {
    var curTime = new Date();
    let hour = curTime.getHours();
}

function formatTime(date) {
    const curHours = date.getHours() % 12 || 12;
    const curMinutes = date.getMinutes();
    const checkAm = date.getHours() < 12;
    return `${curHours.toString().padStart(2,"0")}:${curMinutes.toString().padStart(2,"0")}${checkAm ? "a" : "p"}`
}

function formatDate(date) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

// constants
const clientId = rollRandom(10000000, 99999999)

// variables

let barWidth = 0;
let searchToggled;

let startupSound = new Audio('/src/audio/startup.mp3');
let backgroundAudio = new Audio('/src/audio/main_2.mp3');

backgroundAudio.loop = true

// event listeners 

document.addEventListener("keydown", e => {
    if (
        e.key === 'Enter'
    ) {
        goIframe()
    }
})

document.addEventListener("DOMContentLoaded", (() => {
    int = rollRandom(1, 100)
    if (int > 95) {
        crash()
    }
    console.log(`Crash rate for window: ${int}%`)
}))

document.querySelector(`.closeSearch`).addEventListener("click", () => {
    document.getElementById("searchHolder").classList.toggle("active");
    backgroundAudio.play()
    searchToggled = false;
})

document.getElementById("windowCloser").addEventListener("click", () => {
    document.getElementById("menuWindow").classList.remove("active")
    document.getElementById("windowCloser").classList.remove("active")
    document.getElementById("backgroundImage").classList.remove("active")
})

document.querySelector(".todoIcon").addEventListener("click", () => {
    document.getElementById("top-todo").classList.toggle("active");
})

function disabled(id) {
    document.getElementById("backgroundImage").classList.add("shake");
    let timer = setTimeout(() => {
        document.getElementById("backgroundImage").classList.remove("shake");
    }, 1000)

    if (id == 1) {
        document.querySelector(".taskbar-icon.taskF").classList.add("disabled");
        let iconTimer = setTimeout(() => {
            document.querySelector(".taskbar-icon.taskF").classList.remove("disabled");
        }, 1000)
    } else if (id == 2) {
        document.querySelector(".taskbar-icon.taskT").classList.add("disabled");
        let iconTimer = setTimeout(() => {
            document.querySelector(".taskbar-icon.taskT").classList.remove("disabled");
        }, 1000)
    }
}

function toggleWindow(id) {
    if (id == 1) {
        document.getElementById("miniWindow").classList.toggle("active");
    } else if (id == 2) {
        document.getElementById("menuWindow").classList.add("active")
        document.getElementById("windowCloser").classList.add("active")
        document.getElementById("backgroundImage").classList.add("active")
        document.getElementById("miniWindow").classList.remove("active");
    } else if (id == 3) {
        document.getElementById("infoWindow").classList.toggle("active");
    } else if (id == 4) {
        document.getElementById("searchHolder").classList.toggle("active");
        backgroundAudio.pause()
        searchToggled = true;
    } else {
        console.log("No hay una ventana que existe con ese identificacíon.")
    }
}

setInterval(() => {
    const now = new Date();

    timeDisplay.textContent = formatTime(now);
    dateDisplay.textContent = formatDate(now);
    checkTime();
}, 20);

function startApp() {
    themeLink.setAttribute("href", `src/css/theme_de.css`)
    theme = 0;
    document.getElementById("startupModal").classList.add("active");
    document.getElementById("startupSplash").classList.add("active");
    document.querySelector(".startupTitle").classList.add("active");
    startupSound.loop = false;
    startupSound.play();

    startup = setInterval(() => {
        document.querySelector(".ui-web").classList.remove("active");
        document.getElementById("startupBar").classList.add("active");
        document.getElementById("startupVersion").classList.add("active");
        startupSound.volume = 0.5;
        backgroundAudio.volume = 0.2;

        barWidth = 50;

        barGrow = setInterval(() => {
            document.getElementById("startupBar").style.width = `${barWidth++}%`;

            progressCheck = setInterval(() => {
                if (barWidth == 0) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Watching Squeejii...`
                } else if (barWidth >= 55) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Doing Homework...`
                } else if (barWidth >= 75) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Coding...`
                } else if (barWidth >= 95) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Listening to Playboi Carti...`
                }
            }, 250)

            if (barWidth >= 100) {
                clearInterval(progressCheck)
                console.log("App has been loaded.");
                backgroundAudio.play();
                document.getElementById("startupBar").style.width = `100%`;
                clearInterval(barGrow);
                document.querySelector(".ui-app").classList.add("active");
                document.getElementById("startupModal").classList.remove("active");
                document.getElementById("startupSplash").classList.remove("active");
                document.getElementById("startupBar").classList.remove("active");
                document.getElementById("startupVersion").classList.remove("active");
                document.getElementById("startupModal").style.display = "none";

                let visualizer = setTimeout(() => {
                    document.querySelector(".backgroundImage").classList.add("active")
                }, 28000)
            }
        }, 50)

        clearInterval(startup)
    }, 4500)
}

function clearApp() {
    document.querySelector(".ui-app").classList.remove("active");
    setTimeout(() => {
        document.querySelector(".ui-web").classList.add("active");
    }, 2550)
}

function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    document.querySelector(".chromeVersion").innerHTML = `${raw ? parseInt(raw[2], 10) : false}.0`
}

function rollRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(`New Client ID: ${clientId}`)

localStorage.setItem("localId", clientId)

if (clientId != localStorage.getItem("localId")) {
    document.querySelector(".clientId").innerHTML = localStorage.getItem("localId");
} else {
    document.querySelector(".clientId").innerHTML = clientId;
}

function resetStorage(code) {
    if (code == 1 /* erases all */ ) {
        localStorage.removeItem(localId)
    } else {
        return `Process could not be completed. Code value must be equal to 1. (Given: ${code})`;
    }
}

// Visualizer

let htmlCanvasElm = document.querySelector("#visualizerCanvas");
let backgroundNoise = backgroundAudio
let wave = new Wave(backgroundNoise, htmlCanvasElm);
let accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');

setInterval(() => {
    accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    wave.addAnimation(new wave.animations.Wave({
        lineWidth: 10,
        lineColor: accentColor,
        count: 40
    }));
}, 4000)

getChromeVersion();

function settingsMenuToggles(opt) {
    if (opt == 1) {
        console.log(`null, decode`)
    } else if (opt == 2) {
        console.log(`DXL Game has been unlocked.`)
        console.log(document.querySelector(`.taskF`).classList.toggle("active"))
    } else if (opt == 3) {
        console.log(`Force saving enabled.`)
        localStorage.setItem("force", 1)
    } else if (opt == 4) {
        console.log(`Visualizer toggled.`)
        console.log(document.getElementById(`visualizerCanvas`).classList.toggle("toggled"))
    } else {
        console.log(`That's not a valid option.`)
    }
}

function goIframe() {
    let searchInput = document.getElementById("searchInput").value
    document.getElementById("windowView").src = `https://${searchInput}`
}

function crash() {
    document.title = "Aw, Snap!"
    document.getElementById("errorWindow").classList.add("active");
}