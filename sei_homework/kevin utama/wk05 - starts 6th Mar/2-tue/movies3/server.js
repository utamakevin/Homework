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
        let imdbidListArray = []
        for(movie of movieList.Search) {
            console.log(movie.imdbID)
            
            imdbidListArray.push(movie.imdbID)
            movieTitleListArray.push(movie.Title)
        }
        // console.log(imdbidListArray)
        // console.log(movieTitleListArray)
        res.render('search', { movieTitleListArray, imdbidListArray })
    }
    )
})

app.get('/check_db/:id', (req, res) => {
    const sql = `SELECT * FROM movies WHERE imdbid ='${req.params.id}'`
    pool.query(sql, (err, dbRes) => {
        console.log(dbRes.rows)
        console.log(dbRes.rowCount)
        if(dbRes.rowCount !== 0) {
            // res.send(dbRes.rows[0].title)
            res.redirect(`/localLibrary/${req.params.id}`)
        } else {
            res.redirect(`/movie/${req.params.id}`)
        }
    })
})

app.get('/localLibrary/:id', (req, res) => {
    const sql = `SELECT * FROM movies WHERE imdbid = $1`
    pool.query(sql, [req.params.id], (err, dbRes) => {
        console.log(err)
        const movieTitle = dbRes.rows[0].title
        const movieYear = dbRes.rows[0].release_year
        const moviePoster = dbRes.rows[0].poster_url
        res.render('localLibrary', { movieTitle, movieYear, moviePoster })
    })
})

app.get('/movie/:id', (req, res) => {

    omdb.findOneById(req.params.id, (err, movie) => {
        console.log(err)
        console.log(movie)
        const sql = `INSERT INTO movies (imdbid, title, release_year, poster_url) VALUES ($1, $2, $3, $4);`
        pool.query(sql, [movie.imdbID, movie.Title, movie.Year, movie.Poster], (err, dbRes) => {
            const movieTitle = movie.Title
            const movieYear = movie.Year
            const moviePoster = movie.Poster
            res.render('movie', { movieTitle, movieYear, moviePoster })
        })
        
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})