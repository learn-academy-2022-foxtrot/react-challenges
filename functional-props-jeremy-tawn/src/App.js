
import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import TotalPrice from './components/TotalPrice';


// States
const App = () => {
  const [menu, setMenu] = useState([
    { name: "Pizza", price: 15.00, image: "Pizza" },
    { name: "Hamburger", price: 10.00, image: "Hamburger" },
    { name: "Hot Dog", price: 7.00, image: "HotDog" },
    { name: "French Fries", price: 5.00, image: "FrenchFries" },
    { name: "Soda", price: 3.00, image: "Soda" },
    { name: "Water", price: 3.00, image: "Water" },
    { name: "Fish Sticks", price: 15.00, image: "FishSticks" },
  ])
  const [orderList, setOrderList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [orderPrice, setOrderPrice] = useState([])
  // Functions
  const orderItem = (selectedItem) => {
    //alert("input alert")
    // menu[selectedItem].price
    let order = `${menu[selectedItem].name}`

    let selectedItemPrice = `\$${menu[selectedItem].price.toFixed(2)}`

    setOrderList((orderList) => [...orderList, order + "\n \t"])
    setOrderPrice((orderPrice) => [...orderPrice, selectedItemPrice + "\n \t"])
    let price = totalPrice + menu[selectedItem].price
    setTotalPrice(totalPrice + menu[selectedItem].price)
    // alert(order)
  }

  // Returns
  return (
    <div className="App">
      <div className="appContainer">
        <div className="wrapper">
          <div className="menuContainer">
            {menu.map((item, index) => {
              return (
                < Menu orderItem={orderItem} item={item} index={index} key={index} />
              )
            })}
          </div>
          <Order orderList={orderList} orderPrice={orderPrice}/>
        </div>
        <TotalPrice totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default App;
