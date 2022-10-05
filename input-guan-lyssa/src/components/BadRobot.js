import React from "react";

const BadRobot = (props) => {

    const sentChanger = (input) => {
        let badRobotSent = ['B','L','A','H']
        let count = 0
        let newArr = []

        //console.log(input)
        for(let i = 0 ; i < input.length ; i++){
            newArr.push(badRobotSent[i])
            // count +=
            // console.log(count)
            if(input.length > badRobotSent.length){
                newArr.push(badRobotSent[i%badRobotSent.length])
            } 
            //else if (input.length > badRobotSent.length){
                
            //     for(let k = 0 ; k < badRobotSent.length;k++ ){


            //     }


            //     // let longBadSent = [...badRobotSent,b]
            //     // newArr[i] = longBadSent[i]

            //     // console.log(longBadSent)
            //     // //newArr[i] = badRobotSent(badRobotSent.length * i).fill(0).map((_,i => i))
            //     // newArr[i] = longBadSent[i]

            // }
        }

        return newArr


    }



    return(

        <>
        <p>I am a bad robot. 
            <br></br>

            I hear you saying {sentChanger(props.userInput)}. Is that correct?
            </p>

        </>
    )
}
export default BadRobot