import { useEffect, useState } from "react";
import "./App.css";

import React from 'react'

function App() {

  const [ time, setTime ] = useState(new Date())

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTime(new Date())
    },1000)

    return ()=>clearInterval(timer)
  })

  const hours = String(time.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2,"0")
  const seconds = String(time.getSeconds()).padStart(2,"0")
  const period = hours <= 12 ? "AM" : "PM"


  return (
    <div className="container">
      <div className="clock">
      {hours}:{minutes}:{seconds}:{period}

       {/* {time.toLocaleTimeString()} */}
      </div>
    </div>
  )
}

export default App