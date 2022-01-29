const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome dier ${name}`)
    }
    res.status(401).send("you are false and bad user!!!")
})

module.exports = router