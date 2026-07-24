import './App.css'

import React, { useEffect, useState } from 'react'

function App() {
  const [ traffic, setTraffic ] = useState("green")


  useEffect(()=>{
    let timer;

    if(traffic === "green"){
      setTimeout(()=>{
        setTraffic("yellow")
      },1000)
    }

    if(traffic === "yellow"){
      setTimeout(()=>{
        setTraffic("red")
      },1000)
    }

    if(traffic === "red"){
      setTimeout(()=>{
        setTraffic("green")
      },1000)
    }

    return ()=> {
      clearTimeout(timer)
    }


  },[traffic])

  return (
    <>
    
    <div className="outer-div">
      <h1>Traffic Light</h1>
      <div className="inner-div">
        
        <div className={`light ${traffic === "green" ? "green" : ""}`}></div>
        
        <div className={`light ${traffic === "yellow" ? "yellow" : ""}`}></div>
        
        <div className={`light ${traffic === "red" ? "red" : ""}`}></div>
      
      </div>
    </div>
    </>
  )
}

export default App