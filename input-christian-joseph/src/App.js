//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import LoveRobot from './components/LoveRobot';

const App = () => {

  const [userInput, setUserInput] = useState("")
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Robo Active Listening!</h1>
      <p>Say Something</p>
      <input type="text" value={userInput} onChange={handleChange} />
      <GoodRobot userInput={userInput}/>
      <BadRobot userInput={userInput}/>
      <LoveRobot userInput={userInput}/>
    </>
  )
}


export default App;
