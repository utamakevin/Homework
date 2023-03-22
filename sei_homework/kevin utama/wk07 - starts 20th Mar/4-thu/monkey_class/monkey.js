class Monkey {
    constructor(name, species) {
        this.name = name
        this.species = species
        this.foodsEaten = []
    }

    eat(food) {
        this.foodsEaten.push(food)
    }

    introduce() {
        return `Hi my name is ${this.name}. I am a ${this.species}. I had ${this.foodsEaten} for brunch.`
    }

}

module.exports = Monkey