import './App.css'
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import React, {useState} from 'react'
import diceA from './components/diceA.png'

const App = () => {
  
  const [dices, setDices] = useState([1,2,3,4,5,6])

  //Creates rolls log 
  const [rollsLog, setRollsLog] = useState([])

  //function for photos 
  const image = () => {
    if (dices = 1) {
      <img src="./components/diceA.png" alt= "one dice"/>
    }
  } 
  


  //Creates random number 
  const [randomIndex, setRandomIndex] = useState(0)
  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * dices.length)
    setRandomIndex(randomNumber)
    setRollsLog([...rollsLog,dices[randomIndex]])
    image()
    
}
  

  
  return (
    <>

      <h1 className='title'>Dice Roll</h1>
      <div className="diceBox"> 
        <button onClick={handleClick}>Roll Dice</button>
        <Dice dice={dices} index={randomIndex}/>
      </div>
      <div className="rollsLog"> 
        <h2>Rolls Log </h2>
        {rollsLog.map((value, index) => {
        return <Rolls log={value} key={index} /> 
        }
        )}
        
        
        
        
      </div>
    </>


  );
}

export default App
