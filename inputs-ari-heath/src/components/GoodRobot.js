import React from "react";

const GoodRobot = (props) => {
  return (
    <>
      <h3>Good Robot</h3>
      <div className="good_robot_txt">{props.userInput}</div>
    </>
  );
};

export default GoodRobot;
