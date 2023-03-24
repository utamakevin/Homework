class Gladiator {
    constructor(name, weapon) {
        if(weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident') {
            this.name = name
            this.weapon = weapon
        } else {
            throw new Error(`${weapon} is an invalid weapon`)
        }
    }
}

class Arena {
    constructor(name) {
        const nameArr = name.split('')
        const firstLetterCap = nameArr[0].toUpperCase()
        nameArr.shift()
        nameArr.unshift(firstLetterCap)

        this.name = nameArr.join('')
        this.gladiators = []
    }

    addGladiator(gladiator) {
        if(this.gladiators.length < 2) {
            this.gladiators.push(gladiator)
        } else {
            return
        }
    }

    removeGladiator(gladiator) {
        this.gladiators.pop(gladiator)
    }

    fight() {
        const gladiator1 = this.gladiators[0]
        const gladiator2 = this.gladiators[1]


        if(gladiator1.weapon === gladiator2.weapon) {
            this.gladiators = []

        } else if(gladiator1.weapon === 'Spear') {
            if(gladiator2.weapon === 'Club') {
                this.gladiators.pop(gladiator2)
            } else if(gladiator2.weapon === 'Trident') {
                this.gladiators.pop(gladiator1)
            }
        } else if(gladiator1.weapon === 'Club') {
            if(gladiator2.weapon === 'Trident') {
                this.gladiators.pop(gladiator2)
            } else if(gladiator2.weapon === 'Spear') {
                this.gladiators.pop(gladiator1)
            }
        } else if(gladiator1.weapon === 'Trident') {
            if(gladiator2.weapon === 'Spear') {
                this.gladiators.pop(gladiator2)
            } else if(gladiator2.weapon === 'Club') {
                this.gladiators.pop(gladiator1)
            }
        }
    }
}



const max = new Gladiator("Maximus", "Trident")
const titus = new Gladiator("Titus", "Spear")
const colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)


// colosseum.removeGladiator(max)
console.log(max)
// colosseum.fight()
// console.log(colosseum.gladiators) // => [max]
