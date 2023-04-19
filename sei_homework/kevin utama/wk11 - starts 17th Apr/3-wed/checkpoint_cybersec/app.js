const fs = require('fs')
const util = require('util')

const data = JSON.stringify(fs.readFileSync('./data.txt', 'utf8'))

const unit = data
    .slice(1, data.length - 1)
    .split('\\n')
    .slice(1)
    .filter(elem => elem.trim() !== '')
    .filter(elem => !(elem.includes('Misty Rose')))


let result = {}


for (i = 0; i < unit.length; i++) {
    result[unit[i].split(',')[0]] = [] // added names
}

for (i = 0; i < unit.length; i++) {
    result[unit[i].split(',')[0]].push({
        product: unit[i].split(',')[1], // added products
        unitPrice: unit[i].split(',')[2], // added unit price
        units: unit[i].split(',')[3], // added units
        totalPrice: (unit[i].split(',')[2] * unit[i].split(',')[3]).toFixed(2) // calculates total price
    })
}


console.log(result)

module.exports = result