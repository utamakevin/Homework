// 1. Sum
    // Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array

    function sum(arr) {
        return arr.reduce((accum, num) => accum + num, 0)
    }

    // console.log(sum([1,2,3,4]), // => 10
    // sum([1,2,3]), // => 6
    // sum([]) // => 0)
    // )

// 2. Lengths
    // Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

    function lengths(arr) {
        return arr.map(str => str.length)
    }

    // console.log(lengths(['my', 'cake', 'pudding']), // => [2,4,7]
    // lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4])
    // )

// 3. Sum of 
// using the sum and lengths function you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console.

    let fruits = ['kiwi', 'apple', 'mango']

    sum(lengths(fruits))
    // console.log(sum(lengths(fruits)))
