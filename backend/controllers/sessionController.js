const { sessions, stats } = require("../data/mockData")

exports.startSession = (req, res) => {

  const session = {
    id: Date.now(),
    startTime: new Date()
  }

  sessions.push(session)

  res.json({
    message: "Session started",
    session
  })

}

exports.finishSession = (req, res) => {

  const session = sessions[sessions.length - 1]

  if (session) {
    session.endTime = new Date()
  }

  res.json({
    message: "Session finished",
    session
  })

}