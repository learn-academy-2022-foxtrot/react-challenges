import React from 'react'

const MenuItem = (props) => {
    console.log(props)
    return (
        <>
        <h2 key={props.key}>{props.item.name}</h2>  {/*Ex: Zombie Eyeballs*/}
        {props.item.price && <h3 key={props.key}>Price ${props.item.price}</h3>}        {/*Ex: "Price"*/}

{/* figure out how to convert order click "Order" into item name "You ordered zombie eyeballs" <--- only displayed when click on button */}
        {props.item.ordered && <h3>Order</h3>}
        {props.item.ordered === true} {
            <p>You Ordered: {props.item.name}</p>
        }
        <button onClick={() => props.orderItem(props.index)}>Order</button>
        </>
    )
}

export default MenuItem