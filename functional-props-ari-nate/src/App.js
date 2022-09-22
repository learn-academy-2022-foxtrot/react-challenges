import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MenuItem from "./components/MenuItem";

const App = () => {
  const [menu, setMenu] = useState([
    { name: "California Burrito", ordered: false, price: 8 },
    { name: "Rolled Tacos", ordered: false, price: 5 },
    { name: "Chicken Quesadilla", ordered: false, price: 6 },
    { name: "Carne Asada Burrito", ordered: false, price: 8 },
    { name: "Cheese Enchilada", ordered: false, price: 7 },
  ]);

  const handleOrderClick = (selectedItem) => {
    console.log(menu[selectedItem].price);
    menu[selectedItem].ordered = true;
    setMenu([...menu]);
    console.log(menu[selectedItem].ordered);
    // setMenu([...(menu.ordered = true)]);
  };

  return (
    <>
      <h1>Jilbertos Taco Shop</h1>
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
    </>
  );
};

export default App;
