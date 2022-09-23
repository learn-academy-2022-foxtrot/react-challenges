import React from 'react';
import { useState } from 'react';
import './App.css';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import FunRobot from './components/FunRobot';

const App = () =>{

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    //console.log(e.target.value)
    setUserInput(e.target.value)
  }

  return(

    <>
    <h1> Be a good Robot Please </h1>
    <input type='text' value={userInput} onChange={handleChange}/>
    <p>{userInput}</p>
      

      <GoodRobot userInput={userInput} />
      <br/>
      <BadRobot userInput={userInput} />
      <br></br>
      <FunRobot userInput={userInput} />

    </>
  )
}


export default App;
