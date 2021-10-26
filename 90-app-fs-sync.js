// readFileSync, writeFileSync

const fs = require('fs')

const first = fs.readFileSync("./content/first.txt", "utf8")
const second = fs.readFileSync("./content/second.txt", "utf8")

console.log(first)
console.log(second)

fs.writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`)
fs.writeFileSync("./content/result-sync.txt", `\nHere is the result : ${first}, ${second}`, {flag: "a"})
