
const Menu = (props) => {
    const {item, index, orderItem} = props
    return (
        <div className="menu">
            
            <button onClick={() => orderItem(index) } >Order</button>
            <h5>{item.name}</h5>
           
        </div>
    )
}

export default Menu