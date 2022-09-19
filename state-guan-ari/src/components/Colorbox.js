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
  const [color, setColor] = useState(allColors[0]);
  const changeColor = () => {
    setColor(allColors[0]);
  };

  return (
    <>
      <div
        onClick={changeColor}
        style={{
          height: "90px",
          width: "90px",
          background: color,
          borderStyle: "solid",
          borderWidth: "3px",
          borderColor: "black",
        }}
      ></div>
    </>
  );
};

export default Colorbox;
