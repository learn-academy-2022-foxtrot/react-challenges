const BadRobot = (props) => {
    //declare the user input variable from props
    const userInput = props.userInput
    //holds value we want to display
    let blah = ""
    //create varuiable to hold count to cycle though BLAB
    let count = 0
    let roboBlah = "BLAB "
    //loop though length of input string
    for (let i = 0; i < userInput.length; i++) {
        //reset count if greate then 4
        if (count > 4) {
            count = 0
        }
        //assign "B" "L" "A" "B" to blah per iteration based on count
        blah += roboBlah[count]
        //increment count by 1
        count++
    }

    return (
        <div className="BadRobot">
            <h1> Bad Robot</h1>
            {/* // display converted output */}
            {blah}
        </div>
    );
}

export default BadRobot 