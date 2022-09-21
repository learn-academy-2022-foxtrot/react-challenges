import React from 'react'

const Dice = (props) => {
    return (
        <>
        <h2 className='dice'>This is a Dice</h2>
        <h1>{props.dice[props.index]}</h1>
        
        </>
    )
}

export default Dice