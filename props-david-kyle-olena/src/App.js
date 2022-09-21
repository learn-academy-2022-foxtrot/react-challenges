

import './App.css'
import Dice from './ components/Dice'
import React,{useState} from 'react'


const App = () => {
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6])
  const [randomIndex, setRandomIndex] = useState(0)

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * dice.length);
    setRandomIndex(randomNumber)
  }

  return (
    <>
      <h1> Dice Roll </h1>
  <button onClick={handleClick}> BUTTON </button>
  <Dice dice={dice} index = {randomIndex}/> 
  </>
    );

  }

export default App