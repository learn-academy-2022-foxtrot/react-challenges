import React from "react"

const OrderedFood = (props) => {
    // let log = props.orderedItem
    console.log(props)
    return (
        <div>
            <p>{props.order.name} ${props.order.price}</p>
        </div>
    )
}

export default OrderedFood