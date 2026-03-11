exports.getNextNudge = (req, res) => {

  const nudges = [
    "Drink water",
    "Stretch your body",
    "Rest your eyes",
    "Take deep breaths"
  ]

  const random = nudges[Math.floor(Math.random() * nudges.length)]

  res.json({
    nudge: random
  })

}