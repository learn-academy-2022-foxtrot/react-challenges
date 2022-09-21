import diceImage from "./DiceImages"

const Dice = (props) => {
    let dice = props.diceImage

    return (
        <div>
            <img className="diceNumber" src={diceImage[dice]} width="150px" height="150px" alt="Dice"/>
        </div>
    )
}
export default Dice