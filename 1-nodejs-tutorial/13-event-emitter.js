// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("console", (name) => {
    console.log(`How old is ${name}`)
})
customEmitter.on("console", (name, age) => {
    console.log(`${name} is ${age}`)
})

customEmitter.emit("console", "Jamol", "19")