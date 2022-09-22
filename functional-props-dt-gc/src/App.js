import './App.css';
import React, {useState} from 'react';
import Menu from './components/MenuItems';



const App = () => {

  const [menu, setMenu] = useState([
    { name: "Bacon", price: "$2.00", ordered: false },//index = 0
    { name: "Hotdog", price: "$1.00", ordered: false },// index = 1
    { name: "Fruit", price: "$2.50", ordered: false },// index = 2
    { name: "Salad", price: "$3.00", ordered: false },// index = 3
  ])

  const upDatedOrder = (elementId) => {
    menu[elementId].ordered = true
    setMenu([...menu])
  }

  return (
    <div className="App">
      <div className='menu'>
        This is our menu

        <Menu menu={menu} upDatedOrder={upDatedOrder}/>

      </div>
    </div>
  );
}

export default App;




