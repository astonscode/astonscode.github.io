let userTitleArray = [
	// 0-12 (Leveling), 13-22 (Enhancements), 23-25 (Gameplay Rewards), 26-43 (Limited Titles), 44-48 (Special Titles)
	//Leveling Titles
	"Hunted", // LVL 30+
	"Hunter", // LVL 50+
	"Marksman", // LVL 80+
	"Deadshot", // LVL 100+
	"Reactive", // LVL 150+
	"Lightspeed", // LVL 200+
	"Hyperspeed", // LVL 250+
	"Godspeed", // LVL 300+
	"Inevitable", // LVL 350+
	"Ultraviolet", // LVL 400+
	"Velocitas", // LVL 450+
	"Legend of Keycode", // LVL 500+
	"Keycode Ascendant [MAX]", // LVL 500+
	// Achievement Titles
	"Enhanced", // Unlock an Enhancement

	"Superspeed", // Unlock Flash II
	"Zooming", // Unlock Flash III
	"Run, Barry, Run", // Unlock Flash IV
	"CSI", //Unlock Flash V

	"On Fire", // Unlock Flame II
	"Flaming", // Unlock Flame III
	"Flame Fist", // Unlock Flame IV
	"Flame God", // Unlock Flame V
	"Flame Goddess", // Unlock Flame V

	"Precise", // Achieve an accuracy of or above 95%
	"Accurate", // Achieve an accuracy of or above 98%
	"Precise and Accurate", // Achieve an accuracy of 100%

	//Limited Titles
	"Keycoder",
	"Veteran",
	"Season 1 Keycode Semi-Finalist",
	"Season 1 Keycode Finalist",
	"Season 1 Keycode Champion",

	// // Rank Titles
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
	"Alpha Legend",

	// //Special Titles
	"Developer",
	"Frontend",
	"Backend",
	"Full-Stack",
	"Robert"
]

let userTitleStyling = [
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

/* -------------------------------------------------------------------------------------------------------------- */

const healthValP1 = document.getElementById("player1-health")
const healthValP2 = document.getElementById("player2-health")

const keyPreview100 = document.querySelector(".keyPreview.key100")
const keyCount100 = document.querySelector(".keyCounter.id-100")
let count100 = 0
keyCount100.innerHTML = count100
let key100 = "a"

const keyPreview200 = document.querySelector(".keyPreview.key200")
const keyCount200 = document.querySelector(".keyCounter.id-200")
let count200 = 0
keyCount200.innerHTML = count200
let key200 = "s"

const keyPreview300 = document.querySelector(".keyPreview.key300")
const keyCount300 = document.querySelector(".keyCounter.id-300")
let count300 = 0
keyCount300.innerHTML = count300
let key300 = "k"

const keyPreview400 = document.querySelector(".keyPreview.key400")
const keyCount400 = document.querySelector(".keyCounter.id-400")
let count400 = 0
keyCount400.innerHTML = count400
let key400 = "l"

const streakVal = document.querySelector(".gameStat.p1-streak")
let streakValue = count100 + count200 + count300 + count400
streakVal.innerHTML = streakValue

let score = 0
let acc = 0

let numOp

let scoreArray = [-10, 25, 50, 75, 100, 125]

let songRank

// health functions

let healthP1 = 1000
const healthBarP1 = document.querySelector(".playerHealthBar")
const healthBarInnerP1 = document.querySelector(".playerHealthBarInner")

let healthP2 = 1000
// (dsv) const healthBarP2 = document.querySelector(".enemyHealthBar")
// (dsv) const healthBarInnerP2= document.querySelector(".enemyHealthBarInner")

function doHitDamage(lvl, enemy, player) {
	if (player == 1) {
		healthP1 = healthP1 - 6 * lvl
		healthValP1.innerHTML = healthP1.toFixed(2)
		healthBarInnerP1.style.width = `${healthP1 / 10}%`
	} else if (player == 2) {
		healthP2 = healthP2 - 3 * lvl
		healthValP2.innerHTML = healthP2.toFixed(2)
	} else {
		console.log(`Impossible, ばかない。`)
	}

	if (healthP1 <= 0) {
		healthP1 = 0
		healthValP1.innerHTML = `0.00 [Failed] `
		healthBarInnerP1.style.width = `0%`
	}
}

const enemies = {
	enemy1: {
		name: `Z`,
		attackVal: 6
	},
	enemy2: {
		name: `X`,
		attackVal: 12
	},
	enemy3: {
		name: `C`,
		attackVal: 18
	},
	enemy4: {
		name: `V`,
		attackVal: 24
	},
	enemy5: {
		name: `B`,
		attackVal: 30
	}
}

class Zombie {
	constructor() {
		this.health = 900
		this.level = 1
	}
}

class Skeleton {
	constructor() {
		this.health = 450
		this.level = 1
	}
}

document.addEventListener("keydown", (e) => {
	if (e.key.toLowerCase() === key100) {
		doKeyPress(1)
	}
	if (e.key.toLowerCase() === key200) {
		doKeyPress(2)
	}

	if (e.key.toLowerCase() === key300) {
		doKeyPress(3)
	}

	if (e.key.toLowerCase() === key400) {
		doKeyPress(4)
	}
})

document.addEventListener("keyup", () => {
	keyPreview100.classList.remove("pressed")
	keyPreview200.classList.remove("pressed")
	keyPreview300.classList.remove("pressed")
	keyPreview400.classList.remove("pressed")
})

let newScore = 0

function incrScore(bool, amount) {
	if (bool == true) {
		newScore = newScore + amount
	}

	if (bool == false) {
		newScore = newScore - amount
	}

	if (newScore > 0) {
		numOp = `+`
	}

	if (newScore == 0) {
		numOP = `-`
	}
	document.getElementById(`player1-score`).innerHTML = `${numOp}${newScore}`
}

function doKeyPress(key) {
	if (key == 1) {
		count100 = count100 + 1
		keyCount100.innerHTML = count100
		keyPreview100.classList.toggle("pressed")
	} else if (key == 2) {
		count200 = count200 + 1
		keyCount200.innerHTML = count200
		keyPreview200.classList.toggle("pressed")
	} else if (key == 3) {
		count300 = count300 + 1
		keyCount300.innerHTML = count300
		keyPreview300.classList.toggle("pressed")
	} else if (key == 4) {
		count400 = count400 + 1
		keyCount400.innerHTML = count400
		keyPreview400.classList.toggle("pressed")
	} else {
		console.warn(`Invalid use.`)
	}
	readStreak(false)
	readAccuracy()
	incrScore(true, scoreArray[5])
}

function readStreak(miss) {
	streakValue = count100 + count200 + count300 + count400

	if (miss == false) {
		console.log(`Current Streak: ${streakValue}`)
	}

	if (miss == true) {
		streakValue = 0
		console.log(`Current Streak: ${streakValue}`)
		console.log(`Streak broken!`)
	}

	streakVal.innerHTML = streakValue
}

function readAccuracy() {
	acc = 50 + (count100 + count200 + count300 + count400) / 5
	document.querySelector(`.p1-acc`).innerHTML = `${acc}% (${songRank})`

	if (acc < 25) {
		songRank = `D`
	} else if (acc < 50) {
		songRank = `C`
	} else if (acc < 75) {
		songRank = `B`
	} else if (acc < 85) {
		songRank = `A (SDCB)`
	} else if (acc < 90) {
		songRank = `S (SDCB)`
	} else if (acc < 95) {
		songRank = `SS (SDCB)`
	} else if (acc < 99) {
		songRank = `X (SDCB)`
	} else if (acc >= 100) {
		songRank = `X+ (MFC)`
		acc = 100
		document.querySelector(`.p1-acc`).innerHTML = `100% (MFC)`
	} else {
		console.warn(`What the fuck did you do????`)
	}
}

// User Profiles

const player1Img = document.querySelector("img#player-one")
const player2Img = document.querySelector("img#player-two")

const player1Name = document.querySelector("#player-one.playerNameVal")
const player2Name = document.querySelector("#player-two.playerNameVal")

const player1Level = document.querySelector("#player-one.playerLevel")
const player2Level = document.querySelector("#player-two.playerLevel")

const player1Title = document.querySelector("#player-one.playerTitle")
const player2Title = document.querySelector("#player-two.playerTitle")

const player1Streak = document.querySelector("#player-one.playerStreak")
const player2Streak = document.querySelector("#player-two.playerStreak")

function playerConfig(player, name, streak) {}

const playerArray = {
	player1: {
		name: `aizi`,
		level: 500,
		title: userTitleArray[30],
		src: `img_0.png`
	},

	player2: {
		name: `Iona`,
		level: 250,
		title: userTitleArray[22],
		src: `img_1.png`
	}
}
