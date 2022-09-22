import Images from "./Images"

const Menu = (props) => {
    const {item, index, key, orderItem} = props
    return (
            <div className="menuItems">
            <img src={Images[item.image]} width="50px" height="50px" />
            <button onClick={() => orderItem(index) } >Order</button>
            <h5>{item.name}</h5>
           </div>
    )
}

export default Menu