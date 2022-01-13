const http = require("http")

// const server = http.createServer((req, res) => {
//     res.end("hello world")
// })

const server = http.createServer()

server.on("request", (req, res) => {
    res.end("helllooo")
})

server.listen(5000)