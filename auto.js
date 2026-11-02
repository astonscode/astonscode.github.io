let x = document.createElement("meta")
x.httpEquiv = "refresh"
x.content = "0; url=defactored.txt"
const futureDate = new Date(2026, 11, 3, 12, 0); 
if (Date.now() < futureDate.getTime()) {
    document.head.append(x)
}
