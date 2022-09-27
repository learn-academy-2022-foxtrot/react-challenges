import {useState} from 'react'
import './App.css';
import BadRobot from './components/BadRobot';


const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  return(
    <>
      <h1>Robot Active Listening</h1>
      <input type="text" value={userInput} onChange={handleChange}/>
      <h2> Good Robot</h2>
      <p>{userInput}</p>
      <BadRobot userInput={userInput} /> 
      <h2> Kanyebot 3000</h2>
      <p>{userInput}</p>
    </>
     ) 
    

}

export default App;
