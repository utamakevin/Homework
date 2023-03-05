const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 3000


app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index', { numberOfBottles: '99' })
})


app.get('/:number', (req, res) => {
    let numberOfBottles = req.params.number
    if (req.params.number > 1) {
        res.render('index', {numberOfBottles})

    } else if (Number(req.params.number) === 1) {
        res.render('one')
    } else if (Number(req.params.number) === 0) {
        res.render('zero')
    }

})

app.get('/test', (req, res) => {
    res.render('test')
})

app.get('/1', (req, res) => {
    res.render('one')
})

app.get('/0', (req, res) => {
    res.render('zero')
})






// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}





app.listen(port, () => {
    console.log(`listening on port ${port}`)
})