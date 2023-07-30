const rollRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const body = document.body

const app = {
	name: "aston",
	version: "10.3.1",
	git: {
		link: "https://github.com/astonscode/astonscode.github.io",
		author: "astonscode (https://github.com/astonscode)"
	},
	log: (x) => console.log(x),
	createUUID() {
		let dt = new Date().getTime()
		let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
			let r = (dt + Math.random() * 16) % 16 | 0
			dt = Math.floor(dt / 16)
			return (c == "x" ? r : (r & 0x3) | 0x8).toString(16)
		})
		return uuid
	},
	site() {
		document.title = `${app.name} | ${link}`
		document.body.setAttribute("data-version", app.version)
		console.log(`Initialized. (${app.name} - ${app.version})`)
	},
	importFont(param, ital) {
		let x = document.createElement(`link`)
		if (wght == undefined) {
			wght = 400
		}
		if (ital == undefined) {
			ital = false
		}
		x.setAttribute("href", `https://fonts.googleapis.com/css2?family=${param}&display=swap`)
		document.head.appendChild(x)
	},
	toggleSettings() {
		app.select("#settingsWindow").classList.toggle("active")
	},
	toggleLang() {
		app.select("#langWindow").classList.toggle("active")
	},
	select(n) {
		return document.querySelector(n)
	},
	setLanguage(x) {
		localStorage.setItem("lang", x)
	},
	getLanguage() {
		return localStorage.getItem("lang")
	}
}

const quote = {
	quotes: [
		{
			quote: "Truly he is my rock and my salvation; he is my fortress, I will not be shaken.",
			verse: "Psalms 62:6",
			src: "https://www.bible.com/bible/111/psa.62.6"
		},
		{
			quote: "I am the way and the truth and the life. For no one comes to the Father except through me.",
			verse: "John 14:6",
			src: "https://www.bible.com/bible/111/jhn.14.6"
		},
		{
			quote: "The Lord will fight for you. All you have to do is be still.",
			verse: "Exodus 14:14",
			src: "https://www.bible.com/bible/111/exo.14.14"
		},
		{
			quote: "I can do all things through Christ who gives me strength.",
			verse: "Phillipians 4:13",
			src: "https://www.bible.com/bible/111/php.4.13"
		},
		{
			quote: "Verily I say unto you, in as much as ye have done it unto one of the least of these, my bretheren, ye have done it unto me. ",
			verse: "Matthew 25:40",
			src: "https://www.bible.com/bible/111/mat.25.40"
		}
	],
	link() {
		window.open(quote.quotes[quoteId].src, "_blank")
	},
	generate() {
		quoteId = rollRandom(0, quote.quotes.length - 1)
		app.select(`.subtitle`).innerHTML = `<div id="mainQuote"> ${this.quotes[quoteId].quote} </div> <div id="quoteVerse" onclick="quote.link()">${this.quotes[quoteId].verse}</div>`
		app.select(`#mainQuote`).addEventListener(`click`, quote.regenerate)
	},
	regenerate() {
		quote.generate()
	},
	remove() {
		app.select(`.subtitle`).innerHTML = ``
	}
}

const client = {
	sessionId: rollRandom(10000000, 99999999),
	dxuuid: () => {
		let x = localStorage.getItem("dxuuid")
		if (x !== null) {
			return localStorage.getItem("dxuuid")
		} else {
			let y = app.createUUID()
			localStorage.setItem("dxuuid", y)
			console.log("%cLS", "margin:8px;background:white;color:black;padding:8px;", "DXClient UUID set.")
			return y
		}
	}
}

const settings = {
	genQuote() {
		quote.generate()
	}
}

document.addEventListener("keydown", (e) => {
	if (e.key.toLowerCase() === "s" && e.shiftKey) {
		app.toggleSettings()
	}
})

document.addEventListener("keydown", (e) => {
	if (e.key.toLowerCase() === "l" && e.shiftKey) {
		app.toggleLang()
	}
})
document.addEventListener("keydown", (e) => {
	if (e.key.toLowerCase() === "q" && e.shiftKey) {
		quote.generate()
	}
})

document.addEventListener("scroll", () => {
	let i = window.scrollY
	if (i > 10) {
		app.select(`#navBar`).classList.remove("navBar-transparent")
	} else {
		app.select(`#navBar`).classList.add("navBar-transparent")
	}
})

document.addEventListener("DOMContentLoaded", () => {
	let l = app.getLanguage()
	if (l === `en`) {
		console.log(0)
	} else if (l === `jp`) {
		console.log(1)
	}
})

app.site()
