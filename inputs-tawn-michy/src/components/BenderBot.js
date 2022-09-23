import React from "react";


const BenderBot = (props) => {
    const benderReact = (input) => {
        let firstLetter = input.charAt(0).toUpperCase()
        let restOfWord = input.slice(1)
        return <h3>"I hope he didn't die. Unless he left a note naming me his successor, then I hope he did die. "{props.blahBlah}"</h3>
    }
    return (
        <>
            <label>Bender:</label>
            {benderReact(props.blahBlah)}
            {/* <h3>"I hear you say `${props.value}` . Is that Correct?"</h3> */}
        </>
        )
}








export default BenderBot