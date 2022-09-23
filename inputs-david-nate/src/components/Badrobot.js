import React from 'react'

const Badrobot = (props) => {

    const badUserInput = (input) => {
        return (input.replace ("blabla"))
        
    }

    return (
        <>
        <h2>I hear you saying {badUserInput(props.userInput)}. Is that correct?</h2>
        </>
    )

}



export default Badrobot