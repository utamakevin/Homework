const express = require('express')
const app = express()
const omdbSearch = require('omdb-api-search')
const omdb = omdbSearch.createClient('2a69b310')
const port = 3000

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/movie', (req, res) => {
    omdb.findOneByTitle(req.query.title, (err, movie) => {
        res.render('movie', {movieTitle: movie.Title, movieYear: movie.Year , moviePoster: movie.Poster})
      })
})


app.get('/search', (req, res) => {
    omdb.findManyByTitle(req.query.title, (err, movieList) => {
        let movieTitleListArray = []
            for(movie of movieList.Search) {
                movieTitleListArray.push(movie.Title)
            }
        res.render('search', { movieTitleListArray: movieTitleListArray })
        }
    )
})






app.get('/about', (req, res) => {
    res.render('about')
})









app.listen(port, () => {
    console.log(`listening on port ${port}`)
})








