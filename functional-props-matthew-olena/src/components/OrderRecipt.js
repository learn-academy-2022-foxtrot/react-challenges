import React from "react"
const OrderRecipt = (props) => {
    return (
      <>
        <ul className="counter">
          <li key={props.index}>{props.count}</li>
        </ul>
      </>
    );
  };
  
export default OrderRecipt
