import React,{useState} from 'react'

function ColorPicker() {
   let [color, setColor] = useState('#ff0000')
   function ColorPicker(e){
    setColor(e.target.value)
   }
  return (
    <>
    <div style={{width: '100vw', height: '100vh', backgroundColor: color}}>
      <h1>Pic your favourite Colour</h1>
      <input type="color" value={color} onChange={ColorPicker} />
    </div>
    
    </>
  )
}

export default ColorPicker