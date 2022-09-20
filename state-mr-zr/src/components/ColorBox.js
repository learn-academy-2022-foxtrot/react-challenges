const ColorBox = () => {
    // const [color, setColor] = useState("purple")
    return (
        <>
            <div className="box"> White </div>
            {/* <button onClick={}></button> */}
        </>
    )
}
export default ColorBox
// Method return a random number from 0 to 255 
const rgbValue = () => {
    return Math.floor(Math.random() * 256)
}
    
  // Method generates an array of rgb colors
  const colorsArr = ['red','orange','yellow','green','blue','purple','pink']

  const generateColors = (array) => {
    let colors = []
      for(let i=0; i<array.length; i++){
            if(array.length[i] ){

            }
        
    }
    return colors
  }
    
  export { rgbValue, generateColors }