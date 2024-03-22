import { useState } from "react"


function App() {
  
  const [color,setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-1000" style={{backgroundColor:color}}  >
            <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
              <div className="flex justify-center gap-3 bg-white rounded-lg px-2 py-2">
                <button onClick={()=>setColor("red")} className="text-white justify-center rounded-lg bg-red-600 px-5 rounded-lg" >Red</button>
              
              
                <button onClick={()=>setColor("yellow")} className="text-white justify-center rounded-lg bg-yellow-500 px-5 rounded-lg" >Yellow</button>
                
                <button onClick={()=>setColor("blue")} className="text-white justify-center rounded-lg bg-blue-800 px-5 rounded-lg" >Blue</button>

                <button onClick={()=>setColor("purple")} className="text-white justify-center rounded-lg bg-purple-700 px-5 rounded-lg" >Purple</button>
              </div>
            </div>
      </div>
    </>
  )
}

export default App
