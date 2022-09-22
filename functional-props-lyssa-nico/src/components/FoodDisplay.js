import React from "react"

const FoodDisplay = (props) => {
    return (
        <>
            <p> Food name: {props.food.name}</p>
            {props.food.ordered && <p>Ordered It!</p>}
            <button className="button" onClick={() => props.orderedItem(props.index)}>Order Food</button>
        </>
    )
}

export default FoodDisplay