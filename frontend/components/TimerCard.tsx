"use client"

import { useState, useEffect } from "react"

export default function TimerCard(){

const [seconds,setSeconds] = useState(1500)
const [running,setRunning] = useState(false)

useEffect(()=>{

let timer: any

if(running){

timer = setInterval(()=>{

setSeconds((prev)=>prev-1)

},1000)

}

return ()=> clearInterval(timer)

},[running])

const minutes = Math.floor(seconds/60)
const secs = seconds%60

return(

<div className="bg-white rounded-xl p-8 shadow text-center">

<h3 className="text-gray-500 mb-4">
FOCUS SESSION ACTIVE
</h3>

<div className="w-48 h-48 mx-auto border-8 border-green-200 rounded-full flex items-center justify-center">

<span className="text-4xl font-bold">
{minutes}:{secs.toString().padStart(2,"0")}
</span>

</div>

<div className="flex justify-center gap-4 mt-6">

<button
onClick={()=>setRunning(!running)}
className="bg-gray-200 px-4 py-2 rounded-lg"
>

{running ? "Pause":"Start"}

</button>

<button
onClick={()=>{
    setSeconds(0)
    setRunning(!running)
}}
className="bg-green-500 text-white px-6 py-2 rounded-lg"
>

Finish

</button>

</div>

</div>

)

}