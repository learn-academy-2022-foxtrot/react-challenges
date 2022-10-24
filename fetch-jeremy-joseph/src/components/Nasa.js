import React, { useState } from 'react'

const Nasa = () => {

    const [nasaData, setNasaData] = useState({})

    const API_KEY = process.env.REACT_APP_API_KEY

    const getNasaData = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((payload) => setNasaData(payload))
            .catch((error) => console.log(error))
    }



    return (
        <div>

            <h1>
                Welcome to Nasa info
            </h1>
            <button onClick={getNasaData}>
                Get Earth images! 
            </button>
            <br/>
            Beautiful images:
            <br/>
            <img src={nasaData.city}/>
            <h4>Image source: {nasaData.url}</h4>
        </div>
    )
}

export default Nasa