import './App.css';
import {useState} from 'react'



function App() {
const [nasaData, setNasaData] = useState(null)
const API_KEY = process.env.REACT_APP_API_KEY
const handleClick = () => {
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${process.env.REACT_APP_API_KEY}`)
  console.log(fetch)
  // .then((response) => response.json())
  // .then((payload) => console.log(payload))
  // .catch((error) => console.log(error))
}


  return (
    <div className="App">
     <button onClick={handleClick}>Click for NASA pictures</button>
    </div>
  );
}

export default App;
