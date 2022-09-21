

import './App.css'
import Dice from './ components/Dice'
import Rolls from './ components/Rolls'
import React,{useState} from 'react'


const App = () => {
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6])
  const [randomIndex, setRandomIndex] = useState(0)
  const [rolls, setRolls] = useState([])

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * dice.length);
    setRandomIndex(randomNumber)
    rolls.push(randomNumber +1)
    setRolls(rolls) 
  }
  
 
 
  return (
    <>
      <h1> Dice Roll </h1>
  
  <Dice dice={dice} clickEvent={handleClick} index = {randomIndex}/> 
  <Rolls rolls={rolls}/>

  </>
    );

  }

export default App