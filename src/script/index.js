let x, y, z

const global = {
    copy(text) {
        navigator.clipboard.writeText(text)
        return text
    },
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

const widgets = {
    getTime() {
        const d = new Date()
        const h = d.getHours() % 12 || 12
	    const m = d.getMinutes()
	    const isAM = d.getHours() < 12
	    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}${isAM ? "am" : "pm"}`
    },
    displayTime: setInterval(()=>{
        if (document.getElementById("time") != undefined) {
            document.getElementById("time").textContent = widgets.getTime()
            return widgets.getTime()
        }   
    }, 100),
    messageArray: ["welcome", "breakthrough", "stay focused my brother", "keep. going.", "you got this", "limitless", "light up the night", "sheer heart attack", "wonder of u"], 
    changeMsg(int) {
        if (document.getElementById("message") != undefined) {
            document.getElementById("message").textContent = this.messageArray[int]
            return this.messageArray[int]
        }
    },
    title: 0,
    lang: 0,
}

const windows = {
    array: [document.getElementById("nav"), document.getElementById("tooltip")],
    open(id) {
        windows.array[id].classList.add("open")
        return windows.array[id]
    },
    close(id) {
        windows.array[id].classList.remove("open")
        return windows.array[id]
    },
    toggle(id) {
        windows.array[id].classList.toggle("open")
        return windows.array[id]
    },
    toggleWithTimeout(id, timer) {
        windows.array[id].classList.toggle("open")
        let i = setTimeout(()=>{
            windows.array[id].classList.toggle("open")
        }, timer)
    }
}

function initTooltip(text) {
    windows.array[1].textContent = text
    windows.toggleWithTimeout(1, 2500)
}

document.addEventListener("DOMContentLoaded", () => {
    x = global.random(0, widgets.messageArray.length - 1)
    widgets.changeMsg(x)    
})

