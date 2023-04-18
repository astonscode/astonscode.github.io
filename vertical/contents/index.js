function initializeNav() {
	const sections = document.querySelectorAll(`.section`)
	const navContainer = document.createElement(`nav`)
	const navItems = Array.from(sections).map((section) => {
		return `
           <div class="nav-item" data-for-section="${section.id}">
            <a href="#${section.id}" class="nav-link"></a>
            <span class="nav-label"> ${section.dataset.label} </span>
        </div>
        `
	})

	navContainer.classList.add("navBar")
	navContainer.innerHTML = navItems.join(``)

	const observer = new IntersectionObserver(
		(entries) => {
			document.querySelectorAll(`.nav-link`).forEach((navLink) => {
				navLink.classList.remove("nav-selected")
			})

			const visibleSection = entries.filter((entry) => entry.isIntersecting)[0]
			document.querySelector(`.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`).classList.add(`nav-selected`)
		},
		{threshold: 0.5}
	)

	sections.forEach((section) => {
		observer.observe(section)
	})

	document.body.appendChild(navContainer)
}

initializeNav()

function rollRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const quotes = [
	{
		quote: "He only is my rock and my salvation; I shall not be shaken.",
		verse: "Psalm 62:6"
	},
	{
		quote: "I am the way and the truth and the life. For no one comes to the Father except through me.",
		verse: "John 14:6"
	},
	{
		quote: "The Lord will fight for you. All you have to do is be still.",
		verse: "Exodus 14:14"
	},
	{
		quote: "I can do all things through Christ who gives me strength.",
		verse: "Phillipians 4:13"
	},
	{
		quote: "Verily I say unto you, in as much as ye have done it unto one of the least of these, my bretheren, ye have done it unto me. ",
		verse: "Matthew 25:40"
	}
]

function genQuote() {
	let quoteId = rollRandom(0, quotes.length - 1)
	document.querySelector(`.subtitle`).innerHTML = `"${quotes[quoteId].quote}" - ${quotes[quoteId].verse}`
}

genQuote()
