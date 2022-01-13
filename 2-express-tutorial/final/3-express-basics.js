const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Home Page")
    res.end()
})

app.get("/about", (req, res) => {
    res.status(200).send("About Page")
    res.end()
})
app.get("/products", (req, res) => {
    res.status(200).send("Products Page")
    res.end()
})

app.all("*", (req, res) => {
    res.status(404).send("Erroooooooooooooor!")
    res.end()
})


app.listen(5000, () => {
    console.log("Server has been started on port 5000...")
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen