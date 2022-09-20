import React, {useState} from "react"




const Boxes = () => {
const [color,setColor] = useState(color)
const randomColor =["orange","red","green","blue"]
const leftClick = () => {
    setColor(randomColor)
}
    return (
      <>
        <div onClick = {leftClick} style = {{background-color: setColor;
   border: 5px solid black;
  height: 200px; 
  width: 200px;}} > </div>
      
      </>
    )
  }
  
  export default Boxes