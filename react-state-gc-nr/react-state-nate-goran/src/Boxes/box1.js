import { useState } from "react"

const Box1 = () => {

    const [color, setColor] = useState("white")
    const [counter, setCounter] = useState(0)

    const changeBoxColor = () => {
        const arrayOfColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
        setCounter(counter + 1)
        if (counter == arrayOfColors.length) {
            setCounter(0)
        }
        return setColor(arrayOfColors[counter])
    }
    return (
        <>
            <div onClick={changeBoxColor} style={{ backgroundColor: color, color: "black", border: "1px solid black", width: "400px", height: "400px", margin: "auto" }}>white</div>
        </>)
}
export default Box1