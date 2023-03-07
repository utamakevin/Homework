const express = require('express')
const app = express()
const methodOverride = require('method-override')
const port = 3000

const { Pool } = require('pg')
const pool = new Pool({
    database: 'planets_app',
    user: 'postgres',
    password: process.env.PASSWORDPA,
})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

app.get('/', (req, res) => {
    const sql = `SELECT * FROM planets;`
    pool.query(sql, (err, dbRes) => {
        if(err) {
            console.log(err)
        } else {
            const planets = dbRes.rows
            console.log(planets)
            res.render('home', { planets })

        }
    })
})

app.get('/planets/:id', (req, res) => {
    const sql = `SELECT * FROM planets WHERE id=${req.params.id};`
    pool.query(sql, (err, dbRes) => {
        const planet = dbRes.rows[0]
        res.render('planet_details', { planet })
    })
})

app.get('/add', (req, res) => {
    res.render('new_planet')
})

app.post('/add_planet', (req, res) => {
    const sql = `INSERT INTO planets(name, image_url, diameter, mass, moon_count) VALUES('${req.body.name}', '${req.body.image_url}', '${req.body.diameter}', '${req.body.mass}', ${req.body.moon_count});`
    pool.query(sql, (err, dbRes) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
})

app.get('/edit_planet/:planet_id', (req, res) => {
    const sql = `SELECT * FROM planets WHERE id=${req.params.planet_id};`
    pool.query(sql, (err, dbRes) => {
        if (err) {
            console.log(err)
        } else {
            const planet = dbRes.rows[0]
            const planetUrl = dbRes.image_url
            res.render('edit_planet', { planet, planetUrl })
        }
    })
})

app.post('/update_planet', (req, res) => {
    const sql = `UPDATE planets SET name='${req.body.name}', image_url='${req.body.image_url}' WHERE id=${req.body.planet_id}; `
    pool.query(sql, (err, dbRes) => {
        res.redirect('/')
    })
})

app.delete('/delete_planet', (req, res) => {
    const sql = `DELETE FROM planets WHERE id=${req.body.planet_id};`
    pool.query(sql, (err, dbRed) => {
        res.redirect('/')
    })
})




app.listen(port, () => {
    console.log(`listening on port ${port}`)
})