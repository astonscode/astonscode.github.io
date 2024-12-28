let userResponse = false
userResponded = false

console.log("POST Plaintext parsed.")

setTimeout(()=>{
    console.log("GET File 1 has loaded successfully.")
}, 1500)

setTimeout(()=>{
    console.log("GET Unable to retrieve Files 2, 3, and 4 from SJFM Database. Sorry, HXXXXXX.")
}, 5000)

setTimeout(()=>{
    console.log("KATIE The file is prepared.")
}, 9000)

setTimeout(()=>{
    console.log("KATIE Hopefully, the connection is secure.")
}, 14500)

setTimeout(()=>{
    console.log("KATIE Hello???")
    userResponse = true
}, 22000)

function simulation() {
    if (userResponse == false) {
        return 
    } else {
        setTimeout(()=>{
            console.log("KATIE What? Hoshi, you're acting weird.")
            userResponse = true
        }, 3000)
    }
}