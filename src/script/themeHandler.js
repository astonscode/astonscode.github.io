let theme = 0

function changeTheme() {
	if (theme == 0) {
		themeLink.setAttribute("href", `src/css/theme_li.css`)
		theme = 1
		console.log("%cUSER", "background: #047eff; border-radius: 4px 0; padding: 4px;color: white", `Theme changed to Light Mode`)
		document.querySelector(`.themeIcon`).innerHTML = `roller_shades`
	} else {
		themeLink.setAttribute("href", `src/css/theme_de.css`)
		theme = 0
		console.log("%cUSER", "background: #047eff; border-radius: 4px 0; padding: 4px;color: white", `Theme changed to Dark Mode`)
		document.querySelector(`.themeIcon`).innerHTML = `roller_shades_closed`
	}
}

function handleThemeInput() {
	if (clientTheme == 0) {
	}
}

const themeInput = document.querySelector(`.themeInput`)

function themeChecking() {
	themeValue = document.querySelector(`.themeInput`).value
	if (themeValue == "Default I") {
		themeLink.setAttribute("href", `src/css/theme_de.css`)
	} else if (themeValue == "Aston I") {
		themeLink.setAttribute("href", `src/${directory}/aston.css`)
	} else if (themeValue == "Josin I") {
		themeLink.setAttribute("href", `src/${directory}/josin.css`)
	} else if (themeValue == "Kat I") {
		themeLink.setAttribute("href", `src/${directory}/kat.css`)
	}
}

function themeCollection() {
	themeArray = [
		{
			name: "Aston I",
			collected: true,
			id: 0
		},
		{
			name: "Developer",
			collected: true,
			id: 1
		},
		{
			name: "Yannmatrix",
			collected: true,
			id: 2
		}
	]
	initialize = () => {
		class themeWindow {
			constructor() {
				this.themeList = document.querySelector(`.themeList`)
				this.genThemes()
			}

			genThemes() {}
		}
	}
}
