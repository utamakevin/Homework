// https://gist.github.com/epoch/e313940d0fc4ecd919cf69c0bab98256

// Greetings
function greetings(name) {
    console.log(`Nice to meet you, ${name}!`)
}

// Combine Words
function combineWords(str1, str2) {
    return str1.concat(str2)
}

// The World Translator
function helloWorld(language) {
    if (language == "id") {
        return "Halo dunia!"
    } else if (language == "es") {
        return "Hola mundo!"
    } else if (language == "de") {
        return "Hallo Welt"
    } else {
        return "Hello world"
    }
}
// can set default by function helloWorld(language = " en")

/*
function helloWorld(code) {
    let print = "Hello, world"

    switch(code) {
        case 'en': {
            print = "Hello world"
            break
        }
        case 'es': {
            print = "Hola, mundo"
            break
        }
    }
}

function helloWorld(code) {
    // object - lookup table
    let table = {
        en: "hello world",
        es: "hola mundo",
        de: "hello welt",
    }

    return table[code] or return table.code. ex: table[en]

}

*/

// The Grade Assigner
function assignGrade(number) {
    if (number < 50) {
        return "F"
    } else if (number < 60) {
        return "D"
    } else if (number < 70) {
        return "C"
    } else if (number < 80) {
        return "B"
    } else {
        return "A"
    }
}
// or the other way around, cascading from A to F

//The Pluralizer
function pluralize(noun, number) {
        if (number == 1) {
            return `${number} ${noun}`
        } else if (noun == "goose") {
                return `${number} geese`
            } else if (noun == "sheep") {
                return `${number} sheep`
            } else {
                return `${number} ${noun}s`
            }
        }

// Word Order Reverse
function wordReverse(str) {
    arr = str.split(" ")
    reversedArr = arr.reverse()
    reversedStr = reversedArr.join(" ")
    return reversedStr
}

// Transmorgrifier
function transmorgrifier(num1, num2, num3) {
    result = Math.pow((num1 * num2), num3)
    return result
}

// // Find Longest Word Length
function findLongestWordLength(arr) {
    let i = 0
    let longestWord = arr[0]
    while (i < arr.length) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
        i++
    }
    return longestWord.length
}
