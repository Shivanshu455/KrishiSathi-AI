import { motion } from "framer-motion";
import {
    Tractor,
    CloudSun,
    Brain,
    Sprout,
    TrendingUp,
    Wallet,
    ArrowRight,
} from "lucide-react";

const steps = [

{
title:"Enter Farm Details",
icon:Tractor,
},

{
title:"Weather Analysis",
icon:CloudSun,
},

{
title:"AI Processing",
icon:Brain,
},

{
title:"Crop Recommendation",
icon:Sprout,
},

{
title:"Market Insights",
icon:TrendingUp,
},

{
title:"Profit Simulation",
icon:Wallet,
},

];

function HowItWorks(){

return(

<section className="py-32 bg-slate-50">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">

Workflow

</span>

<h2 className="mt-6 text-5xl font-black">

How KrishiSathi Works

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-8">

A seamless AI-powered workflow helping farmers make
smarter agricultural decisions.

</p>

</div>

<div className="mt-24 flex flex-wrap items-center justify-center gap-8">

{steps.map((step,index)=>{

const Icon=step.icon;

return(

<div
key={index}
className="flex items-center"
>

<motion.div

whileHover={{
y:-10,
}}

className="group flex w-56 flex-col items-center rounded-[30px] bg-white p-8 shadow-xl"

>

<div className="rounded-2xl bg-green-100 p-5">

<Icon
size={36}
className="text-green-600"
/>

</div>

<h3 className="mt-6 text-center text-xl font-bold">

{step.title}

</h3>

</motion.div>

{index!==steps.length-1 && (

<ArrowRight

size={28}

className="mx-5 hidden text-green-500 lg:block"

/>

)}

</div>

)

})}

</div>

</div>

</section>

)

}

export default HowItWorks;