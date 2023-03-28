class Cart {
    constructor() {
        this.content = []
    }

    add(item, price, quantity) {
        const object = {}

        object.item = item
        object.price = price
        object.quantity = quantity

        this.content.push(object)
    }

    get totalPrice() {
        const totalPrice = []
        this.content.forEach(object => {
            totalPrice.push(object.price * object.quantity)
        })

        return totalPrice.reduce((accum, price) => accum + price)
    }

    get count() {
        const totalCount = []
        this.content.forEach(object => {
            totalCount.push(object.quantity)
        })

        return totalCount.reduce((accum, quantity) => accum + quantity)
    }

}


const z1 = new Cart
z1.add("mango", 10, 5)
z1.add("apple", 2, 5)
console.log(z1)
console.log(z1.count)
console.log(z1.totalPrice)