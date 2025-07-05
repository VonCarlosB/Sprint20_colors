function BoxColor ({color, value}) {
  const check = color === value
  const fontColor = check ? 'black' : color
  const background = check ? color : 'transparent'
  return (
    <>
      <div className="box" style={{color:fontColor, backgroundColor:background}}>
        {check ? `Yes, I am ${value} color` : `I'm not a ${value} color`}
      </div>
    </> 
  )
}
export default BoxColor;  
