const path = require("path")

console.log(`Path separator: ${path.sep}`)

const filePath = path.join("./content", "subfolder", "test.txt")
console.log(filePath);

const baseName = path.basename(filePath)
console.log(baseName)

const directoryName = path.dirname(filePath)
console.log(directoryName);

const absolutePath = path.resolve(filePath)
console.log(absolutePath);

const absolutePath2 = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolutePath2);