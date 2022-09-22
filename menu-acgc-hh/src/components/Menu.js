import React from "react";

const Menu = (props) => {






    return (
        <>
        <h2 key = {props.key}>{props.item.foodItem} ${props.item.price}</h2>
        {props.item.ordered && <h3>ordered</h3>}
        <button onClick = {()=> props.orderItem(props.index)}> click to order</button>


        </> 
    )
}
export default Menu