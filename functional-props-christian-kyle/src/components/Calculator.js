const Calculator = (props) => {
    const {calculator} = props
    const salesTax = 1.07
    const grandTotal = calculator * salesTax
    return (
        <div className="calculator">
            <h1>Price Before Taxes</h1>
            {`\$${calculator.toFixed(2)}`}
            <h2>Order Total</h2>
            {`\$${grandTotal.toFixed(2)}`} 
        </div>
    )
}

export default Calculator