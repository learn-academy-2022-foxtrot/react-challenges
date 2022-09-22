import React from "react";

const MenuItem = (props) => {
  console.log(props);
  return (
    <>
      <h2 key={props.key}>{props.item.name}</h2> {/*Ex: Zombie Eyeballs*/}
      {props.item.price && (
        <h3 key={props.key}>Price ${props.item.price}</h3>
      )}{" "}
      {/*Ex: "Price"*/}
      {/* figure out how to convert order click "Order" into item name "You ordered zombie eyeballs" <--- only displayed when click on button */}
      <button onClick={() => props.orderItem(props.index)}>Order</button>
    </>
  );
};

export default MenuItem;
