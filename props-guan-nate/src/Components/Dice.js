
const Dice = (props) => {

    return(
        <div>
        <div style = {{ 
        backgroundColor: "white",
        color: "black",
        border: "5px solid black",
        width: "250px",
        height: "250px",
        margin: "auto" }}>{props.dice[props.index]}</div>
        </div>
    )
}

export default Dice