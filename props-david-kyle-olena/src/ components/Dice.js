
let Dice = (props) => {
  return(
      <div>
          <div>CLICK BUTTON ROLL</div>
          <div className = "box" style={{border: '5px solid black', height: '300px', width: '300px', fontSize: '150px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{props.dice[props.index]}  
           </div>
        
  

      </div>
  )
}
export default Dice;