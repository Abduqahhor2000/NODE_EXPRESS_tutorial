const express = require("express")
const app = express()
const authorize = require("./authorize")
const logger = require("./logger")
const morgan = require("morgan")

// req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send(`<h1>Home</h1>`)
})
app.get("/about", (req, res) => {
    res.send(`<h1>About</h1>`)
})
app.get("/api/products", (req, res) => {
    res.send(`<h1>Products</h1>`)
})
app.all("*", (req, res) => {
    res.send("Page not fount!")
})


app.listen(5000, () => {console.log("Server has been started on port 5000...")})