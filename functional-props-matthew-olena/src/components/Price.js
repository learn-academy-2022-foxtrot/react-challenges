import React from "react";

const Price = (props) => {
    // destructured to access the props without using props with dot notation
        // const [index, item, orderItem] = props
    
        console.log(props)
      return (
        <>
        <h2>{props.item.price}</h2>
        </>
      )
    }

export default Price