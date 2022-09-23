import React from 'react'

const BadRobot = (props) => {
    const badRobot = (input) => {
        let counter = 1
        let newArray = []

        const replaceChar = (input) => {
            if (counter == 1) {
                newArray.push(1)
                counter + 1
            } else if (counter == 2) {
                newArray.push(2)
                counter + 1
            } else if (counter == 3) {
                newArray.push(3)
                counter + 1
            }
            console.log(newArray)
            return 
        }
        return newArray
    }

        return (
            <>
                <h2> Bad Robot</h2>
                <p>{badRobot(props.userInput)}</p>
            </>
        )
    }

    export default BadRobot