class Game {
    constructor(aiEnabled = false, aiOptions = null) {
        this.turn = 1
        this.playerTurn = 0
        this.playerTurnTranslated = "X"
        this.boxes = []
        this.moveList = []
        this.ableToMove = true
        this.scores = [0,0]
        this.aiEnabled = aiEnabled
        this.ai = aiEnabled && aiOptions ? new CPU(this, aiOptions.goingFirst, aiOptions.skill) : null

        this.scaffold()
        this.checkWin()
        this.detect()
        this.updateScores()
        
        if (this.aiEnabled && this.ai.goingFirst) {
            this.aiMove() // Make the first AI move if AI is going first
        }
    }

    scaffold() {
        for (let i = 0; i < document.getElementById("game").children.length; i++) {
            this.boxes.push(document.getElementById("game").children[i])
        }
    }

    checkWin() {
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6]             // Diagonal
        ]
    
        const highlightBoxes = (indices, className) => {
            indices.forEach(index => {
                this.boxes[index].classList.add(className)
            })
        }
    
        for (const combination of combos) {
            const [a, b, c] = combination
            if (this.boxes[a].innerHTML === "X" && this.boxes[b].innerHTML === "X" && this.boxes[c].innerHTML === "X") {
                console.log(`Victory: X`)
                this.scores[0]++
                highlightBoxes(combination, 'highlight-x')
                this.ableToMove = false
                this.updateScores()
                return true
            } else if (this.boxes[a].innerHTML === "O" && this.boxes[b].innerHTML === "O" && this.boxes[c].innerHTML === "O") {
                console.log(`Victory: O`)
                this.scores[1]++
                highlightBoxes(combination, 'highlight-o')
                this.ableToMove = false
                this.updateScores()
                return true
            }
        }
    
        // Check for draw
        const allFilled = Array.from(this.boxes).every(box => box.innerHTML === "X" || box.innerHTML === "O")
        if (allFilled) {
            console.log(`Draw...`)
            highlightBoxes([...Array(9).keys()], 'drawn') // Highlight all boxes
            this.ableToMove = false
            this.updateScores()
            return true
        }
    
        return false
    }

    detect() {
        for (let i = 0; i < this.boxes.length; i++) {
            this.boxes[i].addEventListener("click", () => {
                if (this.ableToMove && this.boxes[i].innerHTML === "") {  // Check if the box is empty
                    console.log(`${this.playerTurnTranslated} at`, this.boxes[i])
                    this.moveList.push(i)
                    console.log(this.moveList)
                    this.boxes[i].innerHTML = this.playerTurnTranslated

                    if (!this.checkWin()) {
                        this.turn++
                        this.playerTurn = 1 - this.playerTurn  // Switch player turn
                        this.turnTranslate()
                        if (this.aiEnabled && this.ai && this.playerTurnTranslated === this.ai.mark) {
                            this.aiMove()
                        }
                    }
                } else if (!this.ableToMove) {
                    console.log(`Reset game to play again.`)
                } else {
                    console.log(`Box already filled. Choose another one.`)
                }
            })
        }
    }

    aiMove() {
        if (this.aiEnabled && this.ai) {
            setTimeout(() => {
                this.ai.move()
                if (!this.checkWin()) {
                    this.turn++
                    this.playerTurn = 1 - this.playerTurn  // Switch player turn
                    this.turnTranslate()
                }
            }, 500) // Add delay for AI move for better UX
        }
    }

    reset() {
        for (let i = 0; i < this.boxes.length; i++) {
            this.boxes[i].innerHTML = ``
            this.boxes[i].classList.remove("highlight-x")
            this.boxes[i].classList.remove("highlight-o")
            this.boxes[i].classList.remove("drawn")
        }
        this.turn = 0
        this.playerTurn = 0
        this.playerTurnTranslated = "X"
        this.moveList = []
        this.ableToMove = true
        console.log(`[GAME] Game reset.`)
        if (this.aiEnabled && this.ai && this.ai.goingFirst) {
            this.aiMove() // Make the first AI move if AI is going first
        }
    }

    turnTranslate() {
        switch (this.playerTurn) {
            case 0: 
                this.playerTurnTranslated = "X"
                document.getElementById("playerAScore").classList.toggle("active")
                document.getElementById("playerBScore").classList.toggle("active")
                break
            case 1: 
                this.playerTurnTranslated = "O"
                document.getElementById("playerAScore").classList.toggle("active")
                document.getElementById("playerBScore").classList.toggle("active")
                break
        }
    }

    updateScores() {
        document.getElementById("playerAScore").innerHTML = this.scores[0]
        document.getElementById("playerBScore").innerHTML = this.scores[1]
    }
}

class CPU {
    constructor(reference, goingFirst, skill) {
        this.reference = reference
        this.turn = reference.turn
        this.goingFirst = goingFirst ? true : false
        this.isMyTurn = this.currentTurn()
        this.random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
        this.mark = goingFirst ? "X" : "O"

        this.skill = skill

        this.currentTurn()
    }

    currentTurn() {
        return this.turn % 2 === (this.goingFirst ? 0 : 1)
    }

    move() {
        let moveMade = false
        switch(this.skill) {
            case 0: // Literal Ash Baby (Completely Random)
                while (!moveMade) {
                    const index = this.random(0, 8)
                    if (this.reference.boxes[index].innerHTML === "") {
                        this.reference.boxes[index].innerHTML = this.mark
                        this.reference.moveList.push(index)
                        moveMade = true
                        console.log(`AI (${this.mark}) at`, this.reference.boxes[index])
                    }
                }
                break
            case 1:
                if (this.turn == 1 && this.goingFirst) {
                    let corners = [0, 2, 6, 9]
                    let index = this.random(0, corners.length)
                    console.log(index)
                    console.log(corners[index])

                    if (this.reference.boxes[corners[index]].innerHTML == "") {
                        this.reference.boxes[corners[index]].innerHTML = this.mark
                        this.reference.moveList.push(corners[index])
                        moveMade = true
                        console.log(`AI (${this.mark}) at`, this.reference.boxes[corners[index]])
                    }
                }
        }
    }
}

const _instance = new Game(false)
