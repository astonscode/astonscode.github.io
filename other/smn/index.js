const songList = [
	{
		song: "Intro",
		artists: "aston.",
		duration: "0:59",
		id: 1
	},
	{
		song: "promises (feat. Travis Scott)",
		artists: "aston.",
		duration: "2:38",
		id: 2
	},
	{
		song: "rooftops",
		artists: "aston.",
		duration: "3:08",
		id: 3
	},
	{
		song: "FELL OFF (feat. Kendrick Lamar and Future)",
		artists: "aston.",
		duration: "2:54",
		id: 4
	},
	{
		song: "starry night with you (feat. SZA, Don Toliver, and Kid Cudi)",
		artists: "aston.",
		duration: "3:46",
		id: 5
	},
	{
		song: "peace (A Poem)",
		artists: "aston.",
		duration: "1:11",
		id: 6
	},
	{
		song: "Time to Go (feat. Kanye West)",
		artists: "aston.",
		duration: "2:40",
		id: 7
	},
	{
		song: "we're in this together",
		artists: "aston. and kat",
		duration: "3:13",
		id: 8
	},
	{
		song: "sentiendo (feat. MF Josin)",
		artists: "aston.",
		duration: "2:21",
		id: 8
	}
]

class albumListing {
	constructor() {
		this.albumList = document.getElementById(`songItems`)
		this.genSongs()
	}

	genSongs() {
		for (let i = 0; i < songList.length; i++) {
			let elm = songList[i]
			this.albumList.innerHTML += `
    <div id="songItem"> 
                <div class="trackNo"> ${elm.id}</div>
                <div class="trackName">
                    <div class="songName"> ${elm.song} </div>
                    <div class="trackArtists"> ${elm.artists} </div>
                </div>
                <div class="trackDuration"> ${elm.duration} </div>
            </div>`
		}
	}
}

new albumListing()
