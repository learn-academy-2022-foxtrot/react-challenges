import './App.css';
import React, {useState} from 'react';
import Menu from './components/MenuItems';



const App = () => {

  const [menu, setMenu] = useState([
    { name: "Bacon", orderd: false },//index = 0
    { name: "Hotdog", orderd: false },// index = 1
    { name: "Fruit", orderd: false },// index = 2
    { name: "Salad", orderd: false },// index = 3
  ])
// console.log(menu[0].name)
  return (
    <div className="App">
      <div className='menu'>
        This is our menu

        <Menu menu={menu}/>
        
      </div>
    </div>
  );
}

export default App;




