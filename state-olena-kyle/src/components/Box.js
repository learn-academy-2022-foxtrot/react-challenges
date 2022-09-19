
import React, {useState} from 'react'
const Box = () => {
    const [color, setColor] = useState("white")
    const changeColor = () => {
        setColor("red")
        
    }
    return (
        <>

            <div className = "box" onClick = {changeColor}> {color}</div> 
        </>
    )
}
export default Box