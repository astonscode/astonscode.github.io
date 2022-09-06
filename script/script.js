const settingsContent = document.querySelector(".settingsContent");
var imgId = 0;
var userName = "";

function checkTime() {
    var curTime = new Date();
    let hour = curTime.getHours();
}

// Code by dom (@dcode)

function formatTime(date) {
    const curHours = date.getHours() % 12 || 12;
    const curMinutes = date.getMinutes();
    const checkAm = date.getHours() < 12;
    return `${curHours.toString().padStart(2,"0")}:${curMinutes.toString().padStart(2,"0")}${checkAm ? "a" : "p"}`
}

function formatDate(date) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

setInterval(() => {
    const now = new Date();

    timeDisplay.textContent = formatTime(now);
    dateDisplay.textContent = formatDate(now);
    checkTime();
}, 20);

function toggleWindow(windowId) {
    if (windowId === 1) {
        themeSelector.classList.add("active");
        settings.classList.remove("active");
    }

    if (windowId === 2) {
        themeSelector.classList.remove("active");
        settings.classList.add("active");
    }

    if (windowId === 3) {
        themeSelector.classList.toggle("active");
    }

    if (windowId === 4) {
        settings.classList.toggle("active");
    }

}

function moveCheck(themeId) {
    if (themeId == 1) {
        iconDefault.classList.remove("hide");
        iconLight.classList.add("hide");
        iconDecode.classList.add("hide");
        iconKoawa.classList.add("hide");
        iconScorpion.classList.add("hide");
        iconYann.classList.add("hide");
    }

    if (themeId == 2) {
        iconDefault.classList.add("hide");
        iconLight.classList.remove("hide");
        iconDecode.classList.add("hide");
        iconKoawa.classList.add("hide");
        iconScorpion.classList.add("hide");
        iconYann.classList.add("hide");
    }

    if (themeId == 3) {
        activateTheme("decode");
        iconDefault.classList.add("hide");
        iconLight.classList.add("hide");
        iconDecode.classList.remove("hide");
        iconKoawa.classList.add("hide");
        iconScorpion.classList.add("hide");
        iconYann.classList.add("hide");
    }

    if (themeId == 4) {
        activateTheme("koawa");
        iconDefault.classList.add("hide");
        iconLight.classList.add("hide");
        iconDecode.classList.add("hide");
        iconKoawa.classList.remove("hide");
        iconScorpion.classList.add("hide");
        iconYann.classList.add("hide");
    }

    if (themeId == 5) {
        activateTheme("scorpion");
        iconDefault.classList.add("hide");
        iconLight.classList.add("hide");
        iconDecode.classList.add("hide");
        iconKoawa.classList.add("hide");
        iconScorpion.classList.remove("hide");
        iconYann.classList.add("hide");
    }

    if (themeId == 6) {
        activateTheme("yannmatrix");
        iconDefault.classList.add("hide");
        iconLight.classList.add("hide");
        iconDecode.classList.add("hide");
        iconKoawa.classList.add("hide");
        iconScorpion.classList.add("hide");
        iconYann.classList.remove("hide");
    }
}


function windowContent(tab) {
    if (tab == 1) {
        settingsContent.innerHTML = `<div class="profileContainer">
                    <img src="/img/profImgs/${imgId}.png" alt="" class="profileImg">
                    <div class="userName"> ${userName}
                        <div class="discriminator"> #0001 </div>
                    </div>
                    <a href="login.html">
                        <button class="logout"> Log Out </button>
                    </a>
                </div>`;
        settingsContent.classList.add("profile");
    }

    if (tab == 2) {
        settingsContent.innerHTML = ` <div id="generalSettings">

                    <div class="settingsItem">
                        <div class="setting-title"> Hidden Content </div>
                        <div class="setting-switch">
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div class="settingsItem">
                        <div class="setting-title"> Enable High Contrast Themes </div>
                        <div class="setting-switch">
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div class="settingsItem">
                        <div class="setting-title"> Limit Usage </div>
                        <div class="setting-switch">
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div class="settingsItem">
                        <div class="setting-title"> Go Back to Version of Website </div>
                        <a href="versions.html" class="repoLink"> Go to Versions </a>
                    </div>

                </div>`;
        settingsContent.classList.remove("profile");
    }

    if (tab == 3) {

    }
}