

import './App.css';
import Dice from './Components/Dice';
import { useState } from 'react';



const App = () =>{

  const[dice, setDice] = useState(['One','Two','Three','Four','Five','Six'])

  const[ranIndex, setRanIndex ]= useState(0)
  const rollDice = () =>{

    let randonNum = Math.floor(Math.random() * dice.length)
    setRanIndex(randonNum)
  }
  return(
    <>
    <h1>Welcome to the Game</h1>
   <button onClick = {rollDice}>Click  To get Dice roll</button>
   <Dice dice = {dice} index={ranIndex}/>
    </>
  )
}


export default App;
