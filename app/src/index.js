//0: Loading Screen, 1: Select Screen, 2: Start Screen, 3: Game
var playState = 0;

// 1: Mouse, 2: Controller
var controlScheme = 1;

var player1 = "Scorpion";
var player2 = "Jade";

var playerHealthBar1 = document.querySelector(".healthBarInner.left");
var playerHealthBar2 = document.querySelector(".healthBarInner.right");

var player1Health = 1000.00;
var player2Health = 1000.00;

var timeleft = 90;

var matchExtended;

var backAudio = document.getElementById("backAudio");
var mainAudio = document.getElementById("mainAudio");

window.addEventListener("fullscreenchange", () => {
    document.querySelector(".backgroundImg").style.width = "120vw";
});

window.addEventListener('gamepadconnected', () => {
    document.getElementById("loadedText").innerHTML = `Press <img src="/img/mktest/controls/3.png" class="controllerIcon"> To Start`;
    controlScheme = 2;
});

// global gamepad object
let gamepadIndex;
window.addEventListener('gamepadconnected', (event) => {
    gamepadIndex = event.gamepad.index;
});

setInterval(() => {
        if (gamepadIndex !== undefined) {
            // a gamepad is connected and has an index
            const myGamepad = navigator.getGamepads()[gamepadIndex];
            myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
                if (isPressed && playState == 2) {
                    playState = 3;
                    startGame()
                    startMatch()
                } else {
                    return playState
                }
            })
        }
    }, 10) // print buttons that are pressed 10 times per second


document.getElementById("backAudio").volume = 0.5;
backAudio.pause();

function hideFocus() {
    document.getElementById("focusContainer").style.display = "none";
    playState = 2;
}

function startMatch() {
    playState = 3;
    var timerUpdate = setInterval(() => {
        timeleft = timeleft - 1;
        document.getElementById("timeDisplay").innerHTML = timeleft;
        if (timeleft == 0) {
            endRound(1)
        }
    }, 1000);
    var healthBarUpdate = setInterval(() => {
        playerHealthBar1.style.width = `${player1Health/10}%`;
        playerHealthBar2.style.width = `${player2Health/10}%`;
    }, 50)
}

function endRound(condition) {
    backAudio.currentTime = 175;
    setTimeout(() => {
        backAudio.pause();
    }, 4500);

    setTimeout(() => {
        backAudio.play();
    }, 7000);

    //Condition 1; Timeout

    if (condition == 1) {
        if (player1Health > player2Health) {
            clearInterval(timerUpdate);
            console.log(`Timer is finished, ${player1} wins the round. `);
            playerHealthBar2.style.width = "0%"
        } else if (player2Health > player1Health) {
            clearInterval(timerUpdate);
            console.log(`Timer is finished, ${player2} wins the round. `);
            playerHealthBar1.style.width = "0%"
        } else if (player1Health == player2Health) {
            timeleft = timeleft + 60;
            player1Health = 300.00;
            player2Health = 300.00;
            console.log(`${player1} and ${player2} have tied. Extending Match by 60 seconds.`);
            matchExtended = 1;
        }
    }

    //Condition 2; Health 

    if (condition == 2) {
        if (player1Health > player2Health) {
            clearInterval(timerUpdate);
            console.log(`${player1} wins the round. `);
            playerHealthBar2.style.width = "0%"
        } else if (player2Health > player1Health) {
            clearInterval(timerUpdate);
            console.log(`${player2} wins the round. `);
            playerHealthBar1.style.width = "0%"
        } else if (player1Health == player2Health) {
            timeleft = timeleft + 60;
            player1Health = 300.00;
            player2Health = 300.00;
            console.log(`${player1} and ${player2} have tied. Extending Match by 60 seconds.`);
            matchExtended = 1;
        }
    }

}

setTimeout(() => {
    document.getElementById("progressBar").style.opacity = 0;
    document.getElementById("loadedText").style.opacity = 1;
    mainAudio.play()
    document.querySelector(".loaderLogo").classList.add("anim");
    setTimeout(() => {
        document.querySelector(".loaderLogo").classList.remove("anim");
        document.querySelector(".loaderLogo").classList.add("active");
    }, 13000)
}, 4000)

function startGame() {
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("overlay").style.opacity = 1;
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        timeleft = 90
        document.getElementById("backAudio").play();
        mainAudio.pause()
    }, 50)
}

// Game 

//S1: Controls

//control schema

//move
var jump = "w";

var forward = "d";

var duck = "s";

var backward = "a";

//attack 
var punchFor = "j";
var dmgPunchFor = 2.00;

var punchBack = "i";
var dmgPunchBack = 3.00;

var kickFor = "k";
var dmgKickFor = 5.00;

var kickBack = "l";
var dmgKickBack = 7.00;

var grab = " ";
var dmgGrab = 13.00;

var block = "o";

var interact = ";";

//spc atk 

var back1 = "Gut Slice";
var back1Dmg = '3.00';

var down1 = "Low Jab";
var down1Dmg = '3.00';

// Player 1

//Attack Functions
document.body.addEventListener("keydown", e => {
    // Forward Punches
    if (
        e.key.toLowerCase() === punchFor && e.key.toLowerCase() === backward
    ) {
        console.log(`${player1} did a ${back1} for ${dmgPunchFor*10} damage!`);
        player2Health = player2Health - back1Dmg * 10;

    } else if (
        e.key.toLowerCase() === punchFor
    ) {
        console.log(`${player1} threw a forward punch for ${dmgPunchFor*10} damage!`)
        player2Health = player2Health - dmgPunchFor * 10;

    } else if (
        e.key.toLowerCase() === punchBack
    ) {
        console.log(`${player1} threw a back punch for ${dmgPunchBack*10} damage!`)
        player2Health = player2Health - dmgPunchBack * 10;

    } else if (
        e.key.toLowerCase() === kickFor
    ) {
        console.log(`${player1} threw a forward kick for ${dmgKickFor*10} damage!`)
        player2Health = player2Health - dmgKickFor * 10;

    } else if (
        e.key.toLowerCase() === kickBack
    ) {
        console.log(`${player1} threw a back kick for ${dmgKickBack*10} damage!`)
        player2Health = player2Health - dmgKickBack * 10;

    } else if (
        e.key.toLowerCase() === grab
    ) {
        console.log(`${player1} grabbed the opponent for ${dmgGrab*10} damage!`)
        player2Health = player2Health - dmgGrab * 10;

    }
})

//Special Moveset 


//Move Functions

document.body.addEventListener("keydown", e => {
    if (
        e.key.toLowerCase() === jump
    ) {
        console.log(`${player1} jumped!`)
    } else if (
        e.key.toLowerCase() === forward && e.key.toLowerCase() === jump
    ) {
        console.log(`${player1} jumped forwards!`)
    } else if (
        e.key.toLowerCase() === backward && e.key.toLowerCase() === jump
    ) {
        console.log(`${player1} jumped backwards!`)
    } else if (
        e.key.toLowerCase() === forward
    ) {
        console.log(`${player1} walked forwards!`)
    } else if (
        e.key.toLowerCase() === backward
    ) {
        console.log(`${player1} walked backwards!`)
    } else if (
        e.key.toLowerCase() === duck
    ) {
        console.log(`${player1} ducked!`)
    }
})