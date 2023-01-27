function toggleWindow(windowId) {
	if (windowId == 1) {
		document.getElementById(`profileWindow`).classList.toggle(`active`)
	}
	if (windowId == 2) {
		document.getElementById(`titleWindow`).classList.remove(`active`)
		document.getElementById(`titleWindow`).classList.add(`inactive`)
		document.getElementById(`startWindow`).classList.remove(`inactive`)
		document.getElementById(`startWindow`).classList.add(`active`)
	}
	if (windowId == 3) {
		document.getElementById(`startWindow`).classList.add(`inactive`)
		document.getElementById(`startWindow`).classList.remove(`active`)
		document.getElementById(`gameWindow`).classList.remove(`inactive`)
		document.getElementById(`gameWindow`).classList.add(`active`)
	}
	if (windowId == 4) {
	}
}
