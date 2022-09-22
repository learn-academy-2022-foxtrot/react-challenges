

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
    <h1 style= {{textAlign: "center"}}>Guan and Nate's Dice Roller</h1>
   <button style = {{margin: "0 auto", display: "block"}} onClick = {rollDice}>Click to roll</button>
   <p></p>
   <Dice dice = {dice} index={ranIndex}/>
   {diceLogger.map((value, index) => {
            return <LogDice key={index} log={value} />
          })}
    </>
  )
}


export default App;
