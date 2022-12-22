// variable declaration
let userName = "aizi";
let userLevel = 511;
const maxLevel = 500;
let userTitle;

const userTitleArray = [
  // Leveling Titles
  "Hunted", // LVL 30+
  "Hunter", // LVL 50+
  "Marksman", // LVL 80+
  "Deadshot", // LVL 100+
  "Reactive", // LVL 150+
  "Hyperspeed", // LVL 200+
  "Godspeed", // LVL 250+
  "Inevitable", // LVL 300+
  "Ultraviolet", // LVL 350+
  "Falling Petal", // LVL 400+
  "Rose", // LVL 450+
  "Legend of Keycode", // LVL 500+
  "Keycode Ascendant [MAX]", // LVL 500+
  // Achievement Titles
  "Enhanced", // Unlock an Enhancement

  "Superspeed", // Unlock Flash II
  "Zooming", // Unlock Flash III
  "Run, Barry, Run", // Unlock Flash IV
  "CSI", //Unlock Flash V

  "On Fire", // Unlock Flame II
  "Flaming", // Unlock Flame III
  "Flame Fist", // Unlock Flame IV
  "Flame God", // Unlock Flame V
  "Flame Godess", // Unlock Flame V

  "Precise", // Achieve an accuracy of or above 95%
  "Accurate", // Achieve an accuracy of or above 98%
  "Precise and Accurate", // Achieve an accuracy of 100%
];

function userChecking() {
  if (userLevel >= 30) {
    colorVal = "#5dff4e";
    userTitle = userTitleArray[1];
  }
  if (userLevel >= 50) {
    colorVal = "#3784ff";
    userTitle = userTitleArray[2];
  }
  if (userLevel >= 80) {
    colorVal = "#624aff";
    userTitle = userTitleArray[3];
  }
  if (userLevel >= 100) {
    colorVal = "#9500ff";
    userTitle = userTitleArray[4];
  }
  if (userLevel >= 150) {
    colorVal = "#ff0000";
    userTitle = userTitleArray[5];
  }
  if (userLevel >= 200) {
    colorVal = "#ffaa00";
    userTitle = userTitleArray[6];
  }
  if (userLevel >= 250) {
    colorVal = "#6bfffd";
    userTitle = userTitleArray[7];
  }
  if (userLevel >= 300) {
    colorVal = "#6bd3ff";
    userTitle = userTitleArray[8];
  }
  if (userLevel >= 350) {
    colorVal = "#e2b4ff";
    userTitle = userTitleArray[9];
  }
  if (userLevel >= 400) {
    colorVal = "#ffb4b4";
    userTitle = userTitleArray[10];
  }
  if (userLevel >= 450) {
    colorVal = "#fad0ff";
    userTitle = userTitleArray[11];
  }
  if (userLevel >= maxLevel) {
    colorVal = "#8fb4ff";
    userTitle = userTitleArray[12];
  }

  document.querySelector(".userLevel").innerHTML = `[${userLevel}] `;
  document.querySelector(".userNameVal").innerHTML = `${userName}`;
  document.querySelector(".userRank").innerHTML = userTitle;
  document.querySelector(".userLevel").style.color = colorVal;
}

userChecking();

function levelChange(type, amt) {
  if (type == "add") {
    userLevel = userLevel + amt;
  } else if (type == "subtract") {
    userLevel = userLevel - amt;
  } else {
    console.log(`You can't do that.`);
  }

  if (userLevel >= maxLevel) {
    userLevel = maxLevel;
    console.log("Max level reached.");
  }

  userChecking();
}
