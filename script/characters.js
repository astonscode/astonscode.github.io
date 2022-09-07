var styleMarker = 0;
var activeChar;

function setCharacterList(character) {
    if (character === "Endorius") {
        activeChar = "Endorius";
        charImg.src = "/img/chars/endorius-ts-c.png";
        charName.innerHTML = "Endorius";
        charAge.innerHTML = "A: 31";
        charGen.innerHTML = "Demi-God / Human";

        charLvl.innerHTML = "6";

        fightingStyle1.innerHTML = "Godai Jutsu";

        fightingStyle2.innerHTML = "Iona's Sword";
        fightingStyle3.innerHTML = "God Abilities";

        setActiveStyle(1);
    }

    if (character === "Kaze") {
        activeChar = "Kaze";
        charImg.src = "/img/chars/kaze-c.png";
        charName.innerHTML = "Kaze";
        charAge.innerHTML = "A: 22";
        charGen.innerHTML = "Human";

        charLvl.innerHTML = "1";

        fightingStyle1.innerHTML = "Demon Hapkido";

        fightingStyle2.innerHTML = "Yomi no Kuni Edge";
        fightingStyle3.innerHTML = "Magu Magu no Mi";

        setActiveStyle(1);
    }

    if (character === "Nunchuck") {
        activeChar = "Nunchuck";
        charImg.src = "/img/chars/nunchuck-c.png";
        charName.innerHTML = "Nunchuck";
        charAge.innerHTML = "A: 31";
        charGen.innerHTML = "Human / Reflection";

        charLvl.innerHTML = "1";

        fightingStyle1.innerHTML = "Moi Fah";
        fightingStyle2.innerHTML = "Boxing";
        fightingStyle3.innerHTML = "NA";

        setActiveStyle(1);
    }

    if (character === "Accelero") {
        activeChar = "Accelero";
        charImg.src = "/img/chars/accelero-c.png";
        charName.innerHTML = "Accelero";
        charAge.innerHTML = "A: 31";
        charGen.innerHTML = "Human / Reflection";

        charLvl.innerHTML = "1";

        fightingStyle1.innerHTML = "Moi Fah";
        fightingStyle2.innerHTML = "Iona's Sword";
        fightingStyle3.innerHTML = "NA";

        setActiveStyle(1);
    }

    if (character === "Conal") {
        activeChar = "Conal";
        charImg.src = "/img/chars/conal-c.png";
        charName.innerHTML = "Conal";
        charAge.innerHTML = "A: 18";
        charGen.innerHTML = "Human";

        charLvl.innerHTML = "4";

        fightingStyle1.innerHTML = "Demon Eyes (Passive)";
        fightingStyle2.innerHTML = "Special Abilities";
        fightingStyle1.style.width = "50vw";
        fightingStyle2.style.width = "50vw";
        fightingStyle3.style.display = "none";

        setActiveStyle(1);
    }

    if (character === "Rakkshas") {
        activeChar = "Rakkshas";
        charImg.src = "/img/chars/rakkshas-c.png";
        charName.innerHTML = "Rakkshas";
        charAge.innerHTML = "A: 23";
        charGen.innerHTML = "Human / Demon";

        charLvl.innerHTML = "8";

        fightingStyle1.innerHTML = "Demon Abilities";
        fightingStyle2.innerHTML = "Demonic Magic";
        fightingStyle3.innerHTML = "Transformations";

        setActiveStyle(1);
    }

    if (character === "Auroras") {
        activeChar = "Auroras";
        charImg.src = "/img/chars/auroras-c.png";
        charName.innerHTML = "Auroras";
        charAge.innerHTML = "A: 23";
        charGen.innerHTML = "Human / Demon";

        charLvl.innerHTML = "8";

        fightingStyle1.innerHTML = "Demon Abilities";
        fightingStyle2.innerHTML = "Demonic Magic";
        fightingStyle3.innerHTML = "Transformations";

        setActiveStyle(1);
    }

    if (character === "Malakas") {
        activeChar = "Malakas";
        charImg.src = "/img/chars/malakas-c.png";
        charName.innerHTML = "Malakas";
        charAge.innerHTML = "A: 23";
        charGen.innerHTML = "Human / Demon";

        charLvl.innerHTML = "8";

        fightingStyle1.innerHTML = "Demon Abilities";
        fightingStyle2.innerHTML = "Demonic Magic";
        fightingStyle3.innerHTML = "Transformations";

        setActiveStyle(1);
    }

    if (character === "Yadu") {
        activeChar = "Yadu";
        charImg.src = "/img/chars/0-c.png";
        charName.innerHTML = "Yadu";
        charAge.innerHTML = "A: 23";
        charGen.innerHTML = "Human / Demon";

        charLvl.innerHTML = "8";

        fightingStyle1.innerHTML = "Demon Abilities";
        fightingStyle2.innerHTML = "Demonic Magic";
        fightingStyle3.innerHTML = "Transformations";

        setActiveStyle(1);
    }


}

function setActiveStyle(value) {
    styleMarker = value;

    //Char 1 - Endorius

    if (activeChar == "Endorius" && styleMarker == 1) {
        moveList.innerHTML = `
    <div class="move" onmouseover="moveArray(1)">
        <div class="name"> Powerbeam </div>
    </div>
    <div class="move">
        <div class="name"> TKO </div>
    </div>
    <div class="move">
        <div class="name"> Pneumatic Strike </div>
    </div>
    <div class="move">
        <div class="name"> Commander </div>
    </div>
    <div class="subAdditions">
        <div class="sub"> Accelero Assist </div>
        <div class="sub"> Nunchuck Assist </div>
        <div class="sub end"> Smoke Assist </div>
    </div>
    <div class="move"> Rook </div>
`
        fightingStyle1.classList.add("active");
        fightingStyle2.classList.remove("active");
        fightingStyle3.classList.remove("active");
    }

    if (activeChar == "Endorius" && styleMarker == 2) {
        moveList.innerHTML = "<div class='move'><div class='name'> Rising Sword </div></div><div class='move'><div class='name'> Daggers </div></div><div class='move'><div class='name'> Creeping Ice </div></div><div class='move'><div class='name'> Geysers </div></div>"
        fightingStyle1.classList.remove("active");
        fightingStyle2.classList.add("active");
        fightingStyle3.classList.remove("active");
    }

    if (activeChar == "Endorius" && styleMarker == 3) {
        moveList.innerHTML = "<div class='move'><div class='nameContainer'><div class='name'>TKO</div><div class='enhanced'>E</div></div></div><div class='move'><div class='nameContainer'><div class='name'>Scorch</div><div class='enhanced'>E</div></div></div><div class='move'><div class='nameContainer'><div class='name'>Powerbeam</div><div class='enhanced'>E</div></div></div><div class='move'><div class='nameContainer'><div class='name'>Pneumatic Strike</div><div class='enhanced'>E</div></div></div><div class='move'><div class='nameContainer'><div class='name'>Depthstrider</div><div class='enhanced'>E</div></div></div>";
        fightingStyle1.classList.remove("active");
        fightingStyle2.classList.remove("active");
        fightingStyle3.classList.add("active");
    }

    //Char 2 - Kaze

    if (activeChar == "Kaze" && styleMarker == 1) {
        moveList.innerHTML = `
        <div class="move">
                    <div class="name"> Fire Backflip</div>
                </div>
                <div class="move">
                    <div class="name"> Flowing Lava</div>
                </div>
                <div class="move">
                    <div class="name"> Inner Power</div>
                </div>
                <div class="move">
                    <div class="name"> Infernal Nightmare</div>
                </div>
                `
        fightingStyle1.classList.add("active");
        fightingStyle2.classList.remove("active");
        fightingStyle3.classList.remove("active");
    }

    if (activeChar == "Kaze" && styleMarker == 2) {
        moveList.innerHTML = `
        <div class="move">
                    <div class="name"> Rising Cut</div>
                </div>
                <div class="move">
                    <div class="name"> Soulless </div>
                </div>
                <div class="move">
                    <div class="name"> Consecutive Slices </div>
                </div>
                <div class="move">
                    <div class="name"> Flaming Katana</div>
                </div>`;
        fightingStyle1.classList.remove("active");
        fightingStyle2.classList.add("active");
        fightingStyle3.classList.remove("active");
    }

    if (activeChar == "Kaze" && styleMarker == 3) {
        moveList.innerHTML = `
        <div class="move">
                    <div class="name"> Magma Shower</div>
                </div>
                <div class="move">
                    <div class="name"> Volcanic Assault </div>
                </div>
                <div class="move">
                    <div class="name"> Volcanic Storm </div>
                </div>
                <div class="move">
                    <div class="name"> Great Magma Hound</div>
                </div>
                <div class="move">
                    <div class="name"> Beast Ride</div>
                </div>`;
        fightingStyle1.classList.remove("active");
        fightingStyle2.classList.remove("active");
        fightingStyle3.classList.add("active");
    }

    //Char 5 - Rakkshas

    if (activeChar == "Conal" && styleMarker == 1) {
        moveList.innerHTML = `<div class="move">
                    <div class="name"> Magic Sense </div>
                </div>
                <div class="move">
                    <div class="name"> Xray Vision </div>
                </div>
                <div class="move">
                    <div class="name"> Area Scan </div>
                </div>
                <div class="move">
                    <div class="name"> Eye Shielding </div>
                </div>`;
        fightingStyle1.classList.add("active");
        fightingStyle2.classList.remove("active");
        fightingStyle3.classList.remove("active");
    }

    if (activeChar == "Conal" && styleMarker == 2) {
        moveList.innerHTML = `<div class="move">
                    <div class="name"> Time Stop </div>
                </div>
                <div class="move">
                    <div class="name"> Future Sight </div>
                </div>
                <div class="move">
                    <div class="name"> Time Slow </div>
                </div>`;
        fightingStyle1.classList.remove("active");
        fightingStyle2.classList.add("active");
        fightingStyle3.classList.remove("active");
    }

}

function moveArray(moveId) {
    if (activeChar == "Endorius" && moveId == 1) {
        moveType.innerHTML = "Area, Water";
        moveDmg.innerHTML = " Med - Destructive";
        moveProperties.innerHTML = "NA";
        moveInfo.innerHTML = "...";
    } else {
        return "brokey";
    }
}

//--smn

function toggleWindow() {
    menuWindow.classList.toggle("active");
    overlay.classList.toggle("active");
}