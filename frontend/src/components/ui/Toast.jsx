/**
 * Toast Component
 *
 * Props:
 * message
 */

function Toast({
message=
"Success"
}) {

return (

<div
style={{
background:
"#DCFCE7",

padding:
"12px",

borderRadius:
"10px",

width:
"250px",

marginTop:
"20px"
}}
>

{message}

</div>

)

}

export default Toast