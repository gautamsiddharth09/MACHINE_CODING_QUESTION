import React, { useState } from 'react'
import Modal from './components/Modal'
import "./App.css"

function App() {
  const [ show, setShow] = useState(false)

  const handleClick = ()=>{
         setShow((prev)=>!prev)
  }
  return (
    <>
    <button onClick={handleClick}>Click Modal</button>
    <Modal onclick={handleClick} show={show} />
    <Modal onclick={handleClick} show={show} />
  
    </>
  )
}

export default App