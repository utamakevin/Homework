const palette = document.querySelector('#palette')
const inputColor = document.querySelector('input')
const inputMovie = document.querySelectorAll('input')[1]
const colorForm = document.querySelector('#select-color')
const movieForm = document.querySelector('#select-movie')
const pixelHolder = document.querySelector('#pixel-holder')



function handleSubmitColor(e) {
    e.preventDefault()
    console.log('submit')
    let color = inputColor.value
    palette.style.backgroundColor = color
}

function handleSubmitMovie(e) {
    e.preventDefault()
    let title = inputMovie.value
    fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${title}`)
    .then(res => res.json())
    .then(data => data.Poster)
    .then(poster => document.body.style.backgroundImage = `url('${poster}')`)
}

function handleMouseover(e) {
    e.target.style.backgroundColor = palette.style.backgroundColor
}



function createPixels(sumOfPixel) {
    for(let i = 0; i < sumOfPixel; i++) {
        let pixel = document.createElement('div')
        pixelHolder.appendChild(pixel)
        pixel.addEventListener('mouseover', handleMouseover)
    }
}

createPixels(10000)










colorForm.addEventListener('submit', handleSubmitColor)
movieForm.addEventListener('submit', handleSubmitMovie)