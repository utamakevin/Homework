// Write a small program that stores students along with the grade that they are in.

// This is meant to test your class, object & array knowledge. No actual database needed.

// let school = new School("Haleakala Hippy School")
// If no students have been added, the db should be empty:

// school.db
// # => {}
// When you add a student, they get added to the correct grade.

// school.add("Jennifer", 2)
// school.db
// // {2: ["Jennifer"]}
// You can, of course, add several students to the same grade, and students to different grades.

// school.add("Phil", 1)
// school.add("Blair", 1)
// school.add("Jennifer", 2)
// school.add("Little Billy drop tables", 3)
// school.db
// // {1: ["Phil", "Blair"], 2: ["Jennifer"], 3: ["Little Billy dropp tables"]}
// Also, you can ask for all the students in a single grade:

// school.grade(1)
// // ["Phil", "Blair"]

class School {
    constructor() {
        this.db = {}
    }

    add(studentName, grade) {
        if(this.db[grade] === undefined) {
            this.db[grade] = [studentName]
            // console.log(this.db[grade])
        } else {
            this.db[grade].push(studentName)
        }
    }

    grade(grade) {
        return this.db[grade]
    }
}

let school = new School("Haleakala Hippy School")

school.add("Phil", 1)
school.add("Blair", 1)
school.add("Jennifer", 2)
school.add("Little Billy drop tables", 3)

console.log(school.db)
console.log(school.grade(1))