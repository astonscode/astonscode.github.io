let boardHTML = "board-100"

let config = {
    draggable: true,
    moveSpeed: "medium",
    snapbackSpeed: 50,
    snapSpeed: 50,
    position: "start",
    showNotation: false
}

let board = Chessboard(boardHTML, config)

document.addEventListener("DOMContentLoaded", () => {
    console.log(board.position())
})

function boardMethod(method) {
    if (method == 1) {
        //flip
        board.flip()
    }
    if (method == 2) {
        //fen input
        let fenPos = prompt(`Pass FEN notation in the textbox below:`, `FEN Notation here...`)
        config.position = fenPos
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