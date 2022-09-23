import React from "react";

const GoodRobot = (props) => {



    return(

        <>
        <p>I am a good robot. 
            <br></br>

            I hear you saying {props.userInput}. Is that correct?
            </p>
        </>
    )
}
export default GoodRobot