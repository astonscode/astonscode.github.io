/* const game = {
	new: function () {
		console.log(`Resetting all data...`)
		this.global.night = 1
	},
	start: function () {
		console.log(`Starting night...`)
		console.log(`NIGHT ${this.global.night} // ${this.global.time} AM`)
	},
	global: {
		time: 12,
		night: 1
	},
	__room: {
		player: {
			position: [1, 0, 0, 0, 0], // Start Position, Looking at Bed, at Closet, at Left Door, at Right Door
			walkSpeed: 1,
			transpose: function (x) {
				if (x == 1) {
					console.log(`Position: Bed`)
					this.position = [1, 0, 0, 0, 0]
				}
				if (x == 2) {
					console.log(`Position: Closet`)
					this.position = [0, 1, 0, 0, 0]
				}
				if (x == 3) {
					console.log(`Position: Bed (Looking)`)
					this.position = [0, 0, 1, 0, 0]
				}
				if (x == 4) {
					console.log(`Position: Left Door`)
					this.position = [0, 0, 0, 1, 0]
				}
				if (x == 5) {
					console.log(`Position: Right Door`)
					this.position = [0, 0, 0, 0, 1]
				} else {
					console.log(`Error.`)
				}
			}
		},
		door: class {
			constructor(door) {
				this.door = door
				this.isOpened = true
				this.isFlashed = false
			}
			open() {
				console.log(`${this.door} opened.`)
				this.isOpened = true
			}
			close() {
				console.log(`${this.door} closed.`)
				this.isOpened = false
			}
			flash() {
				console.log(`${this.door} - flashlight is on.`)
				this.isOpened = true
				this.isFlashed = false
			}
			leave() {
				console.log(`Left ${this.door}.`)
				this.isOpened = true
				this.isFlashed = false
			}
		}
	}
}


const freddy = {
	aiLevel: 3,
	anger: 0,
	freddles: 0,
	attack: function () {
		setInterval(() => {
			freddy.anger = freddy.anger + freddy.aiLevel
			console.log(freddy)
		}, 4000)
	},
	check: function () {
		setInterval(() => {
			let anger = freddy.anger
			if (anger > 10) {
				console.log(`Freddles: 1`)
				freddy.freddles = 1
			}
			if (anger >= 20) {
				console.log(`Freddles: 2`)
				freddy.freddles = 2
			}
			if (anger >= 30) {
				console.log(`Freddles: 3`)
				freddy.freddles = 3
			}
			if (anger >= 60) {
				console.log(`Player died.`)
				freddy.attack = 0
				freddy.check = 0
			}
		}, 100)
	}
}
*/

const freddy = {
	aiLevel: 3,
	anger: 0,
	freddles: 0,
	attack: function () {
		setInterval(() => {
			freddy.anger += freddy.aiLevel
			console.log(freddy)
		}, 4000)
	},
	check: function () {
		let previousFreddles = 0 // Track the previous value of freddles to avoid redundant logging
		let intervalId = null // Store the interval ID

		const checkInterval = () => {
			let anger = freddy.anger

			if (anger > 10 && freddy.freddles !== 1) {
				console.log(`Freddles: 1`)
				freddy.freddles = 1
			}
			if (anger >= 20 && freddy.freddles !== 2) {
				console.log(`Freddles: 2`)
				freddy.freddles = 2
			}
			if (anger >= 30 && freddy.freddles !== 3) {
				console.log(`Freddles: 3`)
				freddy.freddles = 3
			}
			if (anger >= 60 && previousFreddles !== freddy.freddles) {
				console.log(`Player died.`)
				previousFreddles = freddy.freddles // Update the previous value to avoid redundant logging
			}
		}

		// Clear the previous interval, if any, and start a new one
		const startChecking = () => {
			clearInterval(intervalId)
			intervalId = setInterval(checkInterval, 100)
		}

		// Start checking initially
		startChecking()

		// Whenever freddy.freddles changes, restart the interval
		Object.defineProperty(freddy, "freddles", {
			set: function (value) {
				this._freddles = value
				startChecking()
			},
			get: function () {
				return this._freddles
			}
		})
	}
}
