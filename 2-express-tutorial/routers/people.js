const express = require("express")
const router = express.Router()
const {people} = require("../data")

router.get("/", (req, res) => {
    res.status(200).json({sucess: true, data: people})
})
router.post("/", (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "Sen xozir juda qo'pol xato qilding. Shuni bildingmi?"})
    }
    res.status(201).json({success: true, person: name})
})
router.post("/postman", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "siz adashib yuribsiz."})
    }
    res.status(201).json({success: true, data: [...people, name]})
})
router.put("/postman/:id", (req, res) => {
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
router.delete("/postman/:id", (req, res) => {
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

module.exports = router
