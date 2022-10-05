import React from "react";

const FoodCart = (props) => {


    return (
        <>
        <li key = {props.key}> {props.item.foodItem} ${props.item.price}</li>
        </>
    )
}
export default FoodCart 