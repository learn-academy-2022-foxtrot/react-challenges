import React from "react";

const GoodRobot = (props) => {
    const goodReact = (input) => {      
        return <h3>I hear you say "{props.userName}". Is that Correct?</h3>
    }
    return (
        <>
            <label>Good Robot:</label>
            {goodReact(props.userName)}
            {/* <h3>"I hear you say `${props.value}` . Is that Correct?"</h3> */}
        </>
        )
}









export default GoodRobot