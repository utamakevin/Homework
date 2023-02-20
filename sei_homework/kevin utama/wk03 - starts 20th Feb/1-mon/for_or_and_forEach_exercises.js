// 1. given the following array

let numbers = [4, 6, 5, 15, 10]

// use for of or forEach to console log each number times by 10

for(let number of numbers) {
    console.log(`${number}\n`.repeat(10) )
}

// 2. given the following array

let colours = ['mistyrose', 'green', 'blue', 'darkolivegreen']

/* use for or or forEach to console log each colour like the following
colour number 0 is mistyrose
colour number 1 is green
colour number 2 is blue
colour number 3 is darkolivegreen 
*/

colours.forEach((colour, index) => {
    console.log(`colour number ${index} is ${colour}`)
})

// 3. given the following array
let students = [
  { name: 'mary', score: 7 }, 
  { name: 'wally', score: 2 },
  { name: 'jo', score: 6 }, 
  { name: 'lisa', score: 8 }
]

// a. use the for of loop or the forEach function to loop through the above array and print each person name in the console  

for(let student of students) {
    console.log(student.name)
}

// b. use any loop to calculate the average score of all student

let sum = 0
for(let student of students) {
    sum += student.score
}
let average = sum/students.length
console.log(average)