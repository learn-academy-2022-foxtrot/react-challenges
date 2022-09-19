import React, { useState } from "react";

const ColorBox = () => {
  const colorArr = [
    "white",
    "orange",
    "blue",
    "green",
    "red",
    "purple",
    "yellow",
  ];

  const [count, setCount] = useState(0);
  const [colorText, setColorText] = useState(colorArr[0]);

  const handleClick = () => {
    // onClick change text from white to a different color
    setColorText(colorArr[count]);
    if(count < colorArr.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0)
    }
    
  };

  return (
    <div>
      <p
        style={{ border: "solid 2px black", height: "300px", width: "300px", backgroundColor: `${colorText}`}}
        onClick={handleClick}
      >
      </p>
    </div>
  );
};
export default ColorBox;