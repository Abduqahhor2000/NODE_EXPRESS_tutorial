const path = require("path")

console.log(path.sep)

const filePath = path.join("/contact", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const resolve = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(resolve)