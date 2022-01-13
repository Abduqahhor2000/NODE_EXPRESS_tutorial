const http = require('http')
const fs = require("fs")

const server = http.createServer((req, res) => {
    // const data = fs.readFileSync("./content/big.txt", "utf-8")
    // res.end(data)

    const data = fs.createReadStream("./content/big.txt", {highWaterMark: 90000})

    data.on("open", () => {
        data.pipe(res)
    })

    data.on("error", (err) => {
        res.end(err)
    })
})

server.listen(5000)
