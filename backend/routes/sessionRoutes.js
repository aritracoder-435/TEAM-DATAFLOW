const express = require("express")
const router = express.Router()

const {
  startSession,
  finishSession
} = require("../controllers/sessionController")

router.post("/start", startSession)
router.post("/finish", finishSession)

module.exports = router