const express = require("express")
const router = express.Router()
const {
    getPerson,
    postPerson,
    postPostman,
    putPostman,
    deletePostman,
} = require("./peopleFunc")

router.route("/").get(getPerson).post(postPerson)
router.route("/postman").post(postPostman)
router.route("/postman/:id").put(putPostman)
router.route("/postman/:id").delete(deletePostman)

module.exports = router
