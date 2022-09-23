
const GoodRobot = (props) => {
    //create user input variable for props
   const userInput = props.userInput   
     
    return (
      <div className="GoodRobot">
        <h1>Good Robot</h1> 
        {/* //displays user Input  */}
        {userInput}  
      </div>
    );
  }
  
  export default GoodRobot 