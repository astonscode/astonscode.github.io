let maskOn = true
let camId = 0
let toxicAmt = 0
let nightDone = false

let energyUsage = 1

const roomGrid = document.getElementById("roomGrid")
const rooms = roomGrid.children

for (let i = 0; i < rooms.length; i++) {
    rooms[i].value = 1
}

// input handling

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === `m`) {
        keyEv(1)
    }
    if (e.key.toLowerCase() === `f`) {
        keyEv(2)
    }
    if (e.key.toLowerCase() === `s`) {
        keyEv(3)
    }
    if (e.key.toLowerCase() === `c`) {
        keyEv(4)
    }
})

function keyEv(evId) {
    if (evId == 1) {
        console.log(`Mask is now on.`)
        maskCtrl.classList.toggle(`active`)
    } else if (evId == 2) {
        console.log(`Flashlight active.`)
        flashCtrl.classList.toggle(`active`)
    } else if (evId == 3) {
        console.log(`Snare active on Cam ${camId}.`)
        snareCtrl.classList.toggle(`selecting`)
    } else if (evId == 4) {
        console.log(`Camera now active.`)
        camCtrl.classList.toggle(`active`)
    } else {
        console.log(`ばかない。`)
    }
}

let timeVal = 270
let timeHour = `12 AM`

let timePassing = setInterval(() => {
    timerDisplay.innerHTML = `${timeVal.toFixed(1)} (${timeHour})`
    timeVal = timeVal - 0.1

    if (timeVal < 270) {
        timeHour = `12 AM`
    }
    if (timeVal <= 250) {
        aiStart()
    }
    if (timeVal <= 225) {
        timeHour = `1 AM`
    }
    if (timeVal <= 180) {
        timeHour = `2 AM`
    }
    if (timeVal <= 135) {
        timeHour = `3 AM`
    }
    if (timeVal <= 90) {
        timeHour = `4 AM`
    }
    if (timeVal <= 45) {
        timeHour = `5 AM`
    }
    if (timeVal <= 0) {
        timeVal = 0
        nightDone = true
    }
}, 100)

setInterval(() => {
    if (nightDone == true) {
        endNight()
    }
}, 1000)

let flashlightBars = 5

function useFlashlight(room) {
    flashlightBars = flashlightBars - 1
    if (flashlightBars == 0) {
        console.log(`Flashlight batteries depleted.`)
    } else {
        document.getElementById(room).classList.add(`flashOn`)
        document.addEventListener("mouseleave", () => {
            document.getElementById(room).classList.remove(`flashOn`)
        })
    }
}

let flashRefill = setInterval(() => {
    if (flashlightBars == 5) {
        flashlightBars = 5
    } else {
        flashlightBars = flashlightBars + 1
    }
}, 5000)

function endNight() {
    timeHour = `6 AM`
    clearInterval(timePassing)
    endGame.classList.add(`active`)
    keyEv = null
}

class Entity {
    constructor() {
        this.name = `Player`
        this.active = false
    }

    generateEntity() {
        this.hexColor = `#fff`
        this.startLocation = office
    }

    entityPath() {
        this.location1 = office
        this.location1Chance = 100

        this.location2 = office
        this.location2Chance = 100

        this.location3 = office
        this.location3Chance = 100

        this.location4 = office
        this.location4Chance = 100

        this.location5 = office
        this.location5Chance = 100
    }
}

class Fredbear extends Entity {
    constructor() {
        this.name = `Fredbear`
        this.active = true
    }
    generateEntity() {}
    entityPath() {}
}

class Nightmare extends Entity {
    constructor() {}
    generateEntity() {}
    entityPath() {}
}

let depleteRate = 3000
let powerLeft = 100

let elecDeplete = setInterval(() => {
    powerLeft = powerLeft - 1
    powerDisplay.innerHTML = `<div class="powerIcon material-icons"> bolt </div> ${powerLeft}%`
}, depleteRate / energyUsage)

function aiStart() {
    room5.innerHTML = ``
    i = do50(0, 100)
    console.log(i)
    if (i > 50) {
        console.log(`Fredbear moved to Cam 3.`)
    } else {
        console.log(`Nightmare moved to Left Office Vent.`)
    }
}

function do50(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const locationArray = [{
        name: `office`,
        id: `office`
    },
    {
        name: `room1`
    }
]