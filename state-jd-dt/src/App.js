import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';

function App() {
  const [colorStorage, setColorStorage] = useState([])
  const handleClick = () => {
    let box = <ColorBox/>
    setColorStorage(colorStorage => colorStorage.push(box)) 
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Add Color Box</button>
      {colorStorage[0]}
      <ColorBox/>
      <ColorBox/>
      <ColorBox/>
    </div>
  );
}

export default App;
