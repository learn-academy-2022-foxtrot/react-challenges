import Box from './components/Box'
import './App.css'
import DiceNumber from './components/DiceNumber'
import React, {useState} from 'react'
import RollCounter from './components/RollCounter'

const App = () => {
  const [diceNum, setDiceNum] = useState([1, 2, 3, 4, 5, 6])
  const [randomIndex, setRandomIndex] = useState(0)
  const [rollCount, setRollCount] = useState([]);

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * diceNum.length)
    setRandomIndex(randomNumber)
  }
  return (
    <>
    <h1>Dice Roll</h1>
    <button onClick={handleClick}>Roll Dice</button>
    <Box box={diceNum} index={randomIndex} count={rollCount}/>
    <RollCounter count={rollCount} />
    </> 
  )
  }

// const App = () => {
//   const [diceNum, setDiceNum] = useState([1, 2, 3, 4, 5, 6])
//   const [randomIndex, setRandomIndex] = useState(0)
// return (<h1>Help us</h1>)


// }

export default App 
