const express = require('express')
const app = express()
const omdbSearch = require('omdb-api-search')
const omdb = omdbSearch.createClient('2a69b310')
const port = 3000

const { Pool } = require('pg')
const pool = new Pool({
    database: 'localomdb',
    user: 'postgres',
    password: process.env.PASSWORDLOMDB,
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/search', (req, res) => {
    omdb.findManyByTitle(req.query.title, (err, movieList) => {
        let movieTitleListArray = []
        // let imdbidListArray = []
        for(movie of movieList.Search) {
            // imdbidListArray.push(movie.imdbID)
            movieTitleListArray.push(movie.Title)
        }
        // console.log(imdbidListArray)
        // console.log(movieTitleListArray)
        res.render('search', { movieTitleListArray })
    }
    )
})

app.get('/check_db/:title', (req, res) => {
    const sql = `SELECT title FROM movies WHERE title ='${req.params.id}'`
    pool.query(sql, (err, dbRes) => {
        if(dbRes.rowCount !== 0) {
            res.send(dbRes.rows[0].title)
        } else {
            res.redirect(`/movie?title=${req.params.title}`)
        }
    })
})

app.get('/movie', (req, res) => {
    omdb.findOneByTitle(req.query.title, (err, movie) => {
        
        // save title, year, poster
        const sql = `INSERT INTO movies (imdbid, title, release_year, poster_url) VALUES ('${movie.imdbID}', '${movie.Title}', '${movie.Year}', '${movie.Poster}');`

        pool.query(sql, (err, dbRes) => {
            console.log(err)
            res.render('movie', {movieTitle: movie.Title, movieYear: movie.Year , moviePoster: movie.Poster})
        })

    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})