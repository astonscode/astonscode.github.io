function toggleFunc(func) {
	if (func == "loading") {
		warning.classList.add("prioritized")
	} else {
		console.log(`oh`)
	}
}

const charList = [
	{
		name: `Miguel`,
		id: 0
	},
	{
		name: `Aston`,
		id: 1
	},
	{
		name: `Josin`,
		id: 2
	},
	{
		name: `Robert`,
		id: 3
	},
	{
		name: `Jonathan`,
		id: 4
	},
	{
		name: `Nolan`,
		id: 5
	}
]

/* 
Char List
1. Miguel
2. Aston
3. Josin
4. Robert
5. Jonathan
6. Nolan
7. Christian
8. Sima
9. Lynnzie
10. Kat
11. Faith
12. Aaron
13. Carter
14. Napoleon
15. Noel
16. Yanna
17. Spencer

 -- DLC Packs
 
 Pack 1:
 1: Mr. Rob
 2. Mr. Myers
 3. Mr. Clary

 Pack 2:
 1. Halloween Kat
 2. Halloween Aston
 3. Halloween Jonathan 
*/

const activeChars = Array.from(document.querySelectorAll(`.charItem.available`))
