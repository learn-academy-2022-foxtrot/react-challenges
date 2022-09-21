import './App.css'
import Dice from './components/Dice'

import React, {useState} from 'react'

const App = () => {
  
  const [dices, setDices] = useState(["One", "Two", "Three", "Four", "Five", "Six"])

  const [randomIndex, setRandomIndex] = useState(0)

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * dices.length)
    setRandomIndex(randomNumber)
}
  
  
  return (
    <>
      <h1 className='title'>Dice Roll</h1>
      <button onClick={handleClick}>Roll Dice</button>
      <Dice dice={dices} index={randomIndex}/>
    
    </>


  );
}

export default App
