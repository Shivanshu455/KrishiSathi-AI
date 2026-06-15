function Card({ title, description }) {

return (

<div
className="
bg-white
p-8
rounded-xl
shadow-md
w-80
"
>

<h2 className="text-2xl font-bold text-green-700">

{title}

</h2>

<p className="mt-3 text-gray-600">

{description}

</p>

<button
className="
mt-5
bg-green-700
text-white
px-5
py-2
rounded-lg
"
>

Explore

</button>

</div>

)

}

export default Card