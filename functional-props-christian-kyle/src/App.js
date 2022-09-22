import './App.css';
import React, {useState} from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import Calculator from './components/Calculator';


// States
const App = () => {
  const [menu, setMenu] = useState([
      { name: "Carne asada tacos(3)", price: 10.99},
        { name: "Carne asada Fries", price: 12.99},
        { name: "Tacos Al Pastor(3)", price: 9.99},
        { name: "Tacos de Piscado(3)", price:8.99},
        { name: "Fluatas (12)", price: 7.99}
  ])
  const [orderList, setOrderList] = useState([])
  const [calculator, setCalculator] = useState(0.00)

// Functions
  const orderItem = (selectedItem) => {
    //alert("input alert")
    // menu[selectedItem].price
    let order = `${menu[selectedItem].name} \$${menu[selectedItem].price.toFixed(2)}`
    setOrderList((orderList) => [...orderList, order + "\n"])
    let price = calculator + menu[selectedItem].price 
    setCalculator(calculator + menu[selectedItem].price)
    // alert(order)
  }

// Returns
  return (
    <div className="App">
      <body>   
      <h1>Robertos Taqueria Y Mas!</h1>
         
      {menu.map((item, index) => {
        return (
        
          <Menu orderItem={orderItem} item={item} index={index} key={index} /> 
        )
      })}
      
      <Order orderList={orderList} />
      <Calculator calculator={calculator}/>
      </body>
    </div>
  );
}
export default App;