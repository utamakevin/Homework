const express = require("express")
const app = express()

app.set("view engine", "ejs")

// home screen
app.get('/', (req, res) => {
    res.render('greetings')
})

// server time
app.get('/time', (req, res) => {
    res.send(new Date().toLocaleString("en-GB", {timeZone: "Asia/Jakarta"}))
})

// burgers
app.get('/burger', (req, res) => {
    res.render('burgers', {num: req.query.num})
})

app.listen(3000)