import Hero from "../components/Hero"
import Card from "../components/Card"

function Home() {

return (

<>

<Hero/>

<div
className="
flex
justify-center
gap-10
pb-20
flex-wrap
"
>

<Card
title="Crop Advisory"
description="Get AI-powered recommendations for crop planning."
/>

<Card
title="Weather Insights"
description="Receive weather-aware farming suggestions."
/>

</div>

</>

)

}

export default Home