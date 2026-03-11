const express = require("express")
const cors = require("cors")

const sessionRoutes = require("./routes/sessionRoutes")
const statsRoutes = require("./routes/statsRoutes")
const nudgeRoutes = require("./routes/nudgeRoutes")
const activityRoutes = require("./routes/activityRoutes")
const aiRoutes = require("./routes/aiRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/session", sessionRoutes)
app.use("/stats", statsRoutes)
app.use("/nudge", nudgeRoutes)
app.use("/activity", activityRoutes)
app.use("/ai", aiRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})

app.get("/", (req,res)=>{
  res.send("Wellness Nudge Backend Running")
})