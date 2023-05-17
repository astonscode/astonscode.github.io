//example of object-orientation style
let player = {
    score: 0,
    multiplier: 1,
    scoreInt: 10,
    getScore: function() {
        return score + multiplier * scoreInt
    }
}

player.getScore()

const web = {
    webId: rollRandom(10000000, 99999999),
    quotes: [{
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
    ],
    quoteId: rollRandom(0, quotes.length - 1),
    genQuote: function() {
        document.querySelector(`.header-sub`).innerHTML = `"${quotes[quoteId].quote}" - ${quotes[quoteId].verse}`
    }
}

const app = {
    startupSound: new Audio("/src/audio/startup.mp3"),
    rollRandom: function() {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },
    clientId: app.rollRandom(10000000, 99999999),
    searchToggled: false,
    start: function() {
        document.getElementById("startupModal").classList.add("active")
        document.querySelector(".ui-web").classList.remove("active")
        document.getElementById("startupBar").classList.add("active")
        document.getElementById("startupVersion").classList.add("active")
        startupSound.loop = false
        startupSound.play()
    }
}

const search = {
    searchInput: document.getElementById("searchInput").value
}