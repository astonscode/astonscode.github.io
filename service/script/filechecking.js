//function call
function checkFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}

var filesFound = 0;

//css/theme CSS: File checks

var mainCSS = checkFileExist("css/main.css");
var fontCSS = checkFileExist("css/font.css");
var dfThemeCSS = checkFileExist("css/themes/default.css");
var dxThemeCSS = checkFileExist("css/themes/decode.css");
var ltThemeCSS = checkFileExist("css/themes/light.css");
var kbsThemeCSS = checkFileExist("css/themes/koawa.css");

if (mainCSS == true) {
    console.log('CSS: File 1 found!');
    filesFound = filesFound + 1;
} else {
    console.log('CSS: File 1 not found. Stopping...');
}

if (fontCSS == true) {
    console.log('CSS: File 2 found!');
    filesFound = filesFound + 1;
} else {
    console.log('CSS: File 2 not found. Stopping...');
}

if (dfThemeCSS == true) {
    console.log('CSS: File 3 found!');
    filesFound = filesFound + 1;
} else {
    console.log('CSS: File 3 not found. Stopping...');
}

if (dxThemeCSS == true) {
    console.log('CSS: File 4 found!');
    filesFound = filesFound + 1;
} else {
    console.log('CSS: File 4 not found. Stopping...');
}

if (ltThemeCSS == true) {
    console.log('CSS: File 5 found!');
    filesFound = filesFound + 1;
} else {
    console.log('CSS: File 5 not found. Stopping...');
}

if (kbsThemeCSS == true) {
    console.log('CSS: File 6 found!');
    filesFound = filesFound + 1;
} else {
    console.log('CSS: File 6 not found. Stopping...');
}


var bgScript = checkFileExist("script/background.js");
var mainScript = checkFileExist("script/script.js");
var themeScript = checkFileExist("script/themes.js");

if (bgScript == true) {
    console.log('JS: File 1 found!');
    filesFound = filesFound + 1;
} else {
    console.log('JS: File 1 not found. Stopping...');
}

if (mainScript == true) {
    console.log('JS: File 2 found!');
    filesFound = filesFound + 1;
} else {
    console.log('JS: File 2 not found. Stopping...');
}

if (themeScript == true) {
    console.log('JS: File 3 found!');
    filesFound = filesFound + 1;
} else {
    console.log('JS: File 3 not found. Stopping...');
}

console.log("Files found: " + filesFound);