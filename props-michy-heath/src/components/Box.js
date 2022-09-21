import React, {useState} from 'react'


const Box = (props) => {
  return (
    <>
      <div className="box">
         <h1>{props.box[props.index]}</h1>
       
      </div>
    </>
  )
}

export default Box