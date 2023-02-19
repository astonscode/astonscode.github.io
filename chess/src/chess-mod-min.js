let boardHTML = "board-100"

let config = {
	draggable: true,
	position: "start",
	onDragStart: onDragStart,
	onDrop: onDrop,
	onMouseoutSquare: onMouseoutSquare,
	onMouseoverSquare: onMouseoverSquare,
	onSnapEnd: onSnapEnd
}

let board = Chessboard(boardHTML, config)

document.addEventListener("DOMContentLoaded", () => {
	console.log(board.position())
})

document.getElementById("accent-100").addEventListener("change", () => {
	document.documentElement.style.setProperty("--white", document.getElementById("accent-100").value)
})

document.getElementById("accent-200").addEventListener("change", () => {
	document.documentElement.style.setProperty("--black", document.getElementById("accent-200").value)
})

document.addEventListener("click", refreshPGN)

function boardMethod(method) {
	if (method == 1) {
		//flip
		board.flip()
	}
	if (method == 2) {
		//fen input
		let fenPos = prompt(`Pass FEN notation in the textbox below:`, `FEN Notation here...`)
		if (fenPos == "") {
			config.position = "start"
		} else {
			config.position = fenPos
		}
		refreshBoard(false)
	}
	if (method == 3) {
		if (config.showNotation == true) {
			notation = 1
		}
		if (config.showNotation == false) {
			notation = 0
		}
		if (notation == 1) {
			config.showNotation = false
		} else {
			config.showNotation = true
		}

		//saving position
		refreshBoard(true)

		board = Chessboard(boardHTML, config)
	} else {
		console.log(`...`)
	}
}

function refreshBoard(save) {
	if (save == true) {
		let x = board.fen()
		config.position = x
	} else {
		board = Chessboard(boardHTML, config)
	}
}

function refreshPGN() {
	let pgnArray = game
		.pgn()
		.split(/\d+\./)
		.filter(Boolean)
		.map((move) => move.split(",").map((value) => value.trim()))

	pgnArray.forEach((move) => {
		document.querySelector(`.pgn-list`).innerHTML = pgnArray
	})
	document.querySelector(`.pgn-list`).removeChild(document.querySelector(`.pgn-list`).firstChild)
	for (let i = 0; i < pgnArray.length; i++) {
		const item = pgnArray[i]
		const x = document.createElement("div")
		x.classList.add(`pgn-item`)
		x.textContent = item.join(", ")
		document.querySelector(`.pgn-list`).appendChild(x)
	}
}

var game = new Chess()
var whiteShadow = "inset 0 0 0 3px #fff"
var blackShadow = "inset 0 0 0 3px #fff"

function removeGreySquares() {
	$("#board-100 .square-55d63").css("box-shadow", "")
}

function greySquare(square) {
	var $square = $("#board-100 .square-" + square)

	var boxShadow = whiteShadow
	if ($square.hasClass("black-3c85d")) {
		boxShadow = blackShadow
	}

	$square.css("box-shadow", boxShadow)
}

function onDragStart(source, piece) {
	// do not pick up pieces if the game is over
	if (game.game_over()) return false

	// or if it's not that side's turn
	if ((game.turn() === "w" && piece.search(/^b/) !== -1) || (game.turn() === "b" && piece.search(/^w/) !== -1)) {
		return false
	}
}

function onDrop(source, target) {
	removeGreySquares()
	// see if the move is legal
	var move = game.move({
		from: source,
		to: target,
		promotion: "q" // NOTE: always promote to a queen for example simplicity
	})

	// illegal move
	if (move === null) return "snapback"
}

function onMouseoverSquare(square, piece) {
	// get list of possible moves for this square
	var moves = game.moves({
		square: square,
		verbose: true
	})

	// exit if there are no moves available for this square
	if (moves.length === 0) return

	// highlight the square they moused over
	greySquare(square)

	// highlight the possible squares for this piece
	for (var i = 0; i < moves.length; i++) {
		greySquare(moves[i].to)
	}
}

function onMouseoutSquare(square, piece) {
	removeGreySquares()
}

function onSnapEnd() {
	board.position(game.fen())
}
