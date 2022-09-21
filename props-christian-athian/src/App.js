
import './App.css'
import Logger from './components/Logger'
import Dice from './components/Dice'
import React, {useState} from 'react'

const App = () => {
 const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]) 
 const [randomIndex,setRandomIndex] = useState(0)
 const [logger, setLogger] = useState([])

 const handleClick = () => {
  let randomNumber = Math.floor(Math.random() * dice.length)
  setRandomIndex(randomNumber)
}

 return (
      <>
      <h1>Roll the Rock</h1>
      <div>
      <button onClick={handleClick}>Roll It</button>
      <Dice dice = {dice} index = {randomIndex}/>
      </div>
      <div>
      <Logger dice = {dice} logger {setLogger}/>
      </div>
      </>

 )  
  
}



export default App