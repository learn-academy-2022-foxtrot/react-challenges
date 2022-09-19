import { useCallback, useState } from "react"
import Colorbox from "./Colorbox"

const BoxButton = () =>{
    const [box,SetBox] = useState(0)
    const boxMaker = () =>{

        return (<Colorbox/>)

    }
    return(
        <>
        <button onClick={boxMaker}>
            Add Box
        </button>
        </>
    )
}

export default BoxButton