const Clock = require('./clock.js')

clock = new Clock()
clock.tick()
clock.tick()
clock.tick()
console.log(clock.now()) // 3
clock.reset()
console.log(clock.now()) // 0