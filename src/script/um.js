/*
function checkTime() {
	let curTime = new Date()
	let hour = curTime.getHours()
}
*/

function formatTime(date) {
	const curHours = date.getHours() % 12 || 12
	const curMinutes = date.getMinutes()
	const checkAm = date.getHours() < 12
	return `${curHours.toString().padStart(2, "0")}:${curMinutes.toString().padStart(2, "0")}${checkAm ? "a" : "p"}
        `
}

setInterval(() => {
	const now = new Date()
	console.log(formatTime(now))
	// checkTime()
}, 20)


const classes = [
    {
        title: "MUS 250: Jazz Ensemble", 
        instructor: "Brian DiBlassio",
        timeX: 11,
        timeY: 12.25
        }, 
    
    {}, {}
]