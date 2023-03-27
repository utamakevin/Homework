const form = document.querySelector('form')
const div = document.querySelector('div')
const input = document.querySelector('input')


function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${input.value}&limit=10&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    // .then(res => console.log(res.data))
    .then(res => {
        div.innerHTML = ''
        res.data.forEach(item => {
            console.log(item.url)
            let img = document.createElement('img')
            img.src = item.images.original.url
            div.appendChild(img)
        })
    })
    

}
    







form.addEventListener('submit', handleSubmit)