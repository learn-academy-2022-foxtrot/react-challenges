const Order = (props) => {
    const {orderList} = props
    return (
        <div className="orderList">
            <h1>Order List</h1>
            <div className="selectedFood">
                {orderList}
            </div>
        </div>
    )
}

export default Order