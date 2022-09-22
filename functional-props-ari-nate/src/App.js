import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import CurrentOrder from "./components/CurrentOrder";
import image from "./components/Images";

const App = () => {
  const [menu, setMenu] = useState([
    { name: "California Burrito", ordered: false, price: 8.99 },
    { name: "Rolled Tacos", ordered: false, price: 5.99 },
    { name: "Chicken Quesadilla", ordered: false, price: 6.99 },
    { name: "Carne Asada Burrito", ordered: false, price: 8.99 },
    { name: "Cheese Enchilada", ordered: false, price: 7.99 },
  ]);

  const [currentOrder, setCurrentOrder] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleOrderClick = (selectedItem) => {
    menu[selectedItem].ordered = true;
    setMenu([...menu]);
    setCurrentOrder([
      ...currentOrder,
      menu[selectedItem].name,
      menu[selectedItem].price,
    ]);
    setCurrentPrice(currentPrice + menu[selectedItem].price * 1.08);
    console.log(currentPrice);
  };

  return (
    <>
      <div className="menu_container">
        <div className="image_container">
          <img src="./public/icon.svg" />
        </div>
        <div className="title_container">
          <h1>The Sombrero Spot</h1>
        </div>
        <div className="menu_item">
          {menu.map((item, index) => {
            return (
              <MenuItem
                item={item}
                key={index}
                index={index}
                onClick={handleOrderClick}
              />
            );
          })}
        </div>
        <div>
          <h2>Your Current Order:</h2>
          <div>
            {currentOrder.map((item, index) => {
              return (
                <CurrentOrder
                  key={index}
                  item={item}
                  index={index}
                  onClick={handleOrderClick}
                />
              );
            })}
          </div>
          <div>
            <div>
              <h2>Total Cost:</h2>
            </div>
            <div>{currentPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
