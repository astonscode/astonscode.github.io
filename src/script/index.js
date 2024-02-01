function rollRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const widgets = {
    top: {
        time: {
            getTime() {
                const d = new Date();
                const h = d.getHours() % 12 || 12
	            const m = d.getMinutes()
	            const isAM = d.getHours() < 12
	            return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}${isAM ? "am" : "pm"}`
            },
            displayTime: setInterval(()=>{
                document.getElementById("time").textContent = widgets.top.time.getTime()
            }, 100) 
        },
        messageArray: ["welcome", "glad you're here", "all of us.", "session 10: breakthrough", "adhd", "we must. keep. going.", "you got this", "theres no way", "limitless"], 
    }, 
    mid: {
        title: 0,
        lang: 0,
    }, 
}

class Item {
    constructor(link, ref) {
        this.link = link
        this.ref = ref


        this.parent = document.getElementById("bottom")
    }

    generate() {
        this.parent.innerHTML += ``
    }
}