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
app.post("/api/postman/people", (req, res) => {
    console.log(req.body)
    const {person} = req.body
    if(!person){
        return res.status(400).json({success: false, msg: "siz adashib yuribsiz."})
    }
    res.status(201).json({success: true, data: [...people, person]})
})
app.put("/api/postman/people/:id", (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((item)=>{
        return item.id === Number(id)
    })
    if(!person){
        return res.status(404).json({success: false, msg: `afsus bu id:${id} bo'yicha xich nima topilmadi.`})
    }

    const newPeople = people.map((item)=>{
        if(item.id === Number(id)){
            item.name = name
        }
        return item;
    })

    res.status(200).json({success: true, data: newPeople})
})
app.delete("/api/postman/people/:id", (req, res) => {
    console.log(req.body, req.params.id)
    const person = people.find((item)=>{
        return item.id === Number(req.params.id)
    })
    if(!person){
        return res.status(404).json({success: false, msg: `afsus bu id:${req.params.id} bo'yicha xich nima topilmadi.`})
    }
    const deletedPerson = people.filter((item)=>item.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: deletedPerson})
})



app.listen(5000, () => {console.log("Server has been started on port 5000...")})