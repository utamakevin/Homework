const select = document.querySelector('#city-type')


let nycOption = document.createElement('option')
let sfOption = document.createElement('option')
let laOption = document.createElement('option')
let sydOption = document.createElement('option')
let atxOption = document.createElement('option')

nycOption.textContent = 'NYC'
sfOption.textContent = 'SF'
laOption.textContent = 'LA'
sydOption.textContent = 'SYD'
atxOption.textContent = 'ATX'

select.appendChild(nycOption)
select.appendChild(sfOption)
select.appendChild(laOption)
select.appendChild(sydOption)
select.appendChild(atxOption)


function handleChange(e) {
    console.log('change')
    document.body.className = ''
    document.body.classList.add(`${select.value.toLowerCase()}`)
}


select.addEventListener('change', handleChange)

