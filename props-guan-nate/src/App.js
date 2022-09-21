

import './App.css';
import Dice from './Components/Dice';
import { useState } from 'react';
import LogDice from './Components/LogDice'



const App = () =>{

  const[dice, setDice] = useState([1, 2, 3, 4, 5, 6])

  const[ranIndex, setRanIndex ]= useState(0)
  const[diceLogger, setDiceLogger] = useState([])
  const rollDice = () =>{

    let randomNum = Math.floor(Math.random() * dice.length)

    setRanIndex(randomNum)
    console.log(diceLogger)
    // setDiceLogger(diceLogger.push(dice[randomNum]))
    diceLogger.push(randomNum +1);
  }
  const logDice = () => {
    setDice ([...dice])
    console.log(dice)
  }
  return(
    <>
    <h1>Welcome to the Game</h1>
   <button onClick = {rollDice}>Click  To get Dice roll</button>
   <Dice dice = {dice} index={ranIndex}/>
   {dice.map((dice, ranIndex)=> {
    return <LogDice diceLogger = {diceLogger} key={ranIndex}/>
   })}
   <LogDice logDice = {logDice} />
    </>
  )
}


export default App;
