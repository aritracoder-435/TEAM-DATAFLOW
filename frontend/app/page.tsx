"use client"

import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatsCard from "../components/Statscard"
import TimerCard from "../components/TimerCard"
import NudgeCard from "../components/NudgeCard"

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts"

export default function Dashboard(){

const [goal,setGoal] = useState(60)
const [nudges,setNudges] = useState(14)
const [activeTab,setActiveTab] = useState("dashboard")

const [timer,setTimer] = useState(0)
const [selectedWorkout,setSelectedWorkout] = useState("")
const [isWorkoutActive,setIsWorkoutActive] = useState(false)

const [suggestion,setSuggestion] = useState("")
const [wellnessScore,setWellnessScore] = useState(88)

const [username,setUsername] = useState("")
const [gender,setGender] = useState("")
const [height,setHeight] = useState("")
const [weight,setWeight] = useState("")
const [age,setAge] = useState("")
const [profileSaved,setProfileSaved] = useState(false)

const totalTime = 30

/* SMART NUDGES */

const smartNudges:any={

Running:[
"Hydrate after your run 💧",
"Walk slowly to cool down 🚶",
"Stretch your legs 🦵"
],

Pushups:[
"Relax arms 💪",
"Stretch chest 🙆",
"Deep breathing 🌬️"
],

Skipping:[
"Shake legs 🦵",
"Drink water 💧",
"Slow breathing 🌬️"
],

Weightlifting:[
"Rest muscles 🪑",
"Stretch shoulders 🙆",
"Hydrate body 💧"
],

Stretching:[
"Meditate 30 sec 🧘",
"Relax 😌",
"Deep breathing 🌬️"
],

"Jumping Jacks":[
"Relax shoulders 😌",
"Drink water 💧",
"Stretch arms 🙆"
]

}

/* WORKOUT BUTTONS */

const workouts=[

{ name:"Running",color:"bg-blue-500 hover:bg-blue-600"},
{ name:"Jumping Jacks",color:"bg-purple-500 hover:bg-purple-600"},
{ name:"Skipping",color:"bg-yellow-500 hover:bg-yellow-600"},
{ name:"Pushups",color:"bg-green-500 hover:bg-green-600"},
{ name:"Weightlifting",color:"bg-pink-500 hover:bg-pink-600"},
{ name:"Stretching",color:"bg-indigo-500 hover:bg-indigo-600"}

]

/* GOALS WORKOUT PLAN */

const workoutPlan=[

{workout:"Running",color:"bg-blue-500",img:"https://cdn-icons-png.flaticon.com/512/861/861512.png"},
{workout:"Pushups",color:"bg-green-500",img:"https://cdn-icons-png.flaticon.com/512/3043/3043887.png"},
{workout:"Jumping Jacks",color:"bg-purple-500",img:"https://cdn-icons-png.flaticon.com/512/1048/1048953.png"},
{workout:"Stretching",color:"bg-yellow-500",img:"https://cdn-icons-png.flaticon.com/512/2964/2964514.png"},
{workout:"Skipping",color:"bg-pink-500",img:"https://cdn-icons-png.flaticon.com/512/3079/3079166.png"},
{workout:"Weightlifting",color:"bg-indigo-500",img:"https://cdn-icons-png.flaticon.com/512/2331/2331970.png"}

]

/* LEADERBOARD */

const leaderboard=[

{name:"Alex",score:120},
{name:"Sam",score:95},
{name:"Jordan",score:80},
{name:"You",score:wellnessScore}

]

/* FUNCTIONS */

const increaseGoal=()=>setGoal(goal+10)

const completeNudge=()=>setNudges(nudges+1)

/* START WORKOUT */

const startWorkout=(name:string)=>{

if(isWorkoutActive) return

setIsWorkoutActive(true)
setSelectedWorkout(name)
setTimer(totalTime)
setSuggestion("")

let time=totalTime

const interval=setInterval(()=>{

time--
setTimer(time)

if(time<=0){

clearInterval(interval)

setIsWorkoutActive(false)

const tips=smartNudges[name]
const aiTip=tips[Math.floor(Math.random()*tips.length)]

setSuggestion(aiTip)

setWellnessScore(prev=>prev+2)

}

},1000)

}

/* SAVE PROFILE */

const saveProfile=()=>{

if(!username || !gender || !height || !weight || !age){
alert("Fill all fields")
return
}

setProfileSaved(true)
alert("Profile saved")

}

/* WEEKLY GRAPH */

const weeklyData=[

{day:"Sun",minutes:120},
{day:"Mon",minutes:46},
{day:"Tue",minutes:80},
{day:"Wed",minutes:95},
{day:"Thu",minutes:60},
{day:"Fri",minutes:110},
{day:"Sat",minutes:70}

]

const progress=((totalTime-timer)/totalTime)*283

return(

<div className="flex bg-gray-100 min-h-screen">

<Sidebar setActiveTab={setActiveTab}/>

<div className="flex-1">

<Navbar/>

<div className="p-8 bg-pink-50 min-h-screen">

{/* DASHBOARD */}

{activeTab==="dashboard" &&(

<>

<div className="grid grid-cols-2 gap-6">

<TimerCard/>

<div onClick={completeNudge}>
<NudgeCard/>
</div>

</div>

<div className="bg-white p-6 rounded-xl shadow mt-6">

<h2 className="text-xl font-semibold text-green-700">
Daily Focus Goal
</h2>

<p className="text-gray-600">
Current Goal: {goal} minutes
</p>

<button
onClick={increaseGoal}
className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
>
Increase Goal
</button>

</div>

<div className="grid grid-cols-3 gap-6 mt-6">

<StatsCard title="Focus Minutes Today" value="320"/>
<StatsCard title="Nudges Completed" value={nudges}/>
<StatsCard title="Wellness Score" value={wellnessScore+"%"}/>

</div>

</>

)}

{/* GOALS PAGE */}

{activeTab==="goals" &&(

<div>

<h2 className="text-3xl font-bold text-green-700 mb-6">
30 Day Fitness Challenge
</h2>

<div className="grid grid-cols-5 gap-6">

{Array.from({length:30}).map((_,index)=>{

const workout=workoutPlan[index%workoutPlan.length]

return(

<div
key={index}
className={`${workout.color} text-white rounded-2xl p-4 shadow-lg flex flex-col items-center hover:scale-105 transition`}
>

<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3">

<img src={workout.img} className="w-10"/>

</div>

<h3 className="font-bold">
Day {index+1}
</h3>

<p className="text-sm">
{workout.workout}
</p>

</div>

)

})}

</div>

</div>

)}

{/* ACTIVITY */}

{activeTab==="activity" &&(

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-semibold text-green-700">
Weekly Focus Activity
</h2>

<div className="h-72">

<ResponsiveContainer width="100%" height="100%">

<BarChart data={weeklyData}>

<CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3"/>
<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>

<Bar
dataKey="minutes"
fill="#22c55e"
radius={[8,8,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

)}

{/* WORKOUT */}

{activeTab==="nudges" &&(

<div>

{timer>0 &&(

<div className="flex justify-center mb-10">

<div className="relative w-48 h-48">

<svg className="transform -rotate-90" width="200" height="200">

<circle cx="100" cy="100" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none"/>

<circle
cx="100"
cy="100"
r="45"
stroke="#22c55e"
strokeWidth="10"
fill="none"
strokeDasharray="283"
strokeDashoffset={progress}
strokeLinecap="round"
/>

</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">

<h2>{selectedWorkout}</h2>

<div className="text-3xl font-bold">
{timer}s
</div>

</div>

</div>

</div>

)}

{suggestion &&(

<div className="bg-yellow-100 border border-yellow-400 p-4 rounded-xl text-center mb-6">

<h3 className="font-bold text-yellow-700">
AI Suggestion
</h3>

<p>{suggestion}</p>

</div>

)}

<div className="grid grid-cols-3 gap-6">

{workouts.map(workout=>(

<button
key={workout.name}
disabled={isWorkoutActive}
onClick={()=>startWorkout(workout.name)}
className={`p-6 rounded-xl shadow text-white
${isWorkoutActive?"bg-gray-400":workout.color}`}
>

{workout.name}

</button>

))}

</div>

</div>

)}

{/* LEADERBOARD */}

{activeTab==="leaderboard" &&(

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold text-green-700 mb-4">
Wellness Leaderboard
</h2>

<table className="w-full">

<thead>

<tr className="border-b">
<th>Rank</th>
<th>User</th>
<th>Score</th>
</tr>

</thead>

<tbody>

{leaderboard.sort((a,b)=>b.score-a.score)
.map((user,index)=>(

<tr key={index} className="border-b">

<td>{index+1}</td>
<td>{user.name}</td>
<td>{user.score}</td>

</tr>

))}

</tbody>

</table>

</div>

)}

{/* SETTINGS */}

{activeTab==="settings" &&(

<div className="bg-white p-8 rounded-xl shadow max-w-xl">

<h2 className="text-2xl font-bold text-green-700 mb-6">
Personal Details
</h2>

<div className="space-y-4">

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<div className="flex gap-4">

<button
onClick={()=>setGender("Male")}
className={`px-4 py-2 rounded-lg text-white
${gender==="Male"?"bg-blue-600":"bg-blue-400"}`}
>
Male
</button>

<button
onClick={()=>setGender("Female")}
className={`px-4 py-2 rounded-lg text-white
${gender==="Female"?"bg-pink-600":"bg-pink-400"}`}
>
Female
</button>

</div>

<input
type="number"
placeholder="Height"
value={height}
onChange={(e)=>setHeight(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<input
type="number"
placeholder="Weight"
value={weight}
onChange={(e)=>setWeight(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<input
type="number"
placeholder="Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
className="w-full p-3 border rounded-lg"
/>

<button
onClick={saveProfile}
className="w-full bg-green-500 text-white py-3 rounded-lg"
>
Save Details
</button>

</div>

{profileSaved &&(

<div className="mt-6 bg-green-100 p-4 rounded-lg">

<p>Name: {username}</p>
<p>Gender: {gender}</p>
<p>Height: {height}</p>
<p>Weight: {weight}</p>
<p>Age: {age}</p>

</div>

)}

</div>

)}

</div>

</div>

</div>

)

}