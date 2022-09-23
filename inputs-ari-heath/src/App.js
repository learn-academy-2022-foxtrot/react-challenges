import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import GoodRobot from "./components/GoodRobot";
import BadRobot from "./components/BadRobot";

/**
- As a user, I can see a landing page with heading and a text input.
- As a user, I see titles of three robots waiting for my text.
- As a user, I see my "Good Robot" repeating exactly what I type in real time.
- As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
- As a user, I see a third robot that modifies the input as per the developer's choice in real time.
 
GOOD ROBOT
- Set state for [userInput, setUserInput] = useState("")
- Create function: handleChange
  - parameter: 1, event (e)
  - input: user string
  - output: user string
  - Function will take in event data, and
    return setUserInput(e.target.value)
- Create an input field, type="text" value={userInput} onChange={handleChange}
 */

const App = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    return setUserInput(e.target.value);
  };

  return (
    <>
      <h1>Robot Translators</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <GoodRobot userInput={userInput} />
      <BadRobot userInput={userInput} />
    </>
  );
};

export default App;
