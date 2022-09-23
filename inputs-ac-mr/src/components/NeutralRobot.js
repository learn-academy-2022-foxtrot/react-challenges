import React from 'react'
const NeutralRobot = (props) => {
  const whyAreYouBeeping = (input) => {
    let firstLetter = input.charAt(0).toUpperCase()
    let restOfWord = input.slice(1)
    return `${firstLetter}${restOfWord}`
  }
  return (
    <>
      <h3>{whyAreYouBeeping(props.userName)}</h3>
    </>
  )
}
export default NeutralRobot