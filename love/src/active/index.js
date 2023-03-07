function prevCheck() {
	if (localStorage.getItem(`bg-color`) != null) {
		document.getElementById(`top`).style.backgroundColor = localStorage.getItem(`bg-color`)
		document.getElementById("colorInput").value = localStorage.getItem(`bg-color`)
	} else {
		document.getElementById(`top`).style.backgroundColor = "#ad3e58"
	}
}

function rollRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

let arrayInt = 1
let activeArray

const quotes = ["i love you so much.", "i want you to spend everyday with me.", "why can't you be here right now?", "stop not kissing me please", "be so for real", "i miss her so much even though she's right here", "i swear i'm okay", "our kids are gonna be beautiful", "i wonder what our house is gonna look like", "please just hug me", "i'm cold, i need a hug", "I'm missing from you", "You have my heart and my dick", "When I look at your eyes I am home", "I will never leave you my love", "If I said I won't leave, just know I mean that shit", "Hold my hand, I'll hold yours forever"]

const quotes2 = ["idc if your legs are shaking, we're done when i say we are", "let's aggressively make out until we're out of breath", "i can't live life without you (and your fine ass)", "when we're alone, i'm gonna make you forget your name and why you're here", "untying your bra is the only thing ill ever do behind your back, besides dicking you down", "im gonna give you the most earth shattering orgasm youll ever have", "ill never find another girl like you, because you're just so fine"]

if (arrayInt == 0) {
	activeArray = quotes
} else if (arrayInt == 1) {
	activeArray = quotes2
} else {
	console.log(`uhm...`)
}

let int = rollRandom(0, activeArray.length - 1)

document.getElementById(`item`).innerHTML = quotes[int]

localStorage.setItem("pastInt", int)

if (int == localStorage.getItem("pastInt")) {
	let newInt = rollRandom(0, activeArray.length - 1)
	document.getElementById(`item`).innerHTML = activeArray[int]
}

localStorage.setItem("arrayInt", arrayInt)
let localInt = localStorage.getItem("arrayInt")

if (localInt != undefined) {
	arrayInt = localInt
} else {
	console.log(localStorage)
}

document.getElementById("colorInput").addEventListener("change", bgColor)

function bgColor() {
	let newColor = document.getElementById("colorInput").value
	document.getElementById(`top`).style.backgroundColor = newColor
	localStorage.setItem(`bg-color`, newColor)
	console.log("%cupdate.pup", "background: #ad3e58; color: white; padding: 8px; margin: 8px;", `Background color changed to ${newColor}.`)
}

prevCheck()
