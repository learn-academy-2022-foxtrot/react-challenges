
import React, {useState} from 'react'
const Box = () => {
    const [color, setColor] = useState("white")
    const changeColor = () => {
        setColor ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
        const colorChanger = (changeColor) => {
            for (let i = 0; i ,)
        }
        
    }
    return (
        <>

            <div className = "box" onClick = {changeColor}> {color}</div> 
        </>
    )
}
export default Box