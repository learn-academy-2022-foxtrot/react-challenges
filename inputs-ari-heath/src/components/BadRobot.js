import React, { useState } from "react";

/**
BAD ROBOT:

- Access to userInput, which will be a string.
- String does not have a predetermined length, cant just change index
- Try .replaceAll() and .toUpperCase
 */

const BadRobot = (props) => {
  const badTranslator = (input) => {
    let badRobotSays = ["B", "L", "A", "H"];
    let tempVar = input.toUpperCase().split("");

    console.log("tempvar:", tempVar);
    return tempVar.map((character) => {
      return (character = badRobotSays.map((element, i) => {
        console.log("CharIndex:", element);
        console.log("tempvarAfterMap:", tempVar);
        return element[i];
      }));
    });
  };

  return (
    <>
      <h3>Bad Robot</h3>
      <div>{badTranslator(props.userInput)}</div>
    </>
  );
};

export default BadRobot;
