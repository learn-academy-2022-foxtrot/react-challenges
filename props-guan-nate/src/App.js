

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

    
    // setDiceLogger ([...dice,diceLogger.push(ranIndex)])
   
    //setDiceLogger(diceLogger.push)
    diceLogger.push(randomNum +1);
         console.log(diceLogger,'log')
  }
  const logDice = () => {
    console.log(diceLogger)
    setDiceLogger ([...dice,diceLogger.push(ranIndex)])

  }
  return(
    <>
    <h1>Welcome to the Game</h1>
   <button onClick = {rollDice}>Click  To get Dice roll</button>
   <Dice dice = {dice} index={ranIndex}/>
   {diceLogger.map((value,key)=> {
    return <LogDice key = {diceLogger} value = {ranIndex}/>
   })}
   {/* <LogDice logDice = {logDice} /> */}
    </>
  )
}


export default App;
