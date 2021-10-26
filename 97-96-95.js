// Modules

// Option 1
// const names = require("./4-names")
// Option 2
const { john, peter } = require("./96-names")


const sayHi = require("./95-utils")


sayHi("susan")

// Option 1
// console.log(names)
// sayHi(names.john)
// sayHi(names.peter)

// Option 2
sayHi(john)
sayHi(peter)

