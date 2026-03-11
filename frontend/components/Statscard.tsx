export default function StatsCard({title,value}: any){

return(

<div className="bg-white p-6 rounded-xl shadow text-center">

<h2 className="text-2xl font-bold">
{value}
</h2>

<p className="text-gray-500">
{title}
</p>

</div>

)

}