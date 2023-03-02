// Question 1 (1pt)
// Name 3 ways to make a HTTP requests in a web browser.
    // 1. Using form to submit a query (or not) to a path
    // 2. By filling the address bar at the top of the browser with a path
    // 3. By clicking on an anchor/link

// Question 2 (1pt)
// how to access the query string sent to the server inside a route in an express web application? (answer with words or code) 
    // using <response>.query.<query key>
    // suppose the following code:
        // app.get('/example', (req, res) => {
            
        //     req.query.title
        // }
    // res is the response tag, and title is the query key. The request would be /example?title=<value of title key>

    // Question 3 (3pt)
    // app.get("/", (res, req) => {
    //   let slogan = "I love CSS"
    //   res.render("home", { message: slogan })
    // })
    // in the 4 lines of code above what is:
    
        // the name of the template?
            // boilerplate for a request and response for a route to root directory of the server (/) using express.js
        // what is the path of the route?
            // root path (/)
        // what is the value of the message property?
            // the value of slogan, which is "I love CSS" string
        // there is a bug. can you spot it?
            // the respond tag (second parameter of the app.get) is named req
            // app.get("/", (res, req) => {
            //                    ^
            // the res is refering to the first parameter, which is allocated for request.
            // render is a respond from the server. Therefore, the function is wrong for such purpose.

// Question 4 (2pt)
// Assume the following object...

let data = {
    town: {
    residents: ["Maurice", "Belle", "Gaston"],
    castle: {
        num_rooms: 47,
        residents: [
        {
            name: "Robby Benson",
            "year of birth": 1956
        }
        ],
        guests: ['birds']
    }
    }
}

// Programmatically using js...

// print the number of rooms in the castle by accessing the object
    // console.log(data.town.castle.num_rooms)
// Add "Belle" to the beginning of the guests array
    // data.town.castle.guests.unshift('Belle')
    // console.log(data.town.castle.guests)
// print the year of birth for robby by accessing the object
    // console.log(data.town.castle.residents[0]["year of birth"])

// Add a new key and value pair to the castle object (key cook value "Mrs Potts")
    // data.town.castle.cook = "Mrs Potts"

// Question 5 (2pt)
// Assume you have the following hash...

let resident = {
    name: "Belle",
    friends: [
    {
        name: "Chip Potts",
        personality: "adventurous"
    },
    {
        name: "Cogsworth",
        personality: "serious"
    },
    {
        name: "Lumière",
        personality: "charsmatic"
    
    },
    {
        name: "Mrs. Potts",
        personality: "intelligent"
    }
    ]
}
// Using a any loop and template strings, print each name in friends to the Terminal...like below

// Belle is friends with Chip Potts
// Belle is friends with Cogsworth
// Belle is friends with Lumière
// Belle is friends with Mrs. Potts

    // for(friend of resident.friends) {
    //     console.log(`Belle is friends with ${friend.name}`)
    // }

// Question 6 (3pt)
// Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

// letterReverse("Now I know what a TV dinner feels like")
// "woN I wonk tahw a VT rennid sleef ekil"

// letterReverse("Put Hans back on the line")
// "tuP snaH kcab no eht enil"

    function letterReverse(string) {
        let words = string.split(" ")
        let reversed = []
        for(word of words) {
            reversed.push(word.split("").reverse().join(""))
        }
        return reversed.join(" ")
    }

// Question 7 (3pt)
// Define a scream function that accepts a single parameter and when called should as return a string as per the examples below"

// scream(0) //=> "crickets"
// scream(1) //=> "lol"
// scream(2) //=> "lolol"
// scream(3) //=> "lololol"
// scream(4) //=> "lolololol"
// scream(5) //=> "lololololol"
// scream(7) //=> "lololololololol"
// scream(10) //=> "lolololololololololol"    

function scream (index) {
        if(index < 1) {
            return 'crickets'
        } else {
            return 'l' + 'ol'.repeat(index)
        }
    }