import './App.css';
import MenuItem from './components/MenuItem';
import React, { useState } from "react";
import Price from './components/Price'
import OrderRecipt from './components/OrderRecipt';


const App = () => {
  const [menu, setMenu] = useState([
    { name: "Bratwurst", price: "$4.99", ordered: false },
    { name: "Beef/Chicken Shawarma", price: "$6.99", ordered: false },
    { name: "Falafel", price: "$3.99", ordered: false },
    { name: "Poutine", price: "$7.99", ordered: false },
    { name: "Fish and Chips", price: "$8.99", ordered: false },
    { name: "Salad", price: "$5.99", ordered: false },
  ]);

  // create a function w/arg that we pass down to MenuItem that will be called when button clicked

  const [orderRecipt, setOrderRecipt] = useState([]);

  // const handleClick = () => {
  //   setOrderRecipt([...orderRecipt])
  // }

  const orderItem = (selectedItem) => {
    // finding the item by index(selectedItem) in the menu array, the accessing the ordered property and reassigning value to true
    menu[selectedItem].ordered = true
    menu[selectedItem].price = setOrderRecipt
    // spread operator
    setMenu([...menu])
  };

  return (
    <>
      <h1>Deli Delicious</h1>
      <h2>Menu</h2>
      {menu.map((item, price, index) => {
        return <MenuItem item={item} 
                          key={index} 
                          price={price}
                          orderItem={orderItem}
                          index={index} />;

      })}
      <div className= "orderRecipt">
          {orderRecipt.map((value, price, index) => {
            return <OrderRecipt key={index} price={price} count={value} />;
          })}
      </div>
    </>
  );
};

export default App;
