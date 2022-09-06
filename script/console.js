const dxConsole = document.querySelector(".console");
const consoleInput = document.querySelector(".console-input");
const consoleHistory = document.querySelector(".console-history");
const consoleClear = document.querySelector(".console-clear-btn");
const consoleExit = document.querySelector(".console-exit-btn");

function addResult(inputString, outputToString) {
    const outputString = outputToString instanceof Array ? `[${outputToString.join(', ') }]` : outputToString.toString();
    const loggedInput = document.createElement("div");
    const loggedOutput = document.createElement("div");

    loggedInput.classList.add("console-input-log");
    loggedOutput.classList.add("console-output-log");

    loggedInput.textContent = ` : ${inputString}`;
    loggedOutput.textContent = `${outputString}`;

    consoleHistory.append(loggedInput, loggedOutput);

    console.log(inputString, outputString)
}

consoleInput.addEventListener("keyup", (e) => {
    const code = consoleInput.value.trim();

    if (code.length === 0) {
        return;
    }

    if (e.key === "Enter") {
        try {
            addResult(code, eval(code));
        } catch (err) {
            addResult(code, err);
        }

        consoleInput.value = "";
        consoleHistory.scrollTop = consoleHistory.scrollHeight;
    }
});

function clearConsole() {
    consoleHistory.innerHTML = "";
}

function exitConsole() {
    dxConsole.classList.remove("active");
}

function activateConsole() {
    dxConsole.classList.add("active");
}

function dxCommand(command) {
    if (command == "getVersion") {
        return "DXConsole Beta v1.2.1 - Aug 2022";
    }

    if (command == "shutdown") {
        exitConsole();
        consoleHistory.innerHTML = "";
    }
}

document.addEventListener("keydown", e => {
    if (
        e.key.toLowerCase() === "a" &&
        e.shiftKey
    ) {
        activateConsole();
    }
});