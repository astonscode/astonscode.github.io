
const viewer = {
    array: ["./src/img/example/img_0.png", "./src/img/example/img_1.png", "./src/img/example/img_2.png"],
    parent: document.getElementById("conceptImg")
}

function addProperties() {
    viewer.index = viewer.array.indexOf(viewer.src) + 1
    viewer.load = function(int) {
        let x = viewer.index + int
        console.log(`viewer.load().x : ${x}`)
        viewer.parent.src = viewer.array[x]
        console.log(`viewer.array[x] : ${viewer.array[x]}`)
        console.log(`viewer.parent.src : ${viewer.parent.src}`)
        return viewer.parent.src
    }
}

function loadImage(num) {
    const pathArray = ["./src/img/example/img_0.png", "./src/img/example/img_1.png", "./src/img/example/img_2.png"]
    
    let currentSrc = document.getElementById("conceptImg").src;
    console.log(currentSrc)

    let currentIndex = pathArray.indexOf(currentSrc);
    console.log(`Logged currentIndex as ${currentIndex}. Source should match as ${pathArray[currentIndex]}`)

    let newIndex = currentIndex + num;
    console.log(`Calculated newIndex at ${newIndex}`)

    if (newIndex < 0) {
        newIndex = pathArray.length - 1;
    } else if (newIndex > pathArray.length) {
        newIndex = 0
    }

    console.log(`Translated newIndex to ${newIndex}. Should match ${pathArray[newIndex]}`)
    
    document.getElementById("conceptImg").src = pathArray[newIndex];

    console.log(`Switching to ${newIndex} (${pathArray[newIndex]}).`)
}

document.addEventListener("DOMContentLoaded", ()=>{
    console.log(viewer.parent.src)
    addProperties()
})