import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

const App = () => {
  const [data, setData] = useState({ })
  const getData = () => {
  fetch(`https://ipapi.co/json`)
  .then((response) => response.json())
  .then((payload) => setData(payload))
  .catch((error) => console.log(error))
  console.log(data)
}
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getData}>Click here</button>
        <h1>My IP Address</h1>
        <div>
       {data.city}
        <br>
        </br>
        {data.ip}
        </div>
      </header>
    </div>
  );
}

export default App;
