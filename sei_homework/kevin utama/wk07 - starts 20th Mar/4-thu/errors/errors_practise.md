# JS Errors Practice

In the spaces below, **write down what each error message means.** Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

**Hint:** In a few of the spaces below, rather than just putting stuff inside the `<script>` tags you may need to edit the tags themselves.

### learn to love error messages

Write code to intentionally generate these errors yourself! You can edit the `<script>` element of the enclosed [index.html](./index.html) as your scratch pad.

------------

- `Uncaught SyntaxError: Unexpected token {`

  > A misspelled syntax, such as missing a semicolon or a bracket.

  ```html
  <script>
    function helloWorld{}  {
      return 'hello world'
    }
  </script>
  ```

- `Uncaught ReferenceError: greeting is not defined`

  > Referring to a variable/object/function that does not exist.

  ```html
  <script>
    function greetings(location) {
      return `hello from ${location}`
    }

    console.log(greeting('paris'))  
  </script>
  ```

- `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`

  > The file you are getting was not found, due to wrong path or wrong file name.

  ```html
  <script src="scripts.js"> // the file is script.js instead of scripts.js
  </script>
  ```

- `GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)`

  > The route does not exist.

  ```html
  <script>
    const express = require('express')
    const app = express()

    app.get('/', (req, res) => {

        res.send('home')
    })
    // this is the only route
    app.listen(3000)

    // then get localhost:3000/asd
  </script>
  ```

- `Uncaught TypeError: "hello".push is not a function`

  > The method is applied to a wrong data type and therefore does not recognise the function.

  ```html
  <script>
    let helloWorld = 'hello'.push('world')
  </script>
  ```

- `Uncaught TypeError: str.join is not a function`

  > Join is an array method and therefore when applied to a string throws an error.

  ```html
  <script>
    let str = 'hello world'
    let combinedStr = str.join()
  </script>
  ```

- `Uncaught TypeError: Cannot read property 'name' of undefined`

  > The object/function/elem accessed for the property 'name' is undefined/does not exist/mistyped.

  ```html
  <script>
    let agent = 'James Bond'
    console.log(agent.user.name)
  </script>
  ```

- `Uncaught SyntaxError: missing ) after argument list`

  > JS expect a closing bracket after declaring an argument. The bracket may be missing (not typed in) or results from a syntax error as below.

  ```html
  <script>
    let favouriteFruit = apple 
    console.log('my favourite fruits are' favouriteFruit) // there is a missing `+` between the string and the variable `favouriteFruit`.
  </script>
  ```

- `Uncaught ReferenceError: Invalid left-hand side in assignment`

  > The left-hand side of an equation (assignment) is invalid.

  ```html
  <script>
    if (num = 3 || num = 4) {
      console.log('the number is either 3 or 4')
    } // the left hand side (the if statement) is assigning num to the value of 3 or the value of 4, which JS thinks does not make sense.

    // another example
    function favNumber() {
      return 15
    }

    favNumber() = 10 // assigning a value to a function does not make sense either.
  </script>
  ```

- `Uncaught SyntaxError: Unexpected number`

  > You put a number somewhere that should not have number.

  ```html
  <script>
    function threeFavNumber(number 1, number 2, number 3) { // JS does not take argument separated by space, so this creates unexpected numbers
      return number 1 + number 2 + number 3
    }

    threeFavNumber(1,2,3)
  </script>
  ```

- `Uncaught SyntaxError: Unexpected string`

  > You put string somewhere you're not suppose to.

  ```html
  <script>
    function threeFavNumber('number1', 'number2', 'number3') { // arguments expext variables
      return number1 + number2 + number3
    }

    threeFavNumber(1,2,3)
  </script>
  ```

- `Uncaught SyntaxError: Unexpected identifier`

  > JS does not recognised the identifier you are passing.

  ```html
  <script>
    Const secret = process.env.SECRET // const should be all lowercase
    console.log(secret)
  </script>
  ```

- `Uncaught RangeError: Maximum call stack size exceeded`

  > Stack overflow: the function is looping infinitely, creating a stack that exceeds the allowable amount.

  ```html
  <script>
  function getHelp() {
    return getHelp()
  } 

  getHelp()
  </script>
  ```