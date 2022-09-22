const Order = (props) => {
    const {orderList} = props
    return (
        <div className="orderList">
            <ol>Order Items</ol>
            <ol className="selectedFood">
                {orderList}
            </ol>
        </div>
    )
}

export default Order