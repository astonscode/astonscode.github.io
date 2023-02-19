function toggleFunc(param) {
	if (param == "menu") {
		console.log("%cDEV", "background: #3e74ff; border-radius: 4px 0; padding: 4px;color: white", `Functionality toggled as [menu]`)
	} else if (param == "app") {
		console.log("%cDEV", "background: #3e74ff; border-radius: 4px 0; padding: 4px;color: white", `Functionality toggled as [app]`)
		document.addEventListener("DOMContentLoaded", () => {
			startApp()
		})
	}
}

function toggleMenu(id) {
	if (id == 1) {
		document.getElementById(`aboutContainer`).classList.toggle(`active`)
		document.getElementById(`main-header`).classList.toggle(`blurred`)
		document.getElementById(`start`).classList.toggle(`blurred`)
	}
}

const quotes = [
	{
		quote: "He only is my rock and my salvation; I shall not be shaken.",
		verse: "Psalm 62:6"
	},
	{
		quote: "I am the way and the truth and the life. For no one comes to the Father except through me.",
		verse: "John 14:6"
	},
	{
		quote: "The Lord will fight for you. All you have to do is be still.",
		verse: "Exodus 14:14"
	},
	{
		quote: "I can do all things through Christ who gives me strength.",
		verse: "Phillipians 4:13"
	}
]

function genQuote() {
	let quoteId = rollRandom(0, quotes.length - 1)
	document.querySelector(`.header-sub`).innerHTML = `"${quotes[quoteId].quote}" - ${quotes[quoteId].verse}`
}

// constants
const clientId = rollRandom(10000000, 99999999)

// variables

let barWidth = 0
let searchToggled
let curSongId = 1

let hoverTick = new Audio("/src/audio/hover_1.mp3")
let startupSound = new Audio("/src/audio/startup.mp3")
let backgroundAudio = new Audio(`/src/audio/main_${curSongId}.mp3`)
let backgroundAudioId = 1
let audioPaused = false

hoverTick.volume = 0.5
backgroundAudio.loop = true

// event listeners

searchInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		goIframe()
	}
})

document.addEventListener("DOMContentLoaded", () => {
	int = rollRandom(1, 100)
	if (int > 97) {
		crash("normal")
	} else if (int > 99) {
		crash("fatal")
	}
	console.log("%cCRASH", "background: #61aaff;  border-radius: 4px 0; padding: 4px;color: white", `PC Degredation Report: Crash Rate clocked at ${int}%`)
	genQuote()
})

document.querySelector(`.closeSearch`).addEventListener("click", () => {
	document.getElementById("searchHolder").classList.toggle("active")
	// backgroundAudio.play();
	searchToggled = false
})

document.getElementById("windowCloser").addEventListener("click", () => {
	document.getElementById("menuWindow").classList.remove("active")
	document.getElementById("windowCloser").classList.remove("active")
	document.getElementById("backgroundImage").classList.remove("active")
})

document.getElementById(`songImg`).addEventListener(`click`, () => {
	document.getElementById(`musicFullscreen`).classList.toggle("active")
})

document.getElementById(`fullscreenExit`).addEventListener(`click`, () => {
	document.getElementById(`musicFullscreen`).classList.toggle("active")
})

function disabled(id) {
	document.getElementById("backgroundImage").classList.add("shake")
	let timer = setTimeout(() => {
		document.getElementById("backgroundImage").classList.remove("shake")
	}, 1000)

	if (id == 1) {
		document.querySelector(".taskbar-icon.taskF").classList.add("disabled")
		let iconTimer = setTimeout(() => {
			document.querySelector(".taskbar-icon.taskF").classList.remove("disabled")
		}, 1000)
	} else if (id == 2) {
		document.querySelector(".taskbar-icon.taskT").classList.add("disabled")
		let iconTimer = setTimeout(() => {
			document.querySelector(".taskbar-icon.taskT").classList.remove("disabled")
		}, 1000)
	}
}

function toggleWindow(id) {
	if (id == 1) {
		document.getElementById("miniWindow").classList.toggle("active")
	} else if (id == 2) {
		document.getElementById("menuWindow").classList.add("active")
		document.getElementById("windowCloser").classList.add("active")
		document.getElementById("backgroundImage").classList.add("active")
		document.getElementById("miniWindow").classList.remove("active")
	} else if (id == 3) {
		document.getElementById("infoWindow").classList.toggle("active")
	} else if (id == 4) {
		document.getElementById("searchHolder").classList.toggle("active")
		backgroundAudio.pause()
		searchToggled = true
	} else {
		console.log("%cERR", "background: #f55;  border-radius: 4px 0; padding: 4px;color: white", `No hay una ventana que existe con ese identificacíon.`)
	}
}

function startApp() {
	console.log("%cPROGRESS", "background: #1c9d76;  border-radius: 4px 0; padding: 4px;color: white", `DXApp loading. Please wait...`)
	themeLink.setAttribute("href", `src/css/theme_de.css`)
	theme = 0
	document.getElementById("startupModal").classList.add("active")
	// document.getElementById("startupSplash").classList.add("active");
	// document.querySelector(".startupTitle").classList.add("active")
	startupSound.loop = false
	startupSound.play()

	startup = setInterval(() => {
		document.querySelector(".ui-web").classList.remove("active")
		document.getElementById("startupBar").classList.add("active")
		document.getElementById("startupVersion").classList.add("active")
		startupSound.volume = 0.5
		backgroundAudio.volume = 0.2

		barWidth = 0

		barGrow = setInterval(() => {
			document.getElementById("startupBar").style.width = `${barWidth++}%`
			progressCheck = setInterval(() => {
				document.getElementById("startupText").innerHTML = `${barWidth}%`
			}, 50)

			if (barWidth >= 100) {
				barWidth = undefined
				clearInterval(progressCheck)
				console.log("%cPROGRESS", "background: #1c9d76;  border-radius: 4px 0; padding: 4px;color: white", `DXApp has been loaded.`)
				// backgroundAudio.play();
				document.getElementById("startupBar").style.width = `100%`
				clearInterval(barGrow)
				document.querySelector(".ui-app").classList.add("active")
				document.getElementById("startupModal").classList.remove("active")
				// document.getElementById("startupSplash").classList.remove("active");
				document.getElementById("startupBar").classList.remove("active")
				document.getElementById("startupVersion").classList.remove("active")
				document.getElementById("startupModal").style.display = "none"
				// audioControls(2);
			}
		}, 50)
		clearInterval(startup)
	}, 4500)
}

/* Shut down DXOS
function clearApp() {
	document.querySelector(".ui-app").classList.remove("active")
	document.getElementById("shutdownModal").classList.add("active")
	backgroundAudio.pause()
	setTimeout(() => {
		document.getElementById("shutdownModal").classList.remove("active")
		document.querySelector(".ui-web").classList.add("active")
	}, 2550)
}
*/

function getChromeVersion() {
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
	document.querySelector(".chromeVersion").innerHTML = `${raw ? parseInt(raw[2], 10) : false}.0`
}

function rollRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

//Local Storage
console.log("%cVARIABLE", "background: #ffe300;  border-radius: 4px 0; padding: 4px;color: black", `New Client ID logged as ${clientId}`)

localStorage.setItem("localId", clientId)

if (clientId != localStorage.getItem("localId")) {
	document.querySelector(".clientId").innerHTML = localStorage.getItem("localId")
} else {
	document.querySelector(".clientId").innerHTML = clientId
}

function resetStorage(code) {
	if (code == 1 /* erases all */) {
		localStorage.removeItem(localId)
	} else {
		return `Process could not be completed. Code value must be equal to 1. (Given: ${code})`
	}
}

// Visualizer

let htmlCanvasElm = document.querySelector("#visualizerCanvas")
let backgroundNoise = backgroundAudio
let wave = new Wave(backgroundNoise, htmlCanvasElm)
let accentColor = getComputedStyle(document.documentElement).getPropertyValue("--accent")

setInterval(() => {
	accentColor = getComputedStyle(document.documentElement).getPropertyValue("--accent")
	wave.addAnimation(
		new wave.animations.Wave({
			lineWidth: 10,
			lineColor: accentColor,
			count: 40
		})
	)
}, 4000)

getChromeVersion()

function copyLink(linkId) {
	if (linkId == 1) {
		navigator.clipboard.writeText(`https://twitter.com/enzenra`)
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Twitter link copied.`)
	} else if (linkId == 2) {
		navigator.clipboard.writeText(`https://www.youtube.com/channel/UCBHkCLZ5cgBb8FGqO9-5rdA`)
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Youtube link copied.`)
	} else if (linkId == 3) {
		navigator.clipboard.writeText(`https://www.twitch.tv/decodejs`)
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Twitch link copied.`)
	} else if (linkId == 4) {
		navigator.clipboard.writeText(`code#0370`)
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Discord profile copied.`)
	}
}

function toggleOpt(opt) {
	if (opt == 1) {
		console.log("%cSTORAGE", "background: #ff9b1e;  border-radius: 4px 0; padding: 4px;color: white", `Saved as array: [username: "undefined", password: "null"]`)
	} else if (opt == 2) {
		console.log("%cSTORAGE", "background: #ff9b1e; border-radius: 4px 0; padding: 4px;color: white", `Showing Hidden Content.`)
		document.getElementById(`taskbarTop`).classList.toggle("active")
	} else if (opt == 3) {
		console.log("%cSTORAGE", "background: #ff9b1e;  border-radius: 4px 0; padding: 4px;color: white", `Force saving enabled.`)
		localStorage.setItem("force", 1)
	} else if (opt == 4) {
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Music Visualizer toggled.`)
		document.getElementById(`visualizerCanvas`).classList.toggle("toggled")
	} else if (opt == 5) {
		if (audioPaused == false) {
			backgroundAudio.pause()
			audioPaused = true
			console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Music stopped.`)
		} else if (audioPaused == true) {
			// backgroundAudio.play();
			audioPaused = false
			console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Music now playing.`)
		}
	} else {
		console.log("%cERR", "background: #f55;  border-radius: 4px 0; padding: 4px;color: white", `No hay un opcion que existe con ese identificacíon.`)
	}
}

function goIframe() {
	let searchInput = document.getElementById("searchInput").value
	document.getElementById("windowView").src = `https://${searchInput}`
	console.log("%cGET", "background: #c683ff;  border-radius: 4px 0; padding: 4px;color: white", `Attempting to connect to https://${searchInput} [5]`)
}

function crash(type) {
	if (type == 1) {
		console.log("%cFATAL ERROR", "background: #f00;  border-radius: 4px 0; padding: 4px;color: white", `Website has crashed. Please reload or wait until DXOS is done analysing the problem. Estimated time: Over 3 billion years`)
		document.title = "Aw, Snap!"
		document.getElementById("errorWindow").classList.add("active")
		window.location = "chrome://crash"
	}
	if (type == 2) {
		console.log("%cFATAL ERROR", "background: #f00;  border-radius: 4px 0; padding: 4px;color: white", `Website has crashed. Please reload or wait until DXOS is done analysing the problem. Estimated time: Over 3 billion years`)
		document.title = "🄰🅆,S̸̯̠̔̄͌͊̅͑̄͋̚͝ņ̵̨̹̺͇̯̣̩̥͖̂̍̆̀̒͆͌̏͊̚ą̸̡̘̥͕͚̜̄p̴̛̖̟͉̱̈̇̇̄̉̐͂̅̆!̸̹̖̖͙̣̜̦̏"
		document.getElementById("errorWindow").classList.add("active")
		document.getElementById("errorWindow").classList.add("more-fatal")
	}
}

// Music
const songArray = {
	song1: {
		name: `Freestyle 2`,
		artist: `Ken Carson`,
		src: `/src/img/album/1.png`,
		id: 1
	},
	song2: {
		name: `pick up the phone`,
		artist: `Young Thug and Travis Scott`,
		src: `/src/img/album/0.png`,
		id: 2
	}
}

function getSongInfo(id) {
	if (id == 1) {
		document.getElementById(`musicControls`).style.background = `linear-gradient(to bottom, #00000085, #00000085), url(${songArray.song1.src})`
		document.querySelector(`.songName`).innerHTML = songArray.song1.name
		document.querySelector(`.songArtist`).innerHTML = songArray.song1.artist
		document.getElementById(`songImg`).src = songArray.song1.src
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Playing Freestyle 2 by Ken Carson.`)
	} else if (id == 2) {
		document.getElementById(`musicControls`).style.background = `linear-gradient(to bottom, #00000085, #00000085), url(${songArray.song2.src})`
		document.querySelector(`.songName`).innerHTML = songArray.song2.name
		document.querySelector(`.songArtist`).innerHTML = songArray.song2.artist
		document.getElementById(`songImg`).src = songArray.song2.src
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Playing pick up the phone by Young Thug and Travis Scott.`)
	} else {
		console.log("%cERR", "background: #f55;  border-radius: 4px 0; padding: 4px;color: white", `No hay un opcion que existe con ese identificacíon.`)
	}
}

function audioControls(ctx) {
	if (ctx == 1) {
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Previous song...`)
		if (curSongId == 1) {
			changeSong(1)
		} else {
			changeSong(curSongId - 1)
		}
	} else if (ctx == 2) {
		if (audioPaused == false) {
			document.querySelector(`.pausePlayIcon`).innerHTML = `play_arrow`
			audioPaused = true
			backgroundNoise.pause()
			console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Music stopped.`)
		} else {
			document.querySelector(`.pausePlayIcon`).innerHTML = `pause`
			audioPaused = false
			backgroundNoise.play()
			console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Music now playing.`)
		}
	} else if (ctx == 3) {
		console.log("%cUSER", "background: #047eff;  border-radius: 4px 0; padding: 4px;color: white", `Next song...`)
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
	backgroundNoise.src = `/src/audio/main_${newSongId}.mp3`
	backgroundNoise.load()
	backgroundNoise.play()
	audioPaused = false
	document.querySelector(`.pausePlayIcon`).innerHTML = `play_arrow`

	if (newSongId > 2) {
		console.log(`Unreadable id provided.`)
	}
}
toggleFunc("menu")
