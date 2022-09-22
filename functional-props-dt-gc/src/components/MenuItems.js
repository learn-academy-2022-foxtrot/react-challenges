import React from "react"

const MenuItems = (props) => {
console.log(props.menu.name)

const handleButtonClick = (e) => {
  props.upDatedOrder(e.currentTarget.id)
}
// console.log(props.upDatedOrder)
  return (
    <div className='menu-items'>
          {props.menu.map((item, index) => {
            return <> 
            <li  key={index}>{item.name} {item.price}</li>
            {item.ordered === false ? <button id={index} onClick={handleButtonClick}>Order</button>: 
            <p>Ordered</p>
            }
           </>
        
            //"item" is equal to menu[0]. Adding ".name" will give back "bacon" on first iteration 
          })}
      
    </div>
  )
}

export default MenuItems