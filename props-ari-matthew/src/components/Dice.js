const Dice = (props) => {
  return (
    <>
      <div className="diceBox">
        <div>{props.dice[props.index]}</div>
        </div>
    </>
  );
};

export default Dice;
