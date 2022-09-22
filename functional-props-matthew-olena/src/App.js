import './App.css';
import MenuItem from './components/MenuItem';
import React, { useState } from "react";
import Price from './components/Price'
import OrderReceipt from './components/OrderReceipt';


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

  const [orderReceipt, setOrderReceipt] = useState([]);

  // const handleClick = () => {
  //   setOrderReceipt([...orderReceipt])
  // }

  const orderItem = (selectedItem) => {
    // finding the item by index(selectedItem) in the menu array, the accessing the ordered property and reassigning value to true
    menu[selectedItem].ordered = true
    //menu[selectedItem].price = setOrderReceipt
    // spread operator
    setOrderReceipt([...orderReceipt, menu[selectedItem]])
    setMenu([...menu])
  
    console.log(orderReceipt)
  };

  return (
    <>
    <div>
      <h1>Deli Delicious</h1>
    </div>

      <div>
        <h2>Menu</h2>
      </div>
      
      {menu.map((item, index) => {
        return <MenuItem item={item} 
                          key={index} 
                          orderItem={orderItem}
                          index={index} />;

      })}
      <div className= "orderRecipt">
          {orderReceipt.map((value, index) => {
            return (
            <OrderReceipt key={index} count={value} />
            )
          })}
        
      </div> 
    </>
  );
};

export default App;
