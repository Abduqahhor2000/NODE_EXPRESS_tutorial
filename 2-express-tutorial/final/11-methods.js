const express = require("express")
const app = express()

app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())




app.listen(5000, () => {console.log("Server has been started on port 5000...")})