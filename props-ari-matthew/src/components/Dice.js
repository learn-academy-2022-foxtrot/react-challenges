const Dice = (props) => {
  return (
    <>
      <div className="diceBox">{props.dice[props.index]}</div>
    </>
  );
};

export default Dice;
