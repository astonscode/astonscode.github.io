function quadratics(a, b, c) {
	let plus = (b * -1 + Math.sqrt(Math.pow(b, 2) - -4 * a * c)) / (2 * a)
	let minus = (b * -1 - Math.sqrt(Math.pow(b, 2) - -4 * a * c)) / (2 * a)

	console.log("%cCALC", "background: #047eff;  padding: 4px; margin: 8px; color: white", `± [${plus.toFixed(2)}, ${minus.toFixed(2)}]`)
}
