import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("black")

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=> {
      clearInterval(intervalId)
    }
  },[])
  const handleColor = event =>{
    setColor(event.target.value)
  }
  return (
    <>
      <h1>Let's see the colorful time!</h1>
      <p>Pick a Color :{" "}
        <select style={{padding: "7px"}} value={color} onChange={handleColor}>
          <option value={color}>Select Color</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
      </p>
      <h1 style={{color : color}}>{time.toLocaleTimeString()}</h1>
    </>
  )
}

export default App
