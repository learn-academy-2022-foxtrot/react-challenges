import './App.css';
import React, {useState} from 'react';


function App() {

  const [ip, setIp] = useState({})
  const getIp = () => {
    fetch ("https://ipapi.co/json")
    .then ((response) => response.json())
    .then ((payload) => setIp(payload))
    .catch ((errors) => console.log(errors))
  }

  console.log(ip)

return (
<div>
  <h1>IP address</h1>
  <button onClick={ getIp }>Click to Get IP</button>
  <p>This is my ip { ip.ip } </p>
</div>
)}

export default App;
