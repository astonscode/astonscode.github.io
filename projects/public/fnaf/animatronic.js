const pathMatrixA = ["Show Stage", "Dining Hall", "West Hallway", "West Closet", "West Corner", "Left Door", "Office"]
const pathMatrixB = ["Show Stage", "Dining Hall", "Kitchen", "Bathrooms", "East Hallway", "East Corner", "East Door", "Office"]

class Animatronic {
    constructor(name, aiLevel, timeToMove, pathMatrix) {
        this.name = name
        this.nameCapitalized = this.name.charAt(0).toUpperCase() + this.name.slice(1)
        this.aiLevel = aiLevel
        this.timeToMove = timeToMove
        this.pathMatrix = pathMatrix
        if (aiLevel > 0) {
            this.status = "active"
        } else {
            this.status = "inactive"
        }
        this.pathMatrixID = 0
        this.location = this.pathMatrix[this.pathMatrixID]
        this.htmlElement = `.statusContainer.${this.name}`
        this.opportunities = {
            passes: 0,
            misses: 0,
            moves: 0,
            percentMove: 0,
        }
        this.info = `${this.nameCapitalized} is an Animatronic object based at AI level ${this.aiLevel}. It moves every ${this.timeToMove} seconds and its probability of moving should be around ${(this.aiLevel/20)*100}%. It is currently ${this.status} for the night.`
        this.genHTMLElm()
    }

    log(code, input) {
        if (code === 0) {
            console.log(`%c[${this.name}]`, `color: #73c9a7;font-weight:bold`, input)
        } else if (code === 1) {
            console.log(`%c[${this.name}]`, `color: #f55;font-weight:bold`, input)
        }
    }

    startAI() {
        let decimalPlaces = 2
        let movement = setInterval(()=>{
            if (this.opportunities.moves > 100) {
                this.log(1, `Uncaught Exception: ${this.name.charAt(0).toUpperCase() + this.name.slice(1)}'s AI is still moving after 100 moves. `)
            } else if (this.opportunities.moves === 100) {
                clearInterval(movement)
                this.log(0, `Finished.`)
                this.status = `inactive`
                this.refreshInfo()
                this.log(0, this.info)
            } else {
                let i = rollRandom(0, 19)
                if (this.aiLevel >= i) {
                    this.locationSense()
                    this.log(0, `Movement Opportunity Passed. Moving...`)
                    this.opportunities.moves++
                    this.opportunities.passes++
                    let n = this.opportunities.passes/this.opportunities.moves
                    this.opportunities.percentMove = n.toFixed(decimalPlaces)
                } else {
                    this.log(1, `Movement Opportunity Failed. Staying still...`)
                    this.opportunities.moves++
                    this.opportunities.misses++
                    let n = this.opportunities.passes/this.opportunities.moves
                    this.opportunities.percentMove = n.toFixed(decimalPlaces)
                }
            }
            this.location = this.pathMatrix[this.pathMatrixID]
            console.log(this.opportunities)
            this.update()
        }, this.timeToMove)
    }

    locationSense() {
        if (this.pathMatrix > this.pathMatrix.length) {
            console.log(`%cUser`, `color: #f00;font-weight:bold`, `You are dead...`) 
            this.timeToMove = 0
        } else {
            this.pathMatrixID++
            this.location = this.pathMatrix[this.pathMatrixID]
        }
    }

    genHTMLElm() {
        containers.innerHTML += `
        <div class="statusContainer ${this.name} ${this.status}">
            <div id="statusTitle"> ${this.nameCapitalized} </div>
            <div id="statusValues">
                <div id="aiActive"> ${this.status} </div>
                <div id="aiValue" class="${this.name}"> Level ${this.aiLevel}/20 </div>
                <div id="aiLocation" class="${this.name}"> ${this.location} </div>
            </div>
            <div id="statusControls">
                <div id="changeName" class="button" onclick="${this.name}.changeName()"> Change Name </div>
                <div id="startAI" class="button" onclick="${this.name}.startAI()"> Start AI </div>
                <div id="changeAIValue" class="button"> Change AI Value </div>
                <div id="changeTime" class="button"> Change Move Time </div>
            </div>
        </div>`
	}

    update() {
        document.querySelector(this.htmlElement).innerHTML = `
        <div id="statusTitle"> ${this.nameCapitalized} </div>
        <div id="statusValues">
            <div id="aiActive"> ${this.status} </div>
            <div id="aiValue" class="${this.name}"> Level ${this.aiLevel}/20 </div>
            <div id="aiLocation" class="${this.name}"> ${this.location} </div>
        </div>
        <div id="statusControls">
            <div id="changeName" class="button" onclick="${this.name}.changeName()"> Change Name </div>
            <div id="startAI" class="button" onclick="${this.name}.startAI()"> Start AI </div>
            <div id="changeAIValue" class="button"> Change AI Value </div>
            <div id="changeTime" class="button"> Change Move Time </div>
        </div>`
        console.log("%cRecieved.", "color:#5ad1d1")
    }

    refreshInfo() {
        this.info = `${this.nameCapitalized} is an Animatronic object based at AI level ${this.aiLevel}. It moves every ${this.timeToMove} and its probability of moving should be around ${(this.aiLevel/20)*100}%. It is currently ${this.status} for the night.`
    }

    changeName() {
        let newName = document.getElementById("inputValue").value
        this.name = newName
        this.update()
    }

    changeAIValue() {
        let newValue = document.getElementById("inputValue").value
        this.aiLevel = newValue
        this.update()
    }

    changeMoveTime() {
        let newTime = document.getElementById("inputValue").value
        this.timeToMove = newTime
        this.update()
    }
}