import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

const CurrentOrder = (props) => {
  return (
    <>
      <div key={props.index}>{props.item}</div>
    </>
  );
};

export default CurrentOrder;
