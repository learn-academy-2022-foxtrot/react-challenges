import './App.css'
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import React, {useState} from 'react'

const App = () => {
  
  const [dices, setDices] = useState([1,2,3,4,5,6])

  //Creates rolls log 
  const [rollsLog, setRollsLog] = useState([])

  
  
  //Creates random number 
  const [randomIndex, setRandomIndex] = useState(0)
  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * dices.length)
    setRandomIndex(randomNumber)
    setRollsLog(rollsLog.push(randomNumber))
    console.log(typeof {rollsLog}, typeof {dices})
    
}
  
  
  return (
    <>

      <h1 className='title'>Dice Roll</h1>
      <div className="diceBox"> 
        <button onClick={handleClick}>Roll Dice</button>
        <Dice dice={dices} index={randomIndex}/>
      </div>
      <div className="rollsLog">
        
        <Rolls log={rollsLog} />
        <p>{rollsLog}</p>
        
        
      </div>
    </>


  );
}

export default App
