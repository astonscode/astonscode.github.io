const body = document.body

let global = {
    errorCode: [{
            id: 404,
            desc: "No data."
        },
        {
            id: 200,
            desc: "We good."
        },
        {
            id: 201,
            desc: "We did it."
        }
    ],
    name: "Aston",
    version: "10.0.1",
    git: {
        commit: this.history[0],
        history: [{
                commit: "d91d6b2",
                branch: "main",
                date: "18.04.23"
            },
            {
                commit: "358589a",
                branch: "main",
                date: "07.03.23"
            },
            {
                commit: "2fb5fbe",
                branch: "main",
                date: "07.03.23"
            }
        ],
        link: "https://github.com/astonscode/astonscode.github.io",
        author: "astonscode (https://github.com/astonscode)"
    },
    log: function(txt, css, input) {
        console.log(`%c${txt}`, `${css}`, `${input}`)
    },
    x: new Audio("/src/audio/0.mp3")
}

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
        }, { threshold: 0.5 }
    )

    sections.forEach((section) => {
        observer.observe(section)
    })

    body.appendChild(navContainer)
}

initializeNav()

function rollRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let quote = {
    quotes: [{
            quote: "Truly he is my rock and my salvation; he is my fortress, I will not be shaken.",
            verse: "Psalms 62:6",
            src: "https://www.bible.com/bible/111/psa.62.6"
        },
        {
            quote: "I am the way and the truth and the life. For no one comes to the Father except through me.",
            verse: "John 14:6",
            src: "https://www.bible.com/bible/111/jhn.14.6"
        },
        {
            quote: "The Lord will fight for you. All you have to do is be still.",
            verse: "Exodus 14:14",
            src: "https://www.bible.com/bible/111/exo.14.14"
        },
        {
            quote: "I can do all things through Christ who gives me strength.",
            verse: "Phillipians 4:13",
            src: "https://www.bible.com/bible/111/php.4.13"
        },
        {
            quote: "Verily I say unto you, in as much as ye have done it unto one of the least of these, my bretheren, ye have done it unto me. ",
            verse: "Matthew 25:40",
            src: "https://www.bible.com/bible/111/mat.25.40"
        },
        {}
    ],
    link: function() {
        window.open(this.quotes[quoteId].src, "_blank")
    },
    generate: function() {
        quoteId = rollRandom(0, this.quotes.length - 1)
        document.querySelector(`.subtitle`).innerHTML = `<div id="mainQuote"> ${this.quotes[quoteId].quote} </div> <div id="quoteVerse" onclick="quote.link()">${this.quotes[quoteId].verse}</div>`
        document.getElementById(`mainQuote`).addEventListener(`click`, quote.regenerate)
    },
    regenerate: function() {
        quote.generate()
    },
    remove: function() {
        document.querySelector(`.subtitle`).innerHTML = ``
    }
}

let aston = {
    age: 17,
    height: 176,
    nicknames: ["Ash", "Ass", "That Nigga", "Daddy"],
    getAge: function() {
        return this.age
    },
    getHeight: function() {
        return this.height
    },
    genNick: function() {
        let x = rollRandom(0, this.nicknamves.length - 1)
        return this.nicknames[x]
    },
    modify: function(keyword, change) {
        if (keyword == "age") {
            this.age = change
        } else if (keyword == "height") {
            this.height = change
        } else if (keyword == "nicknames") {
            this.nicknames.push(change)
        } else if (keyword == "race") {
            this.race = change
        } else {
            console.log("bro doesnt know how to do code")
        }
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "s" && e.shiftKey) {
        document.getElementById("settingsWindow").classList.toggle("active")
        document.querySelector(".section").classList.toggle("transparent")
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "q" && e.shiftKey) {
        quote.generate()
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "e" && e.shiftKey) {
        document.getElementById("uh").classList.toggle("active")
        global.x.play()
    }
})

let mini = {}