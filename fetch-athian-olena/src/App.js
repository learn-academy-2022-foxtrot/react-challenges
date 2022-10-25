// this is import section to import needed tools
import React, { useState } from 'react'

// declaration of function
const IpAddress = () => {
  //  Let's make a component that displays my current IP address
  
  const [ip, setIp] = useState({})
  
    const getIp = () => {
    //  console.log("Hey this get IP thing works") 
      // fetch("https://ipapi.co/json").then(response => console.log(response))
      fetch("https://ipapi.co/json")
      .then(response => response.json())
      .then(payload => setIp(payload))
      .catch(errors => console.log(errors))
    }

    // storing logic, variables, array etc and custom functions

    // stuff in return will show in ui, will need jsx to display the logic which uses html elements to do that
  return (
    <>
      <h1>IP grabber</h1>
      <button onClick={getIp}>
        Press the Button!
      </button>
    </>
  )
}

// export area will export the component so other components can access it
export default IpAddress

