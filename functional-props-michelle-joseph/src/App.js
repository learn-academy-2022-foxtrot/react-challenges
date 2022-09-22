import './App.css';
import React, { useState } from 'react'
import MenuItem from './components/MenuItem';

const App = () => {

  const [menu, setMenu] = useState(
    [{name: "Zombie Eyeballs",price: 50, ordered: false},
    {name: "Human Brain",price: 120, ordered: false},
    {name: "Dracula's Wine",price: 25, ordered: false},
    {name: "Mummy Jerky",price: 20, ordered: false},
    {name: "Classic Maggots",price: 10, ordered: false},
    {name: "Fried Bat Wings",price: 10, ordered: false}
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }

  return (
    <>
    <h1>Frankie's Ghoulish Bites</h1>
    <h2>Menu</h2>
    {menu.map((item, index) => {
      return <MenuItem item={item}
                        key={index}
                        orderItem={orderItem}
                        index={index} />;
    })}
    </>
  )
}

export default App;
