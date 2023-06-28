userTitleArray = [
	//common
	"Hunted",
	"Hunter",
	"Enhanced",
	"Superspeed",
	"Zooming",
	"On Fire",
	"Flaming",
	"Precise",
	"Accurate",
	"Keycoder",
	"Veteran",
	//uncommon
	"Marksman",
	"Deadshot",
	"Reactive",
	//rare
	"Lightspeed",
	"Hyperspeed",
	//epic
	"Godspeed",
	"Inevitable",
	"Ultraviolet",
	"Flame Fist",
	"Force of Speed",
	//legendary
	"Velocitas",
	"Nora",
	"Flame God",
	"Flame Goddess",
	"Precise and Accurate",
	//mythical
	"Legend of Keycode",
	//unobtainable
	"Keycode Ascendant [MAX]",
	//special
	"Season 1 Keycode Semi-Finalist",
	"Season 1 Keycode Finalist",
	"Season 1 Keycode Champion",
	"Developer",
	"Frontend",
	"Backend",
	"Full-Stack",
	"Bot",
	"Stockfish's Rival",
	//limited
	"Alpha Bronze",
	"Alpha Silver",
	"Alpha Gold",
	"Alpha Platinum",
	"Alpha Diamond",
	"Alpha Champion",
	"Alpha Grand Champion",
	"Alpha Master",
	"Alpha Grandmaster",
	"Alpha Destroyer",
	"Alpha Titan",
	"Alpha Radiant",
	"Alpha Legend"
]

userTitleStyling = [
	// just styles title colors
	"color:  var(--common)",
	"color: var(--uncommon)",
	"color: var(--rare)",
	"color: var(--epic)",
	"color: var(--legendary)",
	"color: var(--mythical)",
	"color: var(--unobtainable)",
	"color: var(--special)",
	"color: var(--limited)",
	"color: #ec80ff",
	"color: #ff9c9c; text-shadow: 0 0 5px #ff000094"
]

function styleTitle(id) {
	if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 10) {
		document.querySelector(`.userTitle`).style = userTitleStyling[0]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 13) {
		document.querySelector(`.userTitle`).style = userTitleStyling[1]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 15) {
		document.querySelector(`.userTitle`).style = userTitleStyling[2]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 20) {
		document.querySelector(`.userTitle`).style = userTitleStyling[3]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 25) {
		document.querySelector(`.userTitle`).style = userTitleStyling[4]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) == 26) {
		document.querySelector(`.userTitle`).style = userTitleStyling[5]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) == 27) {
		document.querySelector(`.userTitle`).style = userTitleStyling[6]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 36) {
		document.querySelector(`.userTitle`).style = userTitleStyling[7]
	} else if (userTitleArray.indexOf(userTitleArray[userTable[id].title]) <= 49) {
		document.querySelector(`.userTitle`).style = userTitleStyling[8]
	} else {
		console.log(`uh...`)
	}
}

function levelChange(type, amt) {
	if (type == "add") {
		userLevel = userLevel + amt
	} else if (type == "subtract") {
		userLevel = userLevel - amt
	} else {
		console.log(`You can't do that.`)
	}

	if (userLevel >= maxLevel) {
		userLevel = maxLevel
		console.log("Max level reached.")
	}

	userChecking()
}

const userTable = [
	{
		id: 1673534922588,
		name: `aiziru`,
		level: 501,
		email: `niggasinparis@gmail.com`,
		password: `something-robust`,
		enableLeveling: true,
		tagged: false,
		src: `/src/img/pfps/img_0.png`,
		title: 49,
		devBadges: `construction`,
		elo: 2310,
		type: 0
	},
	{
		id: 1673535348908,
		name: `Codex 8.1`,
		level: 500,
		email: `test@decodex.io`,
		password: `seems-fishy`,
		enableLeveling: true,
		tagged: false,
		src: `/src/img/pfps/img_2.png`,
		title: 36,
		devBadges: `code_blocks`,
		elo: 3700,
		type: 1
	},
	{
		id: 1673617385860,
		name: `noolan`,
		level: 65,
		email: `nolan.rau@gmail.com`,
		password: `imadingus`,
		enableLeveling: true,
		tagged: false,
		src: ``,
		title: 2,
		elo: 400,
		type: 0
	},
	{
		id: 1674977457638,
		name: `User`,
		level: 1,
		email: `user@decodexuwu.github.io`,
		password: `eobardwithnomask`,
		enableLeveling: true,
		tagged: false,
		src: ``,
		title: 9,
		elo: 400,
		type: 2
	}
]

function log(label, color, log) {
	console.log(`%c${label}`, `padding: 4px;margin:8px;background-color:${color};color:#fff`, log)
}

function displayUser(id) {
	document.querySelector(`.miniImg`).src = userTable[id].src
	document.querySelector(`.userLevel`).innerHTML = `${userTable[id].level}`
	document.querySelector(`.userNameVal`).innerHTML = userTable[id].name
	document.querySelector(`.userTitle`).innerHTML = userTitleArray[userTable[id].title]
	userTitleArray.indexOf(userTitleArray[userTable[id].title])
	document.querySelector(`.userTitle`).style = userTitleStyling[1]
	styleTitle(id)
	levelCheck(id)

	if (userTable[id].src === ``) {
		document.querySelector(`.miniImg`).src = `./src/img/default_0.png`
	}
}

function configPlayer(id, playerSide) {
	log("GET", "#9532a8", userTable[id])
	if (playerSide == 1) {
		// defining html elements
		const p1pfpMin = document.querySelector(`#player-one.miniPfp`)
		const p1miniName = document.querySelector(`#player-one.miniNameVal`)
		const p1eloRating = document.querySelector(`#player-one.eloRating`)

		//manipulating said elements
		p1pfpMin.src = userTable[id].src
		p1miniName.innerHTML = userTable[id].name
		p1eloRating.innerHTML = `(${userTable[id].elo})`
	} else {
		const p2pfpMin = document.querySelector(`#player-two.miniPfp`)
		const p2miniName = document.querySelector(`#player-two.miniNameVal`)
		const p2eloRating = document.querySelector(`#player-two.eloRating`)

		p2pfpMin.src = userTable[id].src
		p2miniName.innerHTML = userTable[id].name
		p2eloRating.innerHTML = `(${userTable[id].elo})`
	}

	levelCheck(id)
}

function levelCheck(id) {
	let level = userTable[id].level
	if (level == 1) {
		document.querySelector(`.userLevel`).style.background = `linear-gradient(45deg, #6f6f6f, #595959)`
	}
	if (level >= 30) {
		document.querySelector(`.userLevel`).style.background = `linear-gradient(45deg, #67ff32, #99ff7d)`
	}
	if (level >= 60) {
		document.querySelector(`.userLevel`).style.background = `linear-gradient(45deg, #3275ff, #39efff)`
	}
	if (level >= 90) {
		document.querySelector(`.userLevel`).style.background = `linear-gradient(45deg, #c032ff, #d169ff)`
	}
	if (level >= 120) {
		document.querySelector(`.userLevel`).style.background = `linear-gradient(45deg, #ffcc6b, #ffa600)`
	} else {
		console.log(`hm...`)
	}
}

function createGame(id, id2, white) {
	// P1 Config Visuals
	configPlayer(id, 1)
	configPlayer(id2, 2)

	log("GAME", "#0c9496", `A game has been made between users ${userTable[id].name}(${userTable[id].elo}) and ${userTable[id2].name}(${userTable[id2].elo}).`)
	if (white == 0) {
		log("GAME", "#0c9496", `${userTable[id].name} moves first. `)
	} else {
		log("GAME", "#0c9496", `${userTable[id2].name} moves first.`)
	}
}

function genUserId() {
	return Date.now()
}

function changePassword(id, string) {
	if (typeof string == "string") {
		userTable[id].password = string
	} else {
		log("400", "#f55"`Could not change password.`)
	}
}

function tagPlayer(id, reason) {
	userTable[id].tagged = true
	userTable[id].enableLeveling = false
	console.log(`User ${userTable[id].id} flagged as a Hacker. Generating report... ("${reason}")`)
}

function checkTime() {
	let curTime = new Date()
	let hour = curTime.getHours()
}

function formatTime(date) {
	const curHours = date.getHours() % 12 || 12
	const curMinutes = date.getMinutes()
	const checkAm = date.getHours() < 12
	return `${curHours.toString().padStart(2, "0")}:${curMinutes.toString().padStart(2, "0")}${checkAm ? "a" : "p"}
        `
}

setInterval(() => {
	const now = new Date()
	timeDisplay.textContent = formatTime(now)
	checkTime()
}, 20)

function exec() {
	log("WEB", "#fcca03", "Content loaded.")
	createGame(0, 1, 1)
	displayUser(3)
	log("GET", "#9532a8", userTitleArray)
}

document.addEventListener("DOMContentLoaded", exec)
