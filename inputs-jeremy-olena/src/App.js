import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
import './App.css';
import React, { useState } from 'react'
 
const App = () => {
  //declare user input state
  const [userInput, setUserInput] = useState("")

    //declare our input function
    const handleChange = (e) => {
      setUserInput(e.target.value)
    }

  return (
    <div className="App">
      <h1>Robo Talk</h1> 
      {/* input box */}
      <input type="text" value={userInput} onChange={handleChange}/>
      <br/>

      {/* call robot components */}
      <GoodRobot userInput={userInput}/>
      <BadRobot userInput={userInput}/>
      <KanyeBot userInput={userInput}/>
    </div>
  );
}

export default App;
