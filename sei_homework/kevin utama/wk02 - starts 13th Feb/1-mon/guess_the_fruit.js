/*
Guess the fruit
You are to create a basic guess the word game.

step 1
Prepare a list of your favourite fruits and store it in an appropriate data structure and have the computer select a random fruit as the secret word.

step 2
Base on the selected fruit give the use a hint like the example below. you can use prompt, alert or console.log to show the hint

for example if the secret fruit is "banana"

hint: it's 6 characters long. Starts with b and ends with a. guess the fruit.
instead of typing out the hint manually for every fruit. try to programmatically work out the starting letter, ending letter and how many characters long and combine everything together in a string template.

step 3
Allow the user to guess the fruit repeatedly until they guess correctly. keep track of the number of guesses.

wrong. try again.
step 4
Congratulate the user and display number of attempts they made.

Congrats! you got it in 5 attempts.
*/

console.log("happy happy")

let fruitList = ["apple", "banana", "mango", "kiwi", "watermelon", "guava", "starfruit", "orange", "passionfruit", "impatientfruit"]

let computerChoice = fruitList[Math.floor(Math.random() * fruitList.length)] 
// random computer choice

let choiceSplitWord = computerChoice.split("")
// split the string to array

let hint = `hint: it's ${computerChoice.length} characters long. Starts with ${choiceSplitWord[0]} and ends with ${choiceSplitWord[choiceSplitWord.length - 1]}. Guess the fruit!`

let answer = prompt("Guess what fruit I am thinking!")

let i = 1
answerCorrect = false
while(answerCorrect === false) {
    if (answer === computerChoice) {
        alert(`Congrats! you got it in ${i} attempt(s).`)
        answerCorrect = true
        break
    }
    
    answer = prompt(`Wrong. Try again! ${hint}`)
    i++
}
