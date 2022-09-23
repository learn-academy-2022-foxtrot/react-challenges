import React, {useState} from 'react';
import './App.css';
import BadRobot from './components/BadRobot';
import GoodRobot from './components/GoodRobot';
import Yelling from './components/Yelling';
import BenderBot from './components/BenderBot';

const App = () => {
  const [userName, setUserName] = useState("")
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserName(e.target.value)
  }

  const [blahBlah, setBlahBlah] = useState("")
  const blahChange = (e) => {
    console.log(e.target.value)
    setBlahBlah(e.target.value)
  }


return (
  <>
    <h1>Robo Active Listening</h1>
    <label>Can You See This?</label>
    <br/>
    <input type="text" value={userName} onChange={handleChange}/>
    <Yelling userName={userName} /> 
    <GoodRobot userName={userName}/>
    <BadRobot userName={blahBlah} />
    {/* <BenderBot userName={userName} /> */}
  </>
) 
}

export default App;
