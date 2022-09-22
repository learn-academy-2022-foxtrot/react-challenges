const Order = (props) => {
    const { orderList, orderPrice } = props
    return (
        <div className="orderContainer">
            <h1>Order List</h1>
            <div className="listPriceContainer">
            <div className="listContainer">
                {orderList}
            </div>
            <div className="priceContainer">    
                {orderPrice}
            </div>>
            </div>
        </div>
    )
}

export default Order