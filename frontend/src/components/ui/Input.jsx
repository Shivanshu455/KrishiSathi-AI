/**
 * Input Component
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

function Input({
  label = "Input",
  placeholder = "Type here",
  type = "text",
  error = ""
}) {
  return (
    <div style={{ marginBottom: "20px" }}>

      <label>{label}</label>

      <br />

      <input
        type={type}
        placeholder={placeholder}
        style={{
          padding:"10px",
          width:"250px"
        }}
      />

      {error && (
        <p>{error}</p>
      )}

    </div>
  )
}

export default Input