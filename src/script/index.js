// All code by me
// (4-45) Code by dom (@dcode)

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
let curSongId = 1;

let startupSound = new Audio('/src/audio/startup.mp3');
let backgroundAudio = new Audio(`/src/audio/main_${curSongId}.mp3`);
let backgroundAudioId = 1;
let audioPaused = false;

backgroundAudio.loop = true

// event listeners 

searchInput.addEventListener("keydown", e => {
    if (
        e.key === 'Enter'
    ) {
        goIframe()
    }
})

document.addEventListener("DOMContentLoaded", (() => {
    int = rollRandom(1, 100)
    if (int > 97) {
        crash("normal")
    } else if (int > 99) {
        crash("fatal")
    }
    console.log("%cCRASH", "background: #61aaff; border-radius: 3px; padding: 0 4px", `PC Degredation Report: Crash Rate clocked at ${int}%`)
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

document.getElementById(`songImg`).addEventListener(`click`, () => {
    document.getElementById(`musicFullscreen`).classList.toggle("active")
})

document.getElementById(`fullscreenExit`).addEventListener(`click`, () => {
    document.getElementById(`musicFullscreen`).classList.toggle("active")
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
        console.log("%cERR", "background: #f55; border-radius: 3px; padding: 0 4px", `No hay una ventana que existe con ese identificacíon.`)
    }
}

setInterval(() => {
    const now = new Date();

    timeDisplay.textContent = formatTime(now);
    dateDisplay.textContent = formatDate(now);
    checkTime();
}, 20);

function startApp() {
    console.log("%cPROGRESS", "background: #1c9d76; border-radius: 3px; padding: 0 4px", `DXApp loading. Please wait...`)
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

        barWidth = 0;

        barGrow = setInterval(() => {
            document.getElementById("startupBar").style.width = `${barWidth++}%`;
            progressCheck = setInterval(() => {
                if (barWidth > 0) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Watching Squeejii play Rocket League...`
                }
                if (barWidth >= 25) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Getting Turnt...`
                }
                if (barWidth >= 50) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Doing AP Chem Homework...`
                }
                if (barWidth >= 75) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Coding Alluvirum...`
                }
                if (barWidth >= 95) {
                    document.getElementById("startupText").innerHTML = `(${barWidth}%) Listening to Playboi Carti...`
                }
            }, 50)

            if (barWidth >= 100) {
                barWidth = undefined;
                clearInterval(progressCheck)
                console.log("%cPROGRESS", "background: #1c9d76; border-radius: 3px; padding: 0 4px", `DXApp has been loaded.`)
                backgroundAudio.play();
                document.getElementById("startupBar").style.width = `100%`;
                clearInterval(barGrow);
                document.querySelector(".ui-app").classList.add("active");
                document.getElementById("startupModal").classList.remove("active");
                document.getElementById("startupSplash").classList.remove("active");
                document.getElementById("startupBar").classList.remove("active");
                document.getElementById("startupVersion").classList.remove("active");
                document.getElementById("startupModal").style.display = "none";

                if (backgroundAudioId == 2) {
                    let visualizer = setTimeout(() => {
                        document.querySelector(".backgroundImage").classList.add("active")
                    }, 28000)
                } else {
                    document.querySelector(".backgroundImage").classList.add("active")
                }
            }
        }, 50)

        clearInterval(startup)
    }, 4500)
}


//Shut down DXOS 
function clearApp() {
    document.querySelector(".ui-app").classList.remove("active");
    backgroundAudio.stop()
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

//Local Storage
console.log("%cNEW VAR", "background: #ffe300; border-radius: 3px; padding: 0 4px", `New Client ID logged as ${clientId}`)

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

function copyLink(linkId) {
    if (linkId == 1) {
        navigator.clipboard.writeText(`https://twitter.com/enzenra`)
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Twitter link copied.`)
    } else if (linkId == 2) {
        navigator.clipboard.writeText(`https://www.youtube.com/channel/UCBHkCLZ5cgBb8FGqO9-5rdA`)
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Youtube link copied.`)
    } else if (linkId == 3) {
        navigator.clipboard.writeText(`https://www.twitch.tv/decodejs`)
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Twitch link copied.`)
    } else if (linkId == 4) {
        navigator.clipboard.writeText(`code#0370`)
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Discord profile copied.`)
    }
}

function toggleOpt(opt) {
    if (opt == 1) {
        console.log("%cSTORAGE", "background: #ff9b1e; border-radius: 3px; padding: 0 4px", `Saved as array: [username: "undefined", password: "null"]`)
    } else if (opt == 2) {
        console.log("%cSTORAGE", "background: #ff9b1e; border-radius: 3px; padding: 0 4px", `Showing Hidden Content.`)
        document.getElementById(`taskbarTop`).classList.toggle("active")
    } else if (opt == 3) {
        console.log("%cSTORAGE", "background: #ff9b1e; border-radius: 3px; padding: 0 4px", `Force saving enabled.`)
        localStorage.setItem("force", 1)
    } else if (opt == 4) {
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Music Visualizer toggled.`)
        document.getElementById(`visualizerCanvas`).classList.toggle("toggled")
    } else if (opt == 5) {
        if (audioPaused == false) {
            backgroundAudio.pause()
            audioPaused = true
            console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Music stopped.`)
        } else if (audioPaused == true) {
            backgroundAudio.play()
            audioPaused = false
            console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Music now playing.`)
        }
    } else {
        console.log("%cERR", "background: #f55; border-radius: 3px; padding: 0 4px", `No hay un opcion que existe con ese identificacíon.`)
    }
}

function goIframe() {
    let searchInput = document.getElementById("searchInput").value
    document.getElementById("windowView").src = `https://${searchInput}`
    console.log("%cGET", "background: #c683ff; border-radius: 3px; padding: 0 4px", `Attempting to connect to https://${searchInput} [5]`)
}

function crash(type) {
    if (type == "normal") {
        console.log("%cFATAL ERROR", "background: #f00; border-radius: 3px; padding: 0 4px", `Website has crashed. Please reload or wait until DXOS is done analysing the problem. Estimated time: Over 3 billion years`)
        document.title = "Aw, Snap!"
        document.getElementById("errorWindow").classList.add("active");
    }
    if (type == "fatal") {
        console.log("%cFATAL ERROR", "background: #f00; border-radius: 3px; padding: 0 4px", `Website has crashed. Please reload or wait until DXOS is done analysing the problem. Estimated time: Over 3 billion years`)
        document.title = "🄰🅆,S̸̯̠̔̄͌͊̅͑̄͋̚͝ņ̵̨̹̺͇̯̣̩̥͖̂̍̆̀̒͆͌̏͊̚ą̸̡̘̥͕͚̜̄p̴̛̖̟͉̱̈̇̇̄̉̐͂̅̆!̸̹̖̖͙̣̜̦̏"
        document.getElementById("errorWindow").classList.add("active");
        document.getElementById("errorWindow").classList.add("more-fatal");
    }

}

// Music
const songArray = {
    song1: {
        name: `Freestyle 2`,
        artist: `Ken Carson`,
        src: `/src/img/album/1.png`,
        id: 1,
    },
    song2: {
        name: `pick up the phone`,
        artist: `Young Thug and Travis Scott`,
        src: `/src/img/album/0.png`,
        id: 2,
    },
}

function getSongInfo(id) {
    if (id == 1) {
        document.getElementById(`musicControls`).style.background = `linear-gradient(to bottom, #00000085, #00000085), url(${songArray.song1.src})`
        document.querySelector(`.songName`).innerHTML = songArray.song1.name
        document.querySelector(`.songArtist`).innerHTML = songArray.song1.artist
        document.getElementById(`songImg`).src = songArray.song1.src
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Playing Freestyle 2 by Ken Carson.`)
    } else if (id == 2) {
        document.getElementById(`musicControls`).style.background = `linear-gradient(to bottom, #00000085, #00000085), url(${songArray.song2.src})`
        document.querySelector(`.songName`).innerHTML = songArray.song2.name
        document.querySelector(`.songArtist`).innerHTML = songArray.song2.artist
        document.getElementById(`songImg`).src = songArray.song2.src
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Playing pick up the phone by Young Thug and Travis Scott.`)
    } else {
        console.log("%cERR", "background: #f55; border-radius: 3px; padding: 0 4px", `No hay un opcion que existe con ese identificacíon.`)
    }
}

function audioControls(ctx) {
    if (ctx == 1) {
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Previous song...`)
        if (curSongId == 1) {
            changeSong(1)
        } else {
            changeSong(curSongId - 1)
        }
    } else if (ctx == 2) {
        if (audioPaused == false) {
            document.querySelector(`.pausePlayIcon`).innerHTML = `play_arrow`
            audioPaused = true;
            backgroundNoise.pause()
            console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Music stopped.`)
        } else {
            document.querySelector(`.pausePlayIcon`).innerHTML = `pause`
            audioPaused = false;
            backgroundNoise.play()
            console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Music now playing.`)
        }
    } else if (ctx == 3) {
        console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Next song...`)
        if (curSongId == 2) {
            changeSong(2)
        } else {
            changeSong(curSongId + 1)
        }
    } else {
        console.log(`Context invalid.`)
    }
}

function changeSong(newSongId) {
    getSongInfo(newSongId)
    backgroundNoise.src = `/src/audio/main_${newSongId}.mp3`;
    backgroundNoise.load()
    backgroundNoise.play()
    audioPaused = false;
    document.querySelector(`.pausePlayIcon`).innerHTML = `play_arrow`

    if (newSongId > 2) {
        console.log(`Unreadable id provided.`)
    }
}