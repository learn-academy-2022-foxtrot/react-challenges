import React from "react"
import {useState} from "react"

const MenuItems = (props) => {
const [onButton, setOnButton] = useState (true)//true equals button is on


const handleButtonClick = () => {
  setOnButton(false)
}

  return (
    <div className='menu-items'>
          {props.menu.map((item, index) => {
            return <> <li  key={index}>{item.name}</li>
            
            <button onClick={handleButtonClick}>Order</button></>
            
            //"item" is equal to menu[0]. Adding ".name" will give back "bacon" on first iteration 
          })}
      
    </div>
  )
}

export default MenuItems