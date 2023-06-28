const kat = {
	audio: new Audio("./src/js/main.mp3"),
	message: `Happy Anniversary to the woman I love more than anything.`
}

kat.audio.volume = 0.5

document.addEventListener("keydown", (e) => {
	if (e.key.toLowerCase() === "p" && e.shiftKey) {
		kat.audio.play()
		document.documentElement.requestFullscreen()
	}
})
