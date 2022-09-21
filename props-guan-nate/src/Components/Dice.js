
const Dice = (props) => {

    return(
        <div>
        <div style = {{
            backgroundColor: "white",
            height : "500 px",
            width : "500 px",
            borderStyle : "solid",
            margin:"auto"
        }}>{props.dice[props.index]}</div>
        </div>
    )
}

export default Dice