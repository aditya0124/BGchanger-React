import { useState } from "react"


function App() {
  const[color,setColor] = useState("blue")

  return (
    
     <div className="w-full h-full text-centre h-full"
     style={{backgroundColor:color}}
     >
      <h1>Aditya</h1>
     </div>
     
    
  )
}

export default App
