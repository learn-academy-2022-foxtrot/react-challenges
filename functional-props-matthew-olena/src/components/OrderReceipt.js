import React from "react"
const OrderReceipt = (props) => {
    return (
      <>
        <ul>
          <li key={props.index}> {props.OrderReceipt}</li>
        </ul>
      </>
    );
  };
  
export default OrderReceipt
