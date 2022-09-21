import React, { useState } from "react";

// Use an array to store colors, onClick cycle through the index of the Array

const Colorbox = () => {

  const allColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
  ];

  const [colorInx, setColor] = useState(0);
  const changeColor = () => {

    if(colorInx < 6){

       setColor(colorInx + 1 )
    
    } else {
      let newColorInx = 0
      setColor(newColorInx)
    }
      
  };

  return (
    <>
      <div className="boxChanger"
        onClick={changeColor}
        style={{
          height: "90px",
          width: "90px",
          background: allColors[colorInx],
          borderStyle: "solid",
          borderWidth: "3px",
          borderColor: "black",
        }}
      ></div>
    </>
  );
};

export default Colorbox;
