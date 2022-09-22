
import './App.css';
import React, {useState} from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import TotalPrice from './components/TotalPrice';


// States
const App = () => {
  const [menu, setMenu] = useState([
    {name: "Pizza", price: 15.00},
    {name: "Hamburger", price: 10.00},
    {name: "Hot Dog", price: 7.00},
    {name: "French Fries", price: 5.00},
    {name: "Soda", price: 3.00},
    {name: "Water", price: 3.00},
    {name: "Fish Sticks", price: 15.00},
  ])
  const [orderList, setOrderList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.00)

// Functions
  const orderItem = (selectedItem) => {
    //alert("input alert")
    // menu[selectedItem].price
    let order = `${menu[selectedItem].name} \$${menu[selectedItem].price.toFixed(2)}`
    setOrderList((orderList) => [...orderList, order + "\n"])
    let price = totalPrice + menu[selectedItem].price 
    setTotalPrice(totalPrice + menu[selectedItem].price)
    // alert(order)
  }

// Returns
  return (
    <div className="App">
      {menu.map((item, index) => {
        return (
          <Menu orderItem={orderItem} item={item} index={index} key={index} />
        )
      })}

      <Order orderList={orderList} />
      <TotalPrice totalPrice={totalPrice}/>

    </div>
  );
}

export default App;
