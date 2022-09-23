import React from "react"


const BadRobot = (props) => {
    const badReact = (input) => {
        return <h3>I hear you say "{props.blahBlah}". Is that Correct?</h3>
    }
    return (
        <>
            <label>Bad Robot:</label>
            {badReact(props.blahBlah)}
            {/* <h3>"I hear you say `${props.value}` . Is that Correct?"</h3> */}
        </>
        )
}








export default BadRobot
