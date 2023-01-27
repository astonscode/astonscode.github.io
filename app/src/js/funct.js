// variable declaration
let userName = "Aiziru"
let userLevel = 511
let userElo = "2545"
const maxLevel = 500
let userTitle
let colorVal

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
		name: `aizi`,
		level: 500,
		email: `niggasinparis@gmail.com`,
		password: `something-robust`,
		enableLeveling: true,
		tagged: false,
		src: `/src/img/pfps/img_0.png`,
		title: 4,
		devBadges: `construction`,
		elo: 2545
	},
	{
		id: 1673535348908,
		name: `Codex`,
		level: 500,
		email: `test@decodex.io`,
		password: `seems-fishy`,
		enableLeveling: true,
		tagged: false,
		src: `/src/img/pfps/img_2.png`,
		title: 4,
		devBadges: `code_blocks`,
		elo: 3700
	},
	{
		id: 1673617385860,
		name: `noolan`,
		level: 350,
		email: `nolan.rau@gmail.com`,
		password: `imadingus`,
		enableLeveling: true,
		tagged: false,
		src: ``,
		elo: 400
	}
]

function log(label, color, log) {
	console.log(`%c${label}`, `padding: 4px;margin:8px;background-color:${color};color:#fff`, log)
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
}

function createGame(id, id2, white) {
	// P1 Config Visuals
	configPlayer(id, 1)
	configPlayer(id2, 2)

	log("GAME", "#0c9496", `A game has been made between users ${userTable[id].name} (${userTable[id].elo}) and ${userTable[id2].name} (${userTable[id2].elo}). `)
	if (white == 0) {
		log("GAME", "#0c9496", `${userTable[id].name} moves first.`)
	} else {
		log("GAME", "#0c9496", `${userTable[id2].name} moves first.`)
	}
}

function move() {}

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
	return `${curHours.toString().padStart(2, "0")}:${curMinutes.toString().padStart(2, "0")}${checkAm ? "a" : "p"}`
}

setInterval(() => {
	const now = new Date()
	timeDisplay.textContent = formatTime(now)
	checkTime()
}, 20)

function runCode() {
	log("WEB", "#fcca03", `Content loaded.`)
	createGame(0, 1, 1)
}

document.addEventListener("DOMContentLoaded", runCode)
