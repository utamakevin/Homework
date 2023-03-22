const Monkey = require('./monkey.js')

let adam = new Monkey('Adam', 'Spider Monkey')

adam.eat('fruit salad')
adam.eat('banana milkshake')

console.log(adam.introduce())