import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");

  return (
   <>
    <div className=" h-screen w-full " style={{backgroundColor:color}}>
     <div className=" fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 gap-4 rounded-3xl  ">
        <div class="flex flex-wrap rounded-3xl justify-center shadow-lg px-3 py-2 bg-white gap-4"> 
          <button onClick={()=>setColor("red")} className=" outline-none px-4 py-1 rounded-full  text-white shadow-sm" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className=" outline-none px-4 py-1 rounded-full  text-white shadow-sm" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className=" outline-none px-4 py-1 rounded-full  text-white shadow-sm" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("Orange")}className=" outline-none px-4 py-1 rounded-full  text-white shadow-sm" style={{backgroundColor:"orange"}}>Orange</button>
        </div>

        
        
        
        
       
    </div> 
    </div>

  </>    
  )
}

export default App