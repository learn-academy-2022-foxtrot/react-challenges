
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu'


const App = () => {
const [menu, setMenu] = useState([

  {foodItem:"carne asada burrito", price:"10.99", ordered: false},
  {foodItem:"carnita nachos", price:"8.88", ordered: false},
  {foodItem:"enchiladas", price:"7.99", ordered: false},
  {foodItem:"al pastor tacos", price:"2.69", ordered: false},
  {foodItem:"combo quesadillas", price:"6.99", ordered: false}
])
const [orderedItem, setOrderedItem] = useState([]) 


const orderItem = (selectedItem) => {
  menu[selectedItem].ordered = true
  console.log(orderedItem)
  setMenu([...menu])
  setOrderedItem([...orderedItem,menu[selectedItem]])
  
  //orderItemCart.push(menu[selectedItem].foodItem)
  
}



return(
  <>
  <h1>order here</h1>
  {menu.map((item,index) =>
  {
    return (<Menu item = {item} key = {index} orderItem = {orderItem} index = {index} />)
  }
  )}
  </>
)
}



export default App;
