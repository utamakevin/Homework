let answer = prompt("YES, DEAR?")
let bye = false

debugger
while( bye === false) {
    if (answer === "BYE") {
        bye = true
        break
    }
    
    if (answer === answer.toUpperCase() || answer == "") {
        answer = prompt("NO! NOT SINCE 1938!")
    } else {
        answer = prompt("HUH?! SPEAK UP, SONNY!")
    }
}