import React, { useState } from 'react'

const IpLocation = () => {

    const [ipData, setIpData] = useState({})

    const getIp = () => {
        fetch('https://ipapi.co/json')
            .then((response) => response.json())
            .then((payload) => setIpData(payload))
            .catch((error) => console.log(error))
    }


    return (
        <div>

            <h1>
                Welcome to IP Location
            </h1>
            <button onClick={getIp}>
                Get Ip Address! 
            </button>
            <br/>
            Here is your Location:
            <br/>
            <h4>IP Address: {ipData.ip}</h4>
            <h4>City: {ipData.city}</h4>
        </div>
    )
}

export default IpLocation