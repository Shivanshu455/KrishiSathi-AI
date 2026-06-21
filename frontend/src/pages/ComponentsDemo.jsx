import { useState } from "react";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";
import Loader from "../components/ui/Loader";

export default function ComponentsDemo() {
const [open,setOpen]=useState(false);
const [toast,setToast]=useState(false);

return (

<div className="components-demo">

<h1>KrishiSathi UI Library</h1>

<div className="section">

<h2>Button</h2>

<Button
variant="primary"
onClick={()=>setToast(true)}
>
Analyze Farm
</Button>

</div>


<div className="section">

<h2>Input</h2>

<Input
label="Crop Name"
placeholder="Enter crop"
/>

</div>


<div className="section">

<h2>Modal</h2>

<Button
onClick={()=>setOpen(true)}
>
Open AI Report
</Button>

<Modal
isOpen={open}
onClose={()=>setOpen(false)}
title="Farm Recommendation"
>

<p>Water crop tomorrow</p>

<Button
onClick={()=>setOpen(false)}
>
Close
</Button>

</Modal>

</div>


<div className="section">

<h2>Toast</h2>

<Button
onClick={()=>setToast(true)}
>
Show Success
</Button>

{toast && (

<Toast
message="AI Analysis Complete"
/>

)}

</div>


<div className="section">

<h2>Loader</h2>

<Loader />

</div>

</div>

);

}