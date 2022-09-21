
const Dice = (props) => {

    return(
        <div>
        <div style = {{
            height : "90 px",
            width : "90 px",
            borderStyle : "solid",
            margin:"auto"
        }}>{props.dice[props.index]}</div>
        <div> other box</div>
        </div>
    )
}

export default Dice