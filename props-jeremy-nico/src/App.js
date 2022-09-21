import React, { useState } from "react"
import "./App.css"
import Dice from "./components/Dice"
import Roll from "./components/Roll"

const App = () => {
  const [rollLog, setRollLog] = useState([])
  const [diceImage, setDiceImage] = useState("three")

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1

    if(randomNumber === 1) {
      setDiceImage("one")
    } else if(randomNumber === 2) {
      setDiceImage("two")
    } else if(randomNumber === 3) {
      setDiceImage("three")
    } else if(randomNumber === 4) {
      setDiceImage("four")
    } else if(randomNumber === 5) {
      setDiceImage("five")
    } else if(randomNumber === 6) {
      setDiceImage("six")
    }

    setRollLog((rollLog) => [...rollLog, randomNumber + "\n"]);
  }

const clear = () => {
  setRollLog([])
}

  return (
    <div className="container">
      <div className="app">
      <div className="blackBorder">
        <div className="diceContainer">
          <div className="dice" onClick={handleClick} >
            <Dice diceImage={diceImage} />
          </div>
          <h1>Click Dice To Roll</h1>
        </div>
        <div className="logContainer">
          <div className="log">
            <Roll rollLog={rollLog} />
          </div>
        </div>
      </div>
      </div>
      <button onClick={clear}>Clear</button>
    </div>

  )


}
export default App