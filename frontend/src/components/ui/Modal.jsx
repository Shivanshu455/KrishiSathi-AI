/**
 * Modal Component
 *
 * Props:
 * isOpen
 * title
 * children
 * onClose
 */

function Modal({
  isOpen = true,
  title = "Modal",
  children,
  onClose,
}) {

if (!isOpen)
return null

return (

<div
style={{
position:"fixed",
top:0,
left:0,
right:0,
bottom:0,
background:
"rgba(0,0,0,0.5)",

display:"flex",

justifyContent:
"center",

alignItems:
"center"
}}
>

<div
style={{
background:"white",
padding:"30px",
borderRadius:"10px",
width:"400px"
}}
>

<h2>

{title}

</h2>

<p>

{children}

</p>

<button
onClick={onClose}
>

Close

</button>

</div>

</div>

)

}

export default Modal