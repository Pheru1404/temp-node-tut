// local, not exported
const secret = 'SUPER SECRET'
// shared, exported
const john = 'john'
const peter = 'peter'

console.log(module)
module.exports = { john, peter }