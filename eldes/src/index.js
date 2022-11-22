const charDirectory = [{
    name: "Endorius",
    age: "34",
    sex: "Male",
    race: "Demigod/Human",
    abilities: "Water/Fire",
    appearance: "NA",
    id: "1"
}, {
    name: "Rakkshas",
    age: "21",
    sex: "Male",
    race: "Demon/Human",
    abilities: "Water/Fire",
    appearance: "NA",
    id: "2"
}]

class writeIn {
    constructor() {
        this.element = document.getElementById(`character`);
    }

    generateChar() {
        const elm = charDirectory[i]

        this.element.innerHTML = `
        <div class="charName"> ${elm.name}</div>
        <div class="charAge"> ${elm.age}</div>
        <div class="charSex"> ${elm.sex} </div>
        <div class="charRace"> ${elm.race}</div>
        <div class="charAbilities"> ${elm.abilities}</div>
        <div class="charAppearance">${elm.appearance}</div>
        `
    }
}