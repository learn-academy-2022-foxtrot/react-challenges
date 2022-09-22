import React, { useState } from "react"
import FoodDisplay from "./components/FoodDisplay"
import OrderedFood from "./components/OrderedFood"
import "./App.css"
import curry from "./components/curry.webp"
import pizza from "./components/pizza.jpeg"
import sushi from "./components/sushi.jpeg"
import spaghetti from "./components/spaghetti.jpeg"

const App = () => {
  const [food, setFood] = useState([
    { name: "Curry", price: 12, ordered: false },
    { name: "Pizza", price: 8, ordered: false },
    { name: "Sushi", price: 4, ordered: false },
    { name: "Spaghetti", price: 11, ordered: false }
  ])
  const [logFood, setLogFood] = useState([])
  const orderedItem = (selectedItem) => {
    // the logic for updating the state data will live here
    food[selectedItem].ordered = true
    setLogFood([...logFood, food[selectedItem]])
    console.log(food[selectedItem])
  }

  return (
    <div className="container">
      <div className="food">
        <h1>Foobar Eats</h1>
        <div>
          <h4>Curry</h4>
          <img src={curry} alt="bowl of curry" height="100px" width="100px" />
        </div>

        <div>
          <h4>Pizza</h4>
          <img src={pizza} alt="pizza" height="100px" width="100px" />
        </div>

        <div>
          <h4>Sushi</h4>
          <img src={sushi} alt="sushi roll" height="100px" width="100px" />
        </div>

        <div>
          <h4>Spaghetti</h4>
          <img src={spaghetti} alt="bowl of spaghetti" height="100px" width="100px" />
        </div>
        {food.map((food, index) => {
          return (
            <FoodDisplay
              food={food}
              orderedItem={orderedItem}
              index={index}
            />
          )
        })}</div>
      <div className="order">
        <h2>Your Order</h2>
        {logFood.map((order, index) => {
          return (<OrderedFood order={order} index={index} />)
        })}

      </div>
    </div>
  )
}

export default App


