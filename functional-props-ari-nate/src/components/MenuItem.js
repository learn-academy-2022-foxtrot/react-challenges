import React from "react";

const MenuItem = (props) => {
  // const [index, item, key] = props;

  return (
    <>
      <div key={props.key}>{props.item.name}</div>
      {props.item.ordered && <h3>Ordered!</h3>}
      <button onClick={() => props.onClick(props.index)}>Order</button>
    </>
  );
};
export default MenuItem;
