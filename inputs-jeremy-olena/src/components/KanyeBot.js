const KanyeBot = (props) => {
    //create the user var for prompts
    const userInput = props.userInput

     return (
   
       <div className="KanyeBot">
         <h1>KanyeBot</h1> 
        {/* //display user input here */}
        <p> I`m gonna let you finish but Beyonce is {userInput}</p>
       </div>
     );
   }
   
   export default KanyeBot