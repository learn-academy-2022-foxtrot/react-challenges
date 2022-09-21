import "./App.css";
import React, { useState } from "react";
import Rolls from "./components/Rolls";

const App = () => {
  const [diceNum, setDiceNum] = useState();
  const [results, setResults] = useState([]);
  const randomN = () => {
    return Math.ceil(Math.random() * 6);
  };

  const handleClick = () => {
    setDiceNum(randomN());
    if (diceNum !== undefined) {
      setResults([...results, diceNum]);
    }
  };

  const handleReset = () => {
    setDiceNum();
    setResults([]);
  };

  return (
    <div className="app">
      App
      <div className="dice">
        Dice
        <div className="roll-dice" onClick={handleClick}>
          {diceNum}
        </div>
        <h2>Click Box to Roll</h2>
        <button onClick={handleReset}>Reset</button>
      </div>
      <Rolls results={results} />
    </div>
  );
};

export default App;
