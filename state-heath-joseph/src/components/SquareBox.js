import React, { useState } from "react"

const SquareBox = () => {
    const [color, setColor] = useState("white") //const [count, setCount] = useState(0)

    const handleClick = () => {
        setColor(color = "pink")
    }

    return (
        <>
        <div className = "box" onClick={handleClick}>{color}</div>
        </>
  )
}

export default SquareBox 