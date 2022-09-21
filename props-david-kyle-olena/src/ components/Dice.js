


let Dice = (props) => {
 
  return(
      <div>
                  <div onClick={props.clickEvent} className = "box" style={{border: '5px solid black', height: '300px', width: '300px', fontSize: '150px', marginRight: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{props.dice[props.index]} 
           </div>
        <h1> Click Box to Roll</h1> 
  

      </div>
  )
}
export default Dice;