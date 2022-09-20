const profileInfo = [{
    profilePic: "0.png",
    rankImg: "silver/silver-5.png",
    pfBadge1: "check_circle",
    pfBadge2: "construction",
    username: "decode",
    pfLevel: "127",
    pfLevelCol: "#d900ff",
    dataDate: "06/09/22",
    dataType: "Developer",
    dataTime: "6d, 22h",
    dataRatio: "Yes",
    keycodeLevel: "159",
    keycodeLevelCol: "#f00",
    keycodeRank: "Champion 4",
    keycodeRankCol: "#f00",
    keycodeRecord: "Legend 2",
    keycodeRecordCol: "#a200ff",
    keycodeRatio: "1601/234/55",
    enworChars: "Endorius, Kaze, Nunchuck, Accelero",
    enworCharCol: "#2f7ea3",
    enworLevel: "58",
    enworLevelCol: "#ff9500",
    enworRecord: "Dragon",
    enworRecordCol: "#a32f2f",
    enworLife: "Yes",
    enworLifeCol: "#afff53",
}]

var profilePic;
var rankImg;
var pfBadge1;
var pfBadge2;
var pfBadge3;
var username;
var pfLevel;
var pfLevelCol;
var dataDate;
var dataType;
var dataTime;
var dataRatio;
var keycodeLevel;
var keycodeLevelCol;
var keycodeRank;
var keycodeRankCol;
var keycodeRecord;
var keycodeRecordCol;
var keycodeRatio;
var enworChars;
var enworCharCol;
var enworLevel;
var enworLevelCol;
var enworRecord;
var enworRecordCol;
var enworText;
var enworLife;
var enworLifeCol;

var profile = `
<div class="profileTop">
            <div class="profileTopRight">
                <img src="/img/profImgs/${profilePic}" class="pfpImg">
            </div>
            <div class="profileName">
                <img src="/img/ranks/${rankImg}" class="profileRank">
                <span class="material-icons pfpBadge"> ${pfBadge1} </span>
                <span class="material-icons pfpBadge"> ${pfBadge2} </span> ${username}
            </div>
        </div>

        <div class="profileLevel" style="color: ${pfLevelCol}">${pfLevel}</div>

        <div class="dataContainer">
            <div class="data data-joined"> Created: ${dataDate}</div>
            <div class="data account_type"> Account Type: ${dataType} </div>
            <div class="data data-hours"> Time: ${dataTime} </div>
            <div class="data data-ratio"> Ratio:${dataRatio} </div>
        </div>

        <div class="dataCol">
            <div class="data dataTitle"> Keycode </div>
            <div class="data keycodeLevel">
                Level:
                <div class="keyCode-Level" style="color: ${keycodeLevelCol};"> ${keycodeLevel} </div>
            </div>
            <div class="data keycodeRank">
                Rank:
                <div class="keyCode-Rank" style="color: ${keycodeRankCol};"> ${keycodeRank} </div>
            </div>
            <div class="data keycodeRecord">
                Record:
                <div class="keyCode-Record" style="color: ${keycodeRecordCol};"> ${keycodeRecord} </div>
            </div>
            <div class="data keycodeRatio">
                W/L/D:
                <div class="keyCode-Ratio"> ${keycodeRatio} </div>
            </div>

            <div class="data dataTitle"> Enwor </div>
            <div class="data enworLevel">
                Level:
                <div class="enworText" style="color: ${enworLevelCol};"> ${enworLevel} </div>
            </div>

            <div class="data enworChars">
                Character(s):
                <div class="enworText" style="color: ${enworCharCol};"> ${enworChars} </div>
            </div>
            <div class="data enworRecord">
                Record:
                <div class="enworText" style="color: ${enworRecordCol};"> ${enworRecord} </div>
            </div>
            <div class="data enworLife">
                Alive:
                <div class="enworText" style="color: ${enworLifeCol};"> ${enworLife} </div>
            </div>
        </div>

        `;
document.getElementById("profileHolder").innerHTML = profile;