export default function NudgeCard(){

function takeBreak(){
alert("Break started. Drink water and stretch!")
}

return(

<div className="bg-green-100 p-6 rounded-xl shadow">

<h2 className="text-xl font-semibold mb-3">
Next Nudge
</h2>

<p className="text-gray-600 mb-4">
It's time for a 1-minute hydration break. Step away from the screen and refresh.
</p>

<p className="text-sm text-gray-500 mb-3">
Scheduled for 10:45 AM (in 25 mins)
</p>

<div className="w-full bg-green-200 h-2 rounded">

<div className="bg-green-500 h-2 w-1/2 rounded"></div>

</div>

<button
onClick={takeBreak}
className="mt-6 w-full bg-white py-3 rounded-lg font-semibold"
>

Take Break Now →

</button>

</div>

)

}