// Title: Guess The Number
// note: do this in the browser

// Activity:
// You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
// Specification:
// The user should be asked to guess a number
// If the user's guess is correct, the user should see a congratulatory message
// If the user's guess is not correct, the user should be asked to guess the number again.
// part 2
// Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


const number = Math.floor(Math.random() * 11)
let isTrue = false

let answer = prompt("Guess the number between 1-10 inclusive!")

while (!isTrue) {
    if (answer == "") {
        answer = prompt("Give it a shot! Try a number!")
    } else if (answer < number) {
        answer = prompt(`Try again! it is bigger than ${answer}!`)
    } else if (answer > number) {
        answer = prompt(`Try again! it is smaller than ${answer}!`)
    } else if (answer == number) {
        alert(`Congratulations! That is correct. The number is ${answer}`)
        isTrue = true
    } else {
        answer = prompt("Try a number!")
    }
}