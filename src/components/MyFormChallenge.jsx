import { useEffect, useRef, useState } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <input 
        type="text" 
        placeholder="Choose a color" 
        value={value} 
        ref={inputRef} 
        onChange={() => setValue(inputRef.current.value)}
      />
      <div className="container">
        {colors.map(color => <BoxColor key={color} color={color} value={value}/>)}
      </div>
    </>
  );
}

export default MyForm;