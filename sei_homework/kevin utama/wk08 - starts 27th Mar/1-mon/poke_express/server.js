const express = require("express")
const app = express()
const config = require("./config")
const pokemon = require('./pokemon.js')

app.use(express.static("public"))
app.use(express.json())

app.get("/api/pokemon", (req, res) => {
  res.json(pokemon)
})

app.get('/api/pokemon/:name', (req, res) => {
  let searchedPokemon = []
  pokemon.forEach(pokemon => {
    if(pokemon.name === req.params.name) {
      searchedPokemon.push(pokemon)
    }
  })
  res.json(searchedPokemon[0])
})


app.post('/api/pokemon', (req, res) => {
  pokemon.push({ name: req.body.name, img: req.body.img })
  res.json({ message: 'new pokemon added' })
})


app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
