import React from 'react'

const Badrobot = (props) => {
    let badRobotArr = ["b", "l", "a"]
    const badUserInput = (input) => {
        return (input.badRobotArr)
    }


    return (
        <>
        <h2>I hear you saying {badUserInput(props.userInput)}. Is that correct?</h2>
        </>
    )

}



export default Badrobot