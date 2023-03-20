// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

function onlyEven(arr) {
    let result = []
    for(elem of arr) {
        if(elem % 2 === 0) {
            result.push(elem)
        }
    }
    return result
}

// console.log(onlyEven([1,2,3,4,5,6,7]))

function onlyEven2(arr) {
    let result = arr.filter(num => num % 2 === 0)
    return result
}

// console.log(onlyEven2([1,2,3,4,5,6,7]))

// -------------------------------------------------------

// countIntegers – counts how many integers there are in an array

function countIntegers(arr) {
    let result = arr.filter(num => Number.isInteger(num)).length
    return result
}

// console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]))

// -------------------------------------------------------

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

function lengths(arr) {
    let result = arr.map(str => str.length)
    return result
}

// console.log(lengths(['my', 'cake', 'pudding']))

// -------------------------------------------------------

// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map

function getSquares(arr) {
    return arr.map(num => Math.pow(num, 2))
}

// console.log(getSquares([1, 2, 3, 4, 5]))

// -------------------------------------------------------

const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]
// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.

const totalValue = inventory.filter(item => item.type === 'machine').map(machine => machine.value).reduce((total, value) => total + value)

// console.log(totalValue)

// Get an array of all the machines with value over 500

const over500 = 
    inventory
    .filter(item => item.type === 'machine')
    .filter(machine => machine.value > 500)

// console.log(over500)

// -------------------------------------------------------

let items = [
    { name: "apple", type: "fruit", full_price: 2, discount: "20%" },
    { name: "potato", type: "vegie", full_price: 5, discount: "0%" },
    { name: "banana", type: "fruit", full_price: 4, discount: "50%" },
    { name: "orange", type: "fruit", full_price: 3, discount: "0%" },
    { name: "brocoli", type: "vegie", full_price: 2, discount: "10%" },
  ]

//   calculate total price of all fruits after discount

console.log(
    items
    .map(item => item.full_price - (item.full_price * parseFloat(item.discount)/100))
    .reduce((total, price) => total + price)
)
