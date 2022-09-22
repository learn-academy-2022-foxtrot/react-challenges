
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import FoodCart from './components/FoodCart';


const App = () => {
const [menu, setMenu] = useState([

  {foodItem:"carne asada burrito", price:10.99, ordered: false},
  {foodItem:"carnita nachos", price:8.88, ordered: false},
  {foodItem:"enchiladas", price:7.99, ordered: false},
  {foodItem:"al pastor tacos", price:2.69, ordered: false},
  {foodItem:"combo quesadillas", price:6.99, ordered: false}
])
const [orderedItem, setOrderedItem] = useState([]) 

  var total = 0
const orderItem = (selectedItem) => {
  menu[selectedItem].ordered = true
  //console.log(orderedItem)
  let totalPrice = 0

  setMenu([...menu])
  setOrderedItem([...orderedItem,menu[selectedItem]])
  // let totalCost = orderedItem[selectedItem][price].map(value => value+=value)

  for (let i=0; i<orderedItem.length;i++){
    totalPrice += orderedItem[i].price

    console.log(totalPrice)
  }
  // let totalPrice = orderedItem.forEach((price)=> price += price)
  // console.log(totalPrice)
  //orderItemCart.push(menu[selectedItem].foodItem)
      // for(let i = 0; i < orderedItem.price.length;i++){
    //   console.log(orderedItem.price[i])
    // }
    // console.log(orderedItem[i].price) 
    // console.log(total)
    // if(orderedItem.price(i)) 
}



return(
  <>
  <h1>order here</h1>
  {menu.map((item,index) =>
  {
    return (<Menu item = {item} key = {index} orderItem = {orderItem} index = {index} />)
  }
  )}

<br></br>
<p> your order</p>
  {orderedItem.map((item,index) => 
  {
    return (<FoodCart item = {item} key = {index} 
    />)
  }
  )}
  
  </>
)
}



export default App;
