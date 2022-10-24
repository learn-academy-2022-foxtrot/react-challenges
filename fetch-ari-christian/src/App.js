import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [ip, setIp] = useState({});
  // const [header, setHeader] = useState("Ari and Christian's Landing Page!");

  const getIp = () => {
    // Grabbing the API from the URL
    fetch("https://ipapi.co/json")
      // Parsing that response into JSON.
      .then((response) => response.json())
      .then((payload) => setIp(payload))
      .catch((errors) => console.log(errors));
    console.log(ip.ip);
    // setHeader(`Your IP Address is: ${ip.ip}`);
  };

  return (
    <>
      <h1>Your IP Address is: {ip.ip}</h1>
      <h1>Your city is {ip.city}</h1>
      {/* <h1>Your Address is: {ip.} </h1> */}

      <button onClick={getIp}>Click to see your IP and Location!</button>
      {/* <div>{ip.ip}</div> */}
    </>
  );
};

export default App;
