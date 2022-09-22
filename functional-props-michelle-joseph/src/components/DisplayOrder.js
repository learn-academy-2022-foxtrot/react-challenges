import React from "react";

const DisplayOrder = (props) => {
  console.log("CAN YOU SEE THIS****?", props.menu);
  let orderList = [];
  {
    props.menu.filter((item, index) => {
      if (item.ordered === true) {
        orderList.push(item);
      }
    });
  }
  return (
    <>
      <h3>You ordered: </h3>
      {orderList.map((item, index) => {
        return <>{item.ordered && <p>You ordered {item.name}</p>}</>;
      })}
    </>
  );
};

export default DisplayOrder;
