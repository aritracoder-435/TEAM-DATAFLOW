import { Bell } from "lucide-react"

export default function Navbar(){

return(

<div className="flex justify-end items-center gap-6 bg-white p-4 border-b">

<div className="relative cursor-pointer">

<Bell size={22}/>

<span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
3
</span>

</div>

<img
src="https://i.pravatar.cc/40"
className="w-9 h-9 rounded-full"
/>

</div>

)

}