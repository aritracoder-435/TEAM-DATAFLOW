const express = require("express")
const router = express.Router()

const { getNextNudge } = require("../controllers/nudgeController")

router.get("/next", getNextNudge)

module.exports = router