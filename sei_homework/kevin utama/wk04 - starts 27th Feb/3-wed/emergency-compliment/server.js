const express = require('express')
const app = express()
const _ = require('underscore')
const port = 3000

let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


let gameChoices = ["rock", "paper", "scissors"]


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home-page')
})

app.get('/compliment', (req, res) => {
    res.render('compliments', { compliment: _.sample(compliments), style: _.sample(colors)})
})

app.get('/game', (req, res) => {
    let computerChoice = _.sample(gameChoices)
    let playerChoice = req.query.hand

    
    let result = calculateResult(playerChoice, computerChoice)
     
    res.render('game', {computerChoice: computerChoice, playerChoice: playerChoice, result: result})
})

function calculateResult(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return `draw`
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return `computes wins`
        } else {
            return `player wins`
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return `computes wins`
        } else {
            return `player wins`
        }
    } else if(playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return `computes wins`
        } else {
            return `player wins`
        }
    }

    
}







app.listen(port, () => {
    console.log(`listening on port ${port}`)
})