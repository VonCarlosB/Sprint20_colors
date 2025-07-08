// My Solution:

// function BoxColor ({color, value}) {
//   const check = color === value
//   const fontColor = check ? 'black' : color
//   const background = check ? color : 'transparent'
//   return (
//     <>
//       <div className="box" style={{color:fontColor, backgroundColor:background}}>
//         {check ? `Yes, I am ${value} color` : `I'm not a ${value} color`}
//       </div>
//     </> 
//   )
// }
// export default BoxColor;  

import { useEffect, useRef } from "react";

export default function BoxColor({color, value}) {
  const boxRef = useRef(null)
  const classList = useRef(null)
  
  useEffect(() => {
    classList.current = boxRef.current.classList
  },[])

  const matches = classList.current?.contains(value)

  const style = {
    backgroundColor: matches ? color : 'transparent',
    border: `1px solid ${color}`,
    color: matches ? 'black' : color
  }

  return(
    <>
      <div ref={boxRef} className={`box ${color}`} style={style}>
        {matches ? `Yes, I am ${value} color` : `I'm not a ${value} color`}
      </div>
    </>
  )
}