import React from 'react'
const GoodRobot = (props) => {
  const whyAreYouBeeping = (input) => {
    let firstLetter = input.charAt(0).toUpperCase()
    let restOfWord = input.slice(1)
    return `you said ${firstLetter}${restOfWord}, is that correct?`
  }
  return (
    <>
      <h3>{whyAreYouBeeping(props.userName)}</h3>
    </>
  )
}
export default GoodRobot