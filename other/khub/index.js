/*  // my code
const linkHTML = `https://nullclient.tech/api/data/profile?username=`

function getUserInfo(user) {
	const fullLink = `${linkHTML}${user.replace(/['"]+/g, "")}`
	fetch(fullLink)
		.then((response) => response.text())
		.then((data) => {
			const userData = data
			userArrayHTML.innerHTML = userData
		})
}

userInfo(`Ø%E2%A0%80`)
*/

// sort refactored

const linkHTML = `https://nullclient.tech/api/data/profile?username=`

async function getUserInfo(user) {
	try {
		const fullLink = `${linkHTML}${user}`
		let res = await fetch(fullLink)
		let data = await res.json()
		return data
	} catch (e) {
		console.error(e)
	}
}

// calls function
getUserInfo(`DecodeXツ`).then((data) => {
	console.log("%cUSER", "background: #505050; padding: 4px;color: white; margin: 8px", `User data loaded. (Profile: ${data[1].player_name}(${data[1].player_level}), ID: ${data[1].player_id})`)
})

/*
 Try some

 * totalXp/games*level(0.5)
 */
