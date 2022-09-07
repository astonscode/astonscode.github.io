if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("worker registered with id " + registration + " :)")
    }).catch(error => {
        console.log("registration failed with error " + error + ":(")
    })
}