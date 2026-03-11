const { activity } = require("../data/mockData")

exports.getActivity = (req,res)=>{
  res.json(activity)
}