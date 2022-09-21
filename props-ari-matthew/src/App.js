import logo from "./logo.svg";
import "./App.css";
import Dice from "./components/Dice";
import RollCounter from "./components/RollCounter";
import React, { useState } from "react";

const App = () => {
  const [dice, setDice] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [randomInx, setRandomInx] = useState(0);
  const [rollCount, setRollCount] = useState([]);

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * dice.length);

    setRandomInx(randomNumber);
    console.log(typeof rollCount, rollCount);
    rollCount.push(randomNumber + 1);
    // setRollCount((rollCount[0] = <RollCounter />));
  };

  // const updateRolls = () => {
  //   setRollCount(randomInx);
  // };

  return (
    <>
      <a href="#" onClick={handleClick}>
        {" "}
        <Dice dice={dice} index={randomInx} count={rollCount} />
      </a>
      {rollCount.map((value, index) => {
        return <RollCounter key={index} count={value} />;
      })}
    </>
  );
};

export default App;
