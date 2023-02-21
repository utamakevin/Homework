let answer = prompt("YES, DEAR?")
let counter = 0
let bye = false

while (bye === false) {
    // check if the answer is "BYE"
    if (answer == "BYE") {
        counter++
    } else {
    // counter goes back to 0 if answer is not "BYE"
        counter = 0
    }

    // check if "BYE" is repeated 3 times
    if (counter === 3) {
        alert("BYE, SONNY!")
        break
    }
      
    // check if answer is in capital
    if (answer === answer.toUpperCase() || answer == "") {
        answer = prompt(`NO! NOT SINCE ${Math.floor(Math.random() * 21 + 1930) }`)
        } else {
        answer = prompt("HUH?! SPEAK UP, SONNY!")
        }
}





    