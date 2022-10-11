import React from 'react';
import './App.css';
import { useState } from 'react';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import NeutralRobot from './components/NeutralRobot';

const App =() => {
const [userName ,setUserName] = useState ("")
const handleChange = (e) => {
  console.log(e.target.value)
  setUserName(e.target.value)
}


return (
  <>
  <div>
    <h1>Robot listening</h1>
    <label>Enter Your input</label>
    <br />
    <input type="text" value={userName} onChange={handleChange}/>
    <h2> good Robot</h2>
    
    <GoodRobot userName={userName}/>
    </div>

    <div>
    <h2> bad Robot</h2>
    <BadRobot userName={userName}/>
    </div>

    <div>
    <h2> neutral Robot</h2>
    <NeutralRobot userName={userName}/>
    </div>
  </>
)
}
export default App;
