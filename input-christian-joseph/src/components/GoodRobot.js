import React from "react";

const GoodRobot = (props) => {

    const GoodTranslate = (input) => {
        return(
            <>
                <h3>Good Robot!</h3>
                <p>I hear you saying "{props.userInput}". Is that correct?</p>
            </>
        )
    }

    return(
        <>
            
            <h3>{GoodTranslate(props.userInput)}</h3>
            <br/>
            <h3>{BadTranslate(props.userInput)}</h3>
            <br/>
            <h3>{LoveRobot(props.userInput)}</h3>
        </>
    )
}
export default GoodRobot