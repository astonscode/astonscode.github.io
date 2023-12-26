const containers = document.getElementById("statusContainers")

let santy;

document.addEventListener("DOMContentLoaded", ()=>{
    document.title = "Night 1"
    santy = new Animatronic("santy", 10, 10, pathMatrixA)
    console.log(santy)
})

function rollRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

/* let secTime = 0 
let minTime = 0
let hour = 12
let timerUpdate = setInterval(()=>{
    secTime++
    if (secTime >= 60) {
        minTime++
        secTime = 0 
    }
    if(secTime < 10) {
        refSecTime = "0" + secTime
    } else {
        refSecTime = secTime
    }
    if (secTime >= 45) {
        hour = 1    
    }
    if (minTime === 1 && secTime >= 30) {
        hour = 2
    }
    if (minTime === 2 && secTime >= 5) {
        hour = 3
    }
    if (minTime === 2 && secTime >= 50) {
        hour = 4
    } 
    if (minTime === 3 && secTime >= 45) {
        hour = 5
    }
    if (minTime === 4 && secTime >= 30) {
        hour = 6
    }
    document.getElementById("hour").innerHTML = `${hour} AM`
    document.getElementById("timeExpanded").innerHTML = `${minTime}:${refSecTime}`
}, 1000)
*/

let secondsInterval;
let msInterval;

const time = {
    currentTime: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    hour: 12,
    hourHTMLElement: document.getElementById("hour"),
    htmlElement: document.getElementById("timeExpanded"),
    start() {
        secondsInterval = setInterval(()=>{
            this.seconds++
            if (this.seconds >= 60) {
                this.seconds = 0 
                this.minutes++
            }
            if (this.seconds < 10) {
                this.seconds = "0" + this.seconds
            }
            if(this.minutes === 0 && this.seconds >= 45) {
                this.hour = 1
            } else if (this.minutes === 1 && this.seconds >= 30) {
                this.hour = 2
            } else if (this.minutes === 2 && this.seconds >= 15) {
                this.hour = 3
            } else if (this.minutes === 2 && this.seconds >= 50) {
                this.hour = 4
            } else if (this.minutes === 3 && this.seconds >= 35) {
                this.hour = 5
            } else if (this.minutes === 4 && this.seconds >= 30) {
                time.stop()
                this.hour = 6
                this.minutes = 4
                this.seconds = 30
            }
        }, 1000)
        msInterval = setInterval(()=>{
            this.milliseconds++
            if (this.milliseconds >= 99) {
                this.milliseconds = 0 
            }
            this.htmlElement.innerHTML = `${this.minutes}:${this.seconds}.${this.milliseconds}`
            this.hourHTMLElement.innerHTML = `${this.hour} AM`
        },10)
    }, 
    stop() {
        clearInterval(msInterval)
        clearInterval(secondsInterval)
    }
}