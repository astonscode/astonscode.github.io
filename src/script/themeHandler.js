let theme = 0

function changeTheme() {
	if (theme == 0) {
		themeLink.setAttribute("href", `src/css/theme_li.css`)
		theme = 1
		console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Theme changed to Light Mode.`)
		document.querySelector(`.themeIcon`).innerHTML = `roller_shades`
	} else {
		themeLink.setAttribute("href", `src/css/theme_de.css`)
		theme = 0
		console.log("%cUSER", "background: #047eff; border-radius: 3px; padding: 0 4px", `Theme changed to Dark Mode.`)
		document.querySelector(`.themeIcon`).innerHTML = `roller_shades_closed`
	}
}

function handleThemeInput() {
	if (clientTheme == 0) {
	}
}

const themeInput = document.querySelector(`.themeInput`)

let directory = "/css/client_themes"
let themeArray = [
	{
		theme: `Default I`,
		src: "/css/theme_de.css"
	},
	{
		theme: `Default II`,
		src: "/css/theme_li.css"
	},
	{
		theme: `Aston I`,
		src: `${directory}/aston.css`
	},
	{
		theme: `Josin I`,
		src: `${directory}/josin.css`
	},
	{
		theme: `Kat I`,
		src: `${directory}/kat.css`
	}
]
