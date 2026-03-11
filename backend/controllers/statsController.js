const { stats } = require("../data/mockData")

exports.getStats = (req, res) => {
  res.json(stats)
}