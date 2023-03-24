# Gladiator Arena

![max](https://media0.giphy.com/media/hrnYspWWhsIyA/giphy.gif)

The Emperor has commissioned you to build a Gladiator Arena. You will do so using your knowledge of object-oriented JavaScript and classes.

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Open index.html in your browser
1. Write your JavaScript in [`script.js`](script.js)
1. When you're finished or when time is up, push your work to your remote repo, file a Pull Request, and react with a green check on Zoom

---

### Part 1: The Gladiator

Create a `Gladiator` class that has the following properties...

- a `name`
- a `weapon` (one of Spear, Club, Trident)

Once defined, you should be able to do the following...

```js
const max = new Gladiator("Maximus", "Trident")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"
```

### Part 2: The Arena

Create an `Arena` class that meets the following criteria...

#### An arena has a name

```js
const colosseum = new Arena("Colosseum")
console.log(colosseum.name) // => Colosseum
```

#### The name should be capitalized

```js
const megalopolis = new Arena("megalopolis")
console.log(megalopolis.name) // => Megalopolis
```

#### An arena can have gladiators

```js
const colosseum = new Arena("Colosseum")
console.log(colosseum.gladiators) // => []
```

#### You can add a gladiator to the arena

```js
const max = new Gladiator("Maximus", "Trident")
const colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
console.log(colosseum.gladiators) // => [Gladiator]
```

#### The arena should never have more than 2 gladiators in it at a time

```js
const max = new Gladiator("Maximus", "Trident")
const titus = new Gladiator("Titus", "Club")
const andronicus = new Gladiator("Andronicus", "Spear")
const colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators.length) // => 2
```

#### If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions

- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated.

```js
const max = new Gladiator("Maximus", "Trident")
const titus = new Gladiator("Titus", "Spear")
const colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]
```

#### Bonus

- Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything aside from Spear, Club or Trident. That means running code like `new Gladiator("Jesse", "Taco")` would [throw an error](https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/)
- Add a method to remove gladiators from the arena by name
- Update your winning conditions so that if the gladiator named "Maximus" is in the fight, he wins.
- Add a method to check to see if the crowd is entertained. The crowd is only entertained if Maximus is in the arena.
- Before a losing gladiator is eliminated, the user should be prompted to put their thumbs up or down. If user votes down, the losing gladiator is removed. If the user votes up, the gladiator stays in the arena and his opponent is removed. Use the `prompt()` function.
