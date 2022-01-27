const express = require("express")
const app = express()
const {people} = require("./data")
app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/api/people", (req, res) => {
    res.status(200).json({sucess: true, data: people})
})
app.post("/api/people", (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "Sen xozir juda qo'pol xato qilding. Shuni bildingmi?"})
    }
    res.status(201).json({success: true, person: name})
})
app.post("/login", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome dier ${name}`)
    }
    res.status(401).send("you are false and bad user!!!")
})

app.listen(5000, () => {console.log("Server has been started on port 5000...")})