const express = require('express')
const app = express()
const omdbSearch = require('omdb-api-search')
const omdb = omdbSearch.createClient('2f6435d9')

app.get('/movie/:title', (req, res) => {
    omdb.findOneByTitle(req.params.title, (err, movie) => {
        res.send(JSON.stringify(movie))
    })
})

app.get('/search', (req, res) => {
    omdb.findManyByTitle(req.query.title, (err, results) => {
        res.json(results)
    })
})

app.get('/food/:name', (req, res) => {
    res.send(req.params.name)
})

app.listen(3000)