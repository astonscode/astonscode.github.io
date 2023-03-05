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

const quotes = ["i love you so much.", "i want you to spend everyday with me.", "why can't you be here right now?", "stop not kissing me please", "be so for real", "i miss her so much even though she's right here", "i swear i'm okay", "our kids are gonna be beautiful", "i wonder what our house is gonna look like", "please just hug me", "i'm cold, i need a hug", ""]

let int = rollRandom(0, quotes.length - 1)

document.getElementById(`item`).innerHTML = quotes[int]

localStorage.setItem("pastInt", int)

if (int == localStorage.getItem("pastInt")) {
	let newInt = rollRandom(0, quotes.length - 1)
	document.getElementById(`item`).innerHTML = quotes[int]
}

document.getElementById("colorInput").addEventListener("change", bgColor)

function bgColor() {
	let newColor = document.getElementById("colorInput").value
	document.getElementById(`top`).style.backgroundColor = newColor
	localStorage.setItem(`bg-color`, newColor)
	console.log("%cupdate.pup", "background: #ad3e58; color: white; padding: 8px; margin: 8px;", `Background color changed to ${newColor}.`)
}

prevCheck()
