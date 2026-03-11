const { stats } = require("../data/mockData")

exports.getRecommendation = (req,res)=>{

  let recommendation = ""

  if(stats.water < 4){
    recommendation = "You need hydration. Drink a glass of water."
  }
  else if(stats.points > 1000){
    recommendation = "Great focus session! Take a short stretch break."
  }
  else{
    recommendation = "Relax your eyes for 20 seconds."
  }

  res.json({
    recommendation
  })

}