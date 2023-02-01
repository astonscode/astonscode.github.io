function toggleWindow(windowId) {
	//window id array [1: Title Screen, 2: Titles Window, 3: Start Menu, 4: Shop, 5: Profile, 6: Customize Gameplay, 7: Settings]
	if (windowId == 1) {
		titleWindow.classList.toggle("active")
		titlesWindow.classList.remove("active")
		startWindow.classList.remove("active")
		shopWindow.classList.remove("active")
		profileWindow.classList.remove("active")
		customizeWindow.classList.remove("active")
	} else if (windowId == 2) {
		titlesWindow.classList.toggle("active")
		startWindow.classList.remove("active")
		shopWindow.classList.remove("active")
		profileWindow.classList.remove("active")
		customizeWindow.classList.remove("active")
	} else if (windowId == 3) {
		titleWindow.classList.remove("active")
		titlesWindow.classList.remove("active")
		startWindow.classList.toggle("active")
		shopWindow.classList.remove("active")
		profileWindow.classList.remove("active")
		customizeWindow.classList.remove("active")
	} else if (windowId == 4) {
		titlesWindow.classList.remove("active")
		startWindow.classList.remove("active")
		shopWindow.classList.toggle("active")
		profileWindow.classList.remove("active")
		customizeWindow.classList.remove("active")
	} else if (windowId == 5) {
		titlesWindow.classList.remove("active")
		startWindow.classList.remove("active")
		shopWindow.classList.remove("active")
		profileWindow.classList.toggle("active")
		customizeWindow.classList.remove("active")
	} else if (windowId == 6) {
		titlesWindow.classList.remove("active")
		startWindow.classList.remove("active")
		shopWindow.classList.remove("active")
		profileWindow.classList.remove("active")
		customizeWindow.classList.toggle("active")
	} else {
		console.log(`uh...`)
	}
}
