const TotalPrice = (props) => {
    const {totalPrice} = props
    const salesTax = 1.07
    const grandTotal = totalPrice * salesTax
    return (
        <div className="totalPrice">
            <h1>Total Price</h1>
            {`\$${totalPrice.toFixed(2)}`}
            <h2>Grand Total with Tax</h2>
            {`\$${grandTotal.toFixed(2)}`} 
        </div>
    )
}

export default TotalPrice