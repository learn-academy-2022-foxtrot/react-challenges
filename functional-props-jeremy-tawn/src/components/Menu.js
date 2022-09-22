const Menu = (props) => {
    const {item, index, key, orderItem} = props
    return (
        <div className="menuItem">
            
            <button onClick={() => orderItem(index) } >Order</button>
            <h5>{item.name}</h5>
           
        </div>
    )
}

export default Menu