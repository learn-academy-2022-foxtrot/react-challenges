import React, { useState } from 'react'
import Badrobot from './components/Badrobot'

const App = () => {
  const [userInput, setUserInput] = useState("")
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
    <h1>Robot Listener</h1>
    <input type="text" value={userInput} onChange={handleChange}/>
    <br/>
    <h2>Good Robot</h2>
    <p>I hear you saying {userInput}. Is that correct?</p>
    <h2>Bad Robot</h2>
    <Badrobot userInput={userInput}/>
  </>
  )
}

export default App