const version = `1.0.0`;
let userName = "aiziru"
let userLevel = 468;
let colorVal = "#fff";

document.getElementById("version").innerHTML = `v${version}`
document.querySelector(".upperName").innerHTML = `${userName}`
document.querySelector(".upperLevel").innerHTML = `(${userLevel})`
    // Event Listeners

document.addEventListener("DOMContentLoaded", () => {
    console.log("Content loaded. ");
    issueNew(0, 1)
    let fakeTime
    issueNew(1, 1)
})

document.addEventListener("keydown", e => {
    if (
        e.key === 'Enter'
    ) {
        issueNew(2, 1)
    }
})

function issueNew(type, code) {
    let x;

    const logHistory = document.querySelector(".logWindow-history");

    if (type == 0) {
        let newLog = document.createElement("div");
        let newLogText;

        if (code == 1) {
            newLogText = document.createTextNode(`User connected. `);
        } else if (code == 2) {
            newLogText = document.createTextNode(`Retrieving user data from server. `);
        } else if (code == 3) {
            newLogText = document.createTextNode(`Data Loaded. `);
        } else if (code == 4) {
            newLogText = document.createTextNode(`Public Key issued. `);
        } else if (code == 5) {
            newLogText = document.createTextNode(`API Server active.`);
        } else if (code == 6) {
            newLogText = document.createTextNode(`User reconnected. `);
        } else if (code == 7) {
            newLogText = document.createTextNode(`I'm offline. I can't respond. `);
        }

        newLog.appendChild(newLogText);
        let newLogClass = newLog.classList.add("logWindow-item")
        let newLogClassSecondary = newLog.classList.add("server")
        logHistory.appendChild(newLog)

        x = `server`
    }

    if (type == 1) {
        let newLog = document.createElement("div");
        let newLogText;

        if (code == 1) {
            newLogText = document.createTextNode(`[Game] Welcome to DXL, a browser rpg game.`);
        }
        if (code == 2) {
            newLogText = document.createTextNode(`[Game] What armor would you like to equip?`);
        }
        if (code == 3) {
            newLogText = document.createTextNode(`[Game] Servers are offline. There will be no response to any actions.`);
        }

        newLog.appendChild(newLogText);
        let newLogClass = newLog.classList.add("logWindow-item")

        logHistory.appendChild(newLog)

        x = `game`
    }

    if (type == 2) {
        userChecking();

        let newLog = document.createElement("div");
        let newLogText;

        if (code == 1) {
            newLog.innerHTML = `
            <div id="log-left">
                <div id="userLevel" style='color: ${colorVal}'> (${userLevel}) </div>
                <div id="userName"> ${userName} </div> : ${document.getElementById(`logInput-input`).value}
            </div>`

            if (document.getElementById(`logInput-input`).value == ``) {
                newLog = null
            }

        } else {
            newLogText = document.createTextNode(`Code sent back an invalid logText error, check statments under line [35] of the 'game.js' file.`);
        }

        let newLogClass = newLog.classList.add("logWindow-item")
        let newLogClassSecondary = newLog.classList.add("user")

        logHistory.appendChild(newLog)

       inputValue = ``

        x = `player`
    }

    console.log(`New ${x} log issued. Documenting...`)
}

// Timestamp config 

function checkTime() {
    let curTime = new Date();
    let hour = curTime.getHours();
}

// -- Code by dom (@dcode)

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

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

const now = new Date();

let activeState = `3v3 | ${userName} (${userLevel}) vs. Branndiar (75)`

function changeState(curState) {
    if (curState == 0) {
        console.log("Quest is waiting...")
        document.querySelector(".logWindow-top").innerHTML = `Waiting...`
    } else if (curState == 1) {
        console.log("Quest is active.")
        document.querySelector(".logWindow-top").innerHTML = `Active ${activeState}`
    } else if (curState == 2) {
        console.log("Quest is paused.")
        document.querySelector(".logWindow-top").innerHTML = `Paused`
    } else if (curState == 3) {
        console.log("The player has died.")
        document.querySelector(".logWindow-top").innerHTML = `💀`
    } else if (curState == 4) {
        console.log("Quest is AFK.")
        document.querySelector(".logWindow-top").innerHTML = `AFK...`
    }
}

function userChecking() {
    if (userLevel >= 30) {
        colorVal = "#5dff4e"
    }
    if (userLevel >= 50) {
        colorVal = "#3784ff"
    }
    if (userLevel >= 80) {
        colorVal = "#624aff"
    }
    if (userLevel >= 100) {
        colorVal = "#9500ff"
    }
    if (userLevel >= 150) {
        colorVal = "#ff0000"
    }
    if (userLevel >= 200) {
        colorVal = "#ffaa00"
    }
    if (userLevel >= 250) {
        colorVal = "#6bfffd"
    }
    if (userLevel >= 300) {
        colorVal = "#6bd3ff"
    }
    if (userLevel >= 350) {
        colorVal = "#e2b4ff"
    }
    if (userLevel >= 400) {
        colorVal = "#ffb4b4"
    }
    if (userLevel >= 450) {
        colorVal = "#fad0ff"
    }
    if (userLevel >= 500) {
        colorVal = "#8fb4ff"
    }
}
const inputValue = document.getElementById(`logInput-input`).value;

if(inputValue.startsWith(`change`)) {
    let x = document.createElement(`div`)
}