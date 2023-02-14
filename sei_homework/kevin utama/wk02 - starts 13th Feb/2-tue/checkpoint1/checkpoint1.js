// Data structures - Arrays
let pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

    // 1. write code to log maple syrup in the console using the the pantry array above
        //console.log(pantry[1][2][1])

// Loops
    // 1. using a while loop print the following in the console:
        // let number = 21
        // while (number >= 5) {
        //     console.log(number)
        //     number = number - 2
        // }

    // 2. loop through the days array using a while loop to print the following in the console
let days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

        // let i = 0
        // while (i < days.length) {
        //     console.log(`${i + 1} ${days[i]}`)
        //     i++
        // }

// Objects and arrays
// assume the following object:

// let brain = {
//   energyLevel: 10,
//   favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
// }

    // 1. write code to console log the last movie using the brain object above (assume Jaws is the first movie)
        // let lastMovie = brain.favMovies[brain.favMovies.length - 1]
        // console.log(lastMovie)


    //2. write code to change energyLevel to 99
        // brain.energyLevel = 99

// Builtin function
let favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

    // 1. write code to randomly select a movie from the favMovies array and store it in a variable named randomMovie (you are not required to define your own function here, that's optional)
        // let randomMovieIndex = Math.floor((Math.random() * favMovies.length))
        
        // randomMovie = favMovies[randomMovieIndex]
      


    // 2. write code to print the movie in uppercase in the console if the randomly selected movie is Jaws
       
        // if (randomMovie == favMovies[0]) {
        //     console.log(randomMovie.toUpperCase())
        // }

// Data types and return values
// prompt('enter a number');
    // 1. whats the data type of the return value of the above function call
        // string - as all user input are converted to strings.

// let input = prompt('enter a number');
    // 2. write code to add 5 to the input the user has entered and print the resulting sum in the console
        // result = Number(input) + 5
        // console.log(result)
