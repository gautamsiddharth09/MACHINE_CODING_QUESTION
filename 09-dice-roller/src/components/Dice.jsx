import { useState } from "react";
import "../App.css";

import React from 'react'

function Dice() {
  const [ dice, setDice] = useState(1)

  const handleClick = ()=>{
    const num =  Math.floor(Math.random() * 6) + 1
     setDice(num)
  }



  return (
    <>
    
    
    <div className="main-div">
      <h1>Dice Roller</h1>
      <div className="inner-div">
       <div className="dice"> {dice}  </div>
        <button onClick={handleClick}>Roll</button>
      </div>

     
    </div>
    
    
    
    </>
  )
}

export default Dice